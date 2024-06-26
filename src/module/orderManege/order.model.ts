import mongoose from 'mongoose';
const { Schema } = mongoose;

const orderSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  productId: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
});

export const Order = mongoose.model('Order', orderSchema);
