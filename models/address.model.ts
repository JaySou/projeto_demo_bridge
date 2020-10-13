export class AddressModel {
    id?: string;
    zipCode: string;
    street: string;
    number: string;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;
    stateInitials: string;
    referencePoint: string;
    contact: {
        phone: string;
        firstName?: string;
        lastName?: string;
    };
    default: {
        defaultShipping: boolean;
        defaultBilling: boolean;
    };
}
