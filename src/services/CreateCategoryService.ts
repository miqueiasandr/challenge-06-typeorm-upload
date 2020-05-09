import { getRepository } from 'typeorm';
import Category from '../models/Category';

class CreateCategoryService {
  public async execute(title: string): Promise<Category> {
    const categoriesRepository = getRepository(Category);

    let category = await categoriesRepository.findOne({
      where: { title },
    });

    if (category) {
      return category;
    }

    category = categoriesRepository.create({ title });

    await categoriesRepository.save(category);

    return category;
  }
}

export default CreateCategoryService;
