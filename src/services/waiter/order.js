import request from '../request';

const orderService = {
  getAll: (params) =>
    request.get('dashboard/waiter/internal-orders/paginate', { params }),
  getById: (id, params) =>
    request.get(`dashboard/waiter/internal-orders/orders/${id}`, { params }),
  create: (data) =>
    request.post('dashboard/waiter/internal-orders/orders', data),
  update: (id, data) =>
    request.put(`dashboard/waiter/internal-orders/orders/${id}`, data),
  updateStatus: (id, data) =>
    request.post(`dashboard/waiter/internal-orders/order/${id}/status`, data),
  updateDelivery: (id, data) =>
    request.post(
      `dashboard/waiter/internal-orders/order/${id}/deliveryman`,
      data
    ),
  delete: (params) =>
    request.delete(`dashboard/waiter/internal-orders/orders/delete`, {
      params,
    }),
};

export default orderService;
