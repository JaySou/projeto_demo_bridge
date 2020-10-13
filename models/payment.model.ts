export class PaymentDetailsModel {
    name: string;
    value: string;
}

export class PaymentSlipModel {
    issueDate: string;
    dueDate: string;
    details?: Array<PaymentDetailsModel>;
}

export class PaymentCreditCardModel {
    printedName: string;
    numberCard: string;
    expired: string;
    codeSecurity: string;
    details?: Array<PaymentDetailsModel>;
}

export class PaymentStoreCardModel {
    details?: Array<PaymentDetailsModel>;
}

type PaymentMethod = PaymentSlipModel | PaymentCreditCardModel | PaymentStoreCardModel;

export class PaymentModel {
    paymentMethod: PaymentMethod;
    withTax?: boolean;
}
