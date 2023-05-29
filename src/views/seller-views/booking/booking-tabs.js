import React, { useEffect } from 'react';
import { Button, Card, Form, Row, Spin } from 'antd';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchBookingZone, setCurrentZone } from 'redux/slices/booking-zone';

export default function OrderTabs() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { activeMenu } = useSelector((state) => state.menu, shallowEqual);
  const { current_zone, zone, loading } = useSelector(
    (state) => state.bookingZone,
    shallowEqual
  );

  useEffect(() => {
    if (activeMenu.refetch) {
      dispatch(fetchBookingZone());
    }
  }, [activeMenu.refetch]);

  const handleChange = (item) => dispatch(setCurrentZone(item));

  return (
    <Card style={{ height: '100vh' }}>
      <Form layout='vertical' name='booking-form' form={form}>
        <div className='booking_tabs'>
          {loading ? (
            <Spin />
          ) : (
            zone.map((item) => (
              <Button
                type={
                  current_zone?.translation?.title === item.translation?.title
                    ? 'primary'
                    : 'text'
                }
                key={item?.id}
                onClick={() => handleChange(item)}
              >
                {item.translation?.title}
              </Button>
            ))
          )}
        </div>
        <Row gutter={6} style={{ marginBottom: 15 }}></Row>
      </Form>
    </Card>
  );
}
