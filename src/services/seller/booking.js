import request from '../request';

const sellerBooking = {
  getAll: (params) => request.get('dashboard/seller/user-bookings', { params }),
  create: (data) => request.post('dashboard/seller/user-bookings', data),
};

export default sellerBooking;
