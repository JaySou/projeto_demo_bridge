import { ICategoryService } from '../../models';
import { IOrderService } from '../../models';
import { MagentoCategoryService } from './category/magento.category.service';
import { MagentoOrderService } from './order/magento.order.service';

export class MagentoBridge {

  categoryservice: ICategoryService;
  orderService: IOrderService;

  constructor(){
    this.categoryservice = new MagentoCategoryService();
    this.orderService = new MagentoOrderService();
  }
}