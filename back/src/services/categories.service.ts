import { Category } from "../entities/Category";
import { CategoryRepository } from "../repositories/category.respository";

export const getCategoriesService = async (): Promise<Category[]> => {
  const category: Category[] | null = await CategoryRepository.find();
  return category;
};
