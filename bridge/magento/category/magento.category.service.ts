import { CategoryModel, ICategoryService } from "../../../models";

import MagentoDataCategories from "../../../magentoData/categories";

export class MagentoCategoryService implements ICategoryService {
  async get(): Promise<CategoryModel[] | any> {
    const result = MagentoDataCategories;

    const mapChildren = (children: any, toArray: any[]) => {
      if (!children.children_data) {
        return;
      }

      toArray.push({
        id: children.id,
        name: children.name,
        parent_id: children.parent_id,
      });

      children.children_data.forEach((element: any) => {
        mapChildren(element, toArray);
      });
    };

    let rootCategory = result.children_data;

    let categoryBridge: any = [];

    categoryBridge.push({
      id: result.id,
      name: result.name,
      parent_id: result.parent_id,
    });

    rootCategory.forEach((element) => {
      mapChildren(element, categoryBridge);
    });

    let listCategories: CategoryModel[] = categoryBridge.map(
      (category: any, index: number, array: any[]): CategoryModel => ({
        id: category.id.toString(),
        name: category.name,
        parentCategories: array
          .filter((parent: any) => category.parent_id === parent.id)
          .map((current_parent: any) => ( { parentId: current_parent.id, parentName: current_parent.name })),
      })
    );

    return listCategories;
  }
  async getId(id: string): Promise<CategoryModel | any> {
    return 1;
  }
}
