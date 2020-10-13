import { CategoryModel } from "./category.model";

export interface ICategoryService {
  get(): Promise<CategoryModel[] | any>
  getId(id: string): Promise<CategoryModel | any>
}