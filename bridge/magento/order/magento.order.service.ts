import {
  AddressModel,
  CategoryModel,
  CommerceItem,
  OrderModel,
  OrderStatusModel,
  PaymentCreditCardModel,
  PaymentModel,
  PaymentSlipModel,
  PaymentStoreCardModel,
} from "../../../models";

import MagentoDataOrder from "../../../magentoData/order";
import { IOrderService } from "../../../models/order.service";

export class MagentoOrderService implements IOrderService {
  async get(): Promise<CategoryModel[] | any> {

    const result = MagentoDataOrder;

    let statusMagento: OrderStatusModel[] = result.status_histories.map(
      (status) => ({
        id: status.entity_id.toString(),
        name: status.status,
        value: status.status,
        data: status.created_at,
      })
    );

    let addressMagento: AddressModel[] = result.extension_attributes.shipping_assignments.map(
      (item) => ({
        id: item.shipping.address.entity_id.toString(),
        city: item.shipping.address.city,
        state: "",
        stateInitials: "",

        street: item.shipping.address.street[0],
        number: item.shipping.address.street[1],
        complement: item.shipping.address.street[2],
        referencePoint: item.shipping.address.street[2],
        neighborhood: item.shipping.address.street[3],

        zipCode: "",
        default: {
          defaultBilling: true,
          defaultShipping: true,
        },
        contact: {
          phone: "",
          firstName: "",
          lastName: "",
        },
      })
    );



    let boleto: PaymentSlipModel = {
      dueDate: '12-12-2019',
      issueDate: '12-12-2019',
      details: [
        {
          name: '',
          value: ''
        }
      ]
    }

    // let credito: PaymentCreditCardModel = {
    //   codeSecurity: '123',
    //   expired: '12-12-2023',
    //   numberCard: '1234 4567 7879 1234',
    //   printedName: 'nome usuario',
    //   details: [
    //     {
    //       name: '',
    //       value: '',
    //     }
    //   ]
    // }

    // let loja: PaymentStoreCardModel = {
    //   details: [
    //     {
    //       name: '',
    //       value: ''
    //     }
    //   ]
    // }

    let paymentMagento: PaymentModel = {
      paymentMethod: boleto,
      withTax: false,
    };

    let commerceItemMagento: CommerceItem[] = [
      {
        id: "",
        skuId: "",
        productId: "",
        quantity: 0,
        auxiliaryData: {
          product: {
            displayName: "",
          },
          sku: {
            price: {
              listPrice: 0,
              salePrice: 0,
              installmentQuantity: 0,
              installmentValue: 0,
            },
            attributes: [],
            displayName: "",
            medias: [],
          
          },
          
        },
      },
    ];

    let mapOrder: OrderModel = {
      id: result.entity_id.toString(),
      dateOrder: result.created_at,
      status: statusMagento,
      subTotal: result.subtotal,
      discount: result.discount_amount,
      freight: result.shipping_amount,
      total: result.grand_total,
      address: addressMagento,
      payment: paymentMagento,
      commerceItem: commerceItemMagento,

    };

    return mapOrder;
  }
}
