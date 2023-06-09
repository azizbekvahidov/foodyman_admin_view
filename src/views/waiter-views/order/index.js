import React, { useEffect, useState, useContext } from 'react';
import { Button, Space, Table, Card, Tabs, Tag, Select } from 'antd';
import { useNavigate } from 'react-router-dom';
import {
  ClearOutlined,
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
} from '@ant-design/icons';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {
  addMenu,
  disableRefetch,
  setMenuData,
} from '../../../redux/slices/menu';
import { Context } from '../../../context/context';
import { batch } from 'react-redux';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { clearOrder } from '../../../redux/slices/order';
import { useQueryParams } from '../../../helpers/useQueryParams';
import { fetchRestOrderStatus } from '../../../redux/slices/orderStatus';
import { clearItems, fetchOrders } from '../../../redux/slices/waiterOrder';
import { fetchOrders as fetchWaiterOrders } from '../../../redux/slices/waiterOrder';
import useDidUpdate from '../../../helpers/useDidUpdate';
import formatSortType from '../../../helpers/formatSortType';
import SearchInput from '../../../components/search-input';
import numberToPrice from '../../../helpers/numberToPrice';
import userService from '../../../services/seller/user';
import FilterColumns from '../../../components/filter-column';
import DeleteButton from '../../../components/delete-button';
import CustomModal from '../../../components/modal';
import orderService from '../../../services/waiter/order';
import OrderDeliveryman from './orderDeliveryman';
import OrderStatusModal from './orderStatusModal';
import RiveResult from 'components/rive-result';

const { TabPane } = Tabs;

export default function WaiterOrder() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [id, setId] = useState(null);
  const [text, setText] = useState(null);
  const { setIsModalVisible } = useContext(Context);
  const [loadingBtn, setLoadingBtn] = useState(false);
  const { defaultCurrency } = useSelector(
    (state) => state.currency,
    shallowEqual
  );
  const { statusList } = useSelector(
    (state) => state.orderStatus,
    shallowEqual
  );
  const statuses = [
    { name: 'all', id: '7', active: true },
    ...statusList,
    { name: 'deleted_at', id: '8', active: true },
  ];
  const [orderDeliveryDetails, setOrderDeliveryDetails] = useState(null);
  const [orderDetails, setOrderDetails] = useState(null);

  const goToShow = (row) => {
    dispatch(
      addMenu({
        url: `waiter/order/details/${row.id}`,
        id: 'order_details',
        name: t('order.details'),
      })
    );
    navigate(`/waiter/order/details/${row.id}`);
  };

  const [columns, setColumns] = useState([
    {
      title: t('id'),
      dataIndex: 'id',
      key: 'id',
      sorter: true,
      is_show: true,
    },
    {
      title: t('client'),
      dataIndex: 'user',
      key: 'user',
      is_show: true,
      render: (user) => (
        <div>
          {user.firstname} {user.lastname || ''}
        </div>
      ),
    },
    {
      title: t('status'),
      is_show: true,
      dataIndex: 'status',
      key: 'status',
      render: (status, row) => (
        <div
          onClick={(e) => {
            e.stopPropagation();
            setOrderDetails(row);
          }}
          className='cursor-pointer'
        >
          {status === 'new' ? (
            <Tag color='blue'>{t(status)}</Tag>
          ) : status === 'canceled' ? (
            <Tag color='error'>{t(status)}</Tag>
          ) : (
            <Tag color='cyan'>{t(status)}</Tag>
          )}
          {status !== 'delivered' &&
          status !== 'canceled' &&
          !row.deleted_at ? (
            <EditOutlined disabled={row.deleted_at} />
          ) : (
            ''
          )}
        </div>
      ),
    },

    {
      title: t('number.of.products'),
      dataIndex: 'order_details_count',
      key: 'order_details_count',
      is_show: true,
      render: (order_details_count) => {
        return (
          <div className='text-lowercase'>
            {order_details_count || 0} {t('products')}
          </div>
        );
      },
    },
    {
      title: t('amount'),
      dataIndex: 'total_price',
      key: 'total_price',
      is_show: true,
      render: (total_price) => {
        return numberToPrice(total_price, defaultCurrency?.symbol);
      },
    },
    {
      title: t('payment.type'),
      dataIndex: 'transaction',
      key: 'transaction',
      is_show: true,
      render: (transaction) => t(transaction?.payment_system?.tag) || '-',
    },
    {
      title: t('created.at'),
      is_show: true,
      dataIndex: 'created_at',
      key: 'created_at',
    },
    {
      title: t('options'),
      key: 'options',
      is_show: true,
      render: (_, row) => {
        return (
          <Space>
            <Button icon={<EyeOutlined />} onClick={() => goToShow(row)} />
            <DeleteButton
              icon={<DeleteOutlined />}
              onClick={() => {
                setId([row.id]);
                setIsModalVisible(true);
                setText(true);
              }}
            />
          </Space>
        );
      },
    },
  ]);

  const { activeMenu } = useSelector((state) => state.menu, shallowEqual);
  const querryParams = useQueryParams();
  const [role, setRole] = useState(querryParams.values.status || 'all');
  const immutable = activeMenu.data?.role || role;
  const { orders, meta, loading, params } = useSelector(
    (state) => state.waiterOrder,
    shallowEqual
  );
  const data = activeMenu?.data;
  const paramsData = {
    search: data?.search,
    sort: data?.sort,
    column: data?.column,
    perPage: data?.perPage,
    page: data?.page,
    user_id: data?.user_id,
    status: immutable !== 'deleted_at' && immutable,
    deleted_at: immutable === 'deleted_at' ? 'deleted_at' : undefined,
    shop_id:
      activeMenu.data?.shop_id !== null ? activeMenu.data?.shop_id : null,
    delivery_type:
      activeMenu.data?.delivery_type !== null
        ? activeMenu.data?.delivery_type
        : null,
    empty_waiter: 1
  };

  function onChangePagination(pagination, filters, sorter) {
    const { pageSize: perPage, current: page } = pagination;
    const { field: column, order } = sorter;
    const sort = formatSortType(order);
    dispatch(
      setMenuData({
        activeMenu,
        data: { ...data, perPage, page, column, sort },
      })
    );
  }

  const orderDelete = () => {
    setLoadingBtn(true);
    const params = {
      ...Object.assign(
        {},
        ...id.map((item, index) => ({
          [`ids[${index}]`]: item,
        }))
      ),
    };
    orderService
      .delete(params)
      .then(() => {
        toast.success(t('successfully.deleted'));
        setIsModalVisible(false);
        dispatch(fetchWaiterOrders(paramsData));
        setText(null);
      })
      .finally(() => setLoadingBtn(false));
  };

  useDidUpdate(() => {
    dispatch(fetchWaiterOrders(paramsData));
  }, [activeMenu?.data]);

  useEffect(() => {
    if (activeMenu?.refetch) {
      dispatch(fetchWaiterOrders(paramsData));
      dispatch(fetchRestOrderStatus());
      dispatch(disableRefetch(activeMenu));
    }
  }, [activeMenu?.refetch]);

  const handleFilter = (item, name) => {
    dispatch(
      setMenuData({
        activeMenu,
        data: { ...data, [name]: item },
      })
    );
  };

  async function getUsers(search) {
    const params = {
      search,
      perPage: 10,
    };
    return userService.getAll(params).then(({ data }) => {
      return data.map((item) => ({
        label: `${item.firstname} ${item.lastname}`,
        value: item.id,
      }));
    });
  }

  const goToAddOrder = () => {
    dispatch(clearOrder());
    dispatch(
      addMenu({
        id: 'pos.system',
        url: 'waiter/pos-system',
        name: t('add.order'),
      })
    );
    navigate('/waiter/pos-system');
  };

  const onChangeTab = (status) => {
    const orderStatus = status;
    dispatch(setMenuData({ activeMenu, data: { role: orderStatus, page: 1 } }));
    setRole(status);
    navigate(`?status=${orderStatus}`);
  };

  const rowSelection = {
    selectedRowKeys: id,
    onChange: (key) => {
      setId(key);
    },
  };

  const allDelete = () => {
    if (id === null || id.length === 0) {
      toast.warning(t('select.the.product'));
    } else {
      setIsModalVisible(true);
      setText(false);
    }
  };

  const handleClear = () => {
    batch(() => {
      dispatch(clearItems());
      dispatch(
        setMenuData({
          activeMenu,
          data: null,
        })
      );
    });
    dispatch(fetchOrders({ status: 'all', page: data?.page, perPage: 10 }));
  };

  const handleCloseModal = () => {
    setOrderDeliveryDetails(null);
    setOrderDetails(null);
  };

  return (
    <>
      <Card>
        <Space wrap className='p-0 mb-0'>
          <SearchInput
            placeholder={t('search')}
            handleChange={(search) => handleFilter(search, 'search')}
            defaultValue={activeMenu.data?.search}
          />

          <Select
            value={data?.delivery_type}
            placeholder={t('order.type')}
            onSelect={(type) => handleFilter(type, 'delivery_type')}
            options={[
              { label: t('pickup'), value: 'pickup' },
              { label: t('delivery'), value: 'delivery' },
            ]}
            allowClear
            style={{ width: '100%' }}
          />
          <Button icon={<ClearOutlined />} onClick={handleClear}>
            {t('clear')}
          </Button>
          <FilterColumns columns={columns} setColumns={setColumns} />
        </Space>
      </Card>

      <Card>
        <Tabs onChange={onChangeTab} type='card' activeKey={immutable}>
          {statuses
            .filter((ex) => ex.active === true)
            .map((item) => (
              <TabPane tab={t(item.name)} key={item.name} />
            ))}
        </Tabs>
        <Table
          locale={{
            emptyText: <RiveResult />,
          }}
          scroll={{ x: true }}
          rowSelection={rowSelection}
          columns={columns?.filter((item) => item.is_show)}
          dataSource={orders}
          loading={loading}
          pagination={{
            pageSize: params.perPage,
            page: activeMenu.data?.page || 1,
            total: meta?.total,
            defaultCurrent: activeMenu.data?.page,
            current: activeMenu.data?.page,
          }}
          rowKey={(record) => record.id}
          onChange={onChangePagination}
        />
        <CustomModal
          click={orderDelete}
          text={text ? t('delete') : t('all.delete')}
          loading={loadingBtn}
          setText={setId}
        />
      </Card>
      {orderDetails && (
        <OrderStatusModal
          orderDetails={orderDetails}
          handleCancel={handleCloseModal}
          status={statusList}
          paramsData={paramsData}
        />
      )}
      {orderDeliveryDetails && (
        <OrderDeliveryman
          orderDetails={orderDeliveryDetails}
          handleCancel={handleCloseModal}
        />
      )}
    </>
  );
}
