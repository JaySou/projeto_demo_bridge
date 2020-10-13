import { OrderModel } from './order.model';

export interface IOrderService {
  get(): Promise<OrderModel | any>;
}