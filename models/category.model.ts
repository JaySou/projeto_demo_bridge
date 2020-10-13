export class CategoryModel {
  id: string;
  name?: string;
  parentCategories?: Array<{ parentId: string, parentName: string }>;
}