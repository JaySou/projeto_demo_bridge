export class AttributesModel {
  field: string;
  value: string;
}

export class SkuModel {
  id?: number;
  name: string;
  attributes: AttributesModel[];
}

export class ProductModel {
  id?: number;
  name: string;
  skus: SkuModel[];
}
