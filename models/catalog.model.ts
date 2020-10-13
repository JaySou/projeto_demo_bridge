export class ProductModel {
    id: string;
    skus: SkuModel[];
    name: string;
    categories: CategoriesModel[];
    medias: ProductMediaModel[];
    attributes: AttributeModel[];
}
export class CategoriesModel {
    position: number;
    id?: string;
}
export class AttributeModel {
    name?: string;
    value?: string;
}
export class CategoryModel {
    id: string;
    name?: string;
    parentCategories?: Array<{ parentId: number; parentName: string }>;
}
export class SkuMedia {
    id?: string;
    original: string;
    largeUrl?: string;
    smallImage?: string;
    thumbnail?: string;
    swatchImage?: string;
}
export class SkuModel {
    id?: string;
    sku?: string;
    name?: string;
    medias?: SkuMedia[];
    price: ProductPriceModel;
    inventoryStatus?: number;
    attributes?: AttributeModel[];
}
export class ProductMediaModel {
    thumbnail?: string;
    large?: string;
    medium?: string;
    small?: string;
    original: string;
}
export class ProductPriceModel {
    listPrice: number | null;
    salePrice: number;
    installmentValue: number;
    installmentQuantity: number;
}
export class CatalogResponseModel {
    items: ProductModel[];
    currentPage: number;
    totalPage: number;
}
