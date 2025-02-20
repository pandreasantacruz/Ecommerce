import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

export const checkProductExists = async (itemId: number): Promise<boolean> => {
  const item: Product | null = await ProductRepository.findOneBy({
    id: itemId,
  });
  return !!item;
};

// export const getProductsService = async (): Promise<Product[]> => {
//   return await ProductRepository.find();
// };
export const getProductsService = async (query: {
  id?: number;
}): Promise<Product[]> => {
  const { id = null } = query;
  if (id) {
    const item: Product | null = await ProductRepository.findOneBy({ id: id });
    return item ? [item] : [];
  }
  return await ProductRepository.find();
};
