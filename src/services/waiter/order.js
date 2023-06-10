import request from '../request';

const orderService = {
  getAll: (params) =>
    request.get('dashboard/waiter/orders/paginate', { params }),
  getById: (id, params) =>
    request.get(`dashboard/waiter/orders/orders/${id}`, { params }),
  create: (data) =>
    request.post('dashboard/waiter/orders/orders', data),
  update: (id, data) =>
    request.put(`dashboard/waiter/orders/orders/${id}`, data),
  updateStatus: (id, data) =>
    request.post(`dashboard/waiter/orders/order/${id}/status`, data),
  updateDelivery: (id, data) =>
    request.post(
      `dashboard/waiter/orders/order/${id}/deliveryman`,
      data
    ),
  delete: (params) =>
    request.delete(`dashboard/waiter/orders/orders/delete`, {
      params,
    }),
};

export default orderService;
