import { AddressModel } from './address.model' ;
import { PaymentModel } from './payment.model' ;
import { SkuMedia, AttributeModel, ProductPriceModel } from './catalog.model' ;

export class OrderStatusModel {
  id?: string;
  name: string;
  value: string;
}

export class CommerceItem {
  id?: string;
  quantity: number;
  productId: string;
  skuId: string;
  auxiliaryData: {
      product: {
          displayName: string;
      };
      sku: {
          displayName: string;
          medias: SkuMedia[];
          price: ProductPriceModel;
          attributes: AttributeModel[];
      };
  };
}

export class OrderModel {
  id?: string;
  address: AddressModel;
  payment: PaymentModel;
  commerceItem: Array<CommerceItem>;
  dateOrder: string;
  status: OrderStatusModel;
  subTotal: number;
  discount: number;
  freight: number;
  total: number;
}
