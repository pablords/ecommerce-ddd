import { CategoryEntity } from "./category.entity";
import { faker } from "@faker-js/faker";

describe("CategoryEntity", () => {
  it("should be create a category", () => {
    const newCategory = new CategoryEntity({
      id: faker.datatype.uuid(),
      name: faker.commerce.department(),
      description: faker.commerce.productAdjective(),
      createdAt: faker.date.recent(),
    });
    const createdCategory = CategoryEntity.create(newCategory)
    expect(createdCategory).toEqual(newCategory);
  });
});
