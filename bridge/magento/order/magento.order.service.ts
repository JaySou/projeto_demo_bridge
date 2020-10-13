import { CategoryModel, ICategoryService, OrderModel } from "../../../models";

import MagentoDataOrder from "../../../magentoData/order";
import { IOrderService } from "../../../models/order.service";

export class MagentoOrderService implements IOrderService {
  async get(): Promise<CategoryModel[] | any> {
  
    const result = MagentoDataOrder;


    return result;
  }

}