import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Category, Prisma } from '@prisma/client';

/**
 * Service responsible for handling category-related operations.
 */
@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  /**
   * Finds a category by its unique identifier.
   * @param categoryWhereUniqueInput - The unique identifier of the category.
   * @returns A promise that resolves to the found category, or null if not found.
   */
  async find(
    categoryWhereUniqueInput: Prisma.CategoryWhereUniqueInput,
  ): Promise<Category | null> {
    return this.prisma.category.findUnique({
      where: categoryWhereUniqueInput,
      include: {
        type: true,
      },
    });
  }

  /**
   * Finds all categories based on the provided parameters.
   * @param params - The parameters for filtering, pagination, and sorting.
   * @returns A promise that resolves to an array of categories.
   */
  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.CategoryWhereUniqueInput;
    where?: Prisma.CategoryWhereInput;
    orderBy?: Prisma.CategoryOrderByWithRelationInput;
  }): Promise<Category[]> {
    if (!params) {
      return this.prisma.category.findMany();
    }

    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.category.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include: {
        type: true,
      },
    });
  }

  /**
   * Creates a new category.
   * @param data - The data for creating the category.
   * @returns A promise that resolves to the created category.
   */
  async create(data: Prisma.CategoryCreateInput): Promise<Category> {
    return this.prisma.category.create({
      data,
    });
  }

  /**
   * Updates a category by its unique identifier.
   * @param params - The unique identifier of the category and the data to update.
   * @returns A promise that resolves to the updated category.
   */
  async update(params: {
    where: Prisma.CategoryWhereUniqueInput;
    data: Prisma.CategoryUpdateInput;
  }): Promise<Category> {
    const { where, data } = params;
    return this.prisma.category.update({
      data,
      where,
    });
  }

  /**
   * Deletes a category by its unique identifier.
   * @param where - The unique identifier of the category to delete.
   * @returns A promise that resolves to the deleted category.
   */
  async delete(where: Prisma.CategoryWhereUniqueInput): Promise<Category> {
    return this.prisma.category.delete({
      where,
    });
  }
}
