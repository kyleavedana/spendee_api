import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Type as PrismaType, Prisma } from '@prisma/client';

/**
 * Service for managing types.
 */
@Injectable()
export class TypeService {
  constructor(private prisma: PrismaService) {}

  /**
   * Find a type by its unique identifier.
   * @param typeWhereUniqueInput - The unique identifier of the type.
   * @returns The found type, or null if not found.
   */
  async find(
    typeWhereUniqueInput: Prisma.TypeWhereUniqueInput,
  ): Promise<PrismaType | null> {
    return this.prisma.type.findUnique({
      where: typeWhereUniqueInput,
    });
  }

  /**
   * Find all types based on the provided parameters.
   * @param params - The parameters for filtering, pagination, and sorting.
   * @returns An array of found types.
   */
  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.TypeWhereUniqueInput;
    where?: Prisma.TypeWhereInput;
    orderBy?: Prisma.TypeOrderByWithRelationInput;
  }): Promise<PrismaType[]> {
    if (!params) {
      return this.prisma.type.findMany();
    }

    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.type.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  /**
   * Create a new type.
   * @param data - The data for creating the type.
   * @returns The created type.
   */
  async create(data: Prisma.TypeCreateInput): Promise<PrismaType> {
    return this.prisma.type.create({
      data,
    });
  }

  /**
   * Update a type by its unique identifier.
   * @param params - The unique identifier of the type and the data to update.
   * @returns The updated type.
   */
  async update(params: {
    where: Prisma.TypeWhereUniqueInput;
    data: Prisma.TypeUpdateInput;
  }): Promise<PrismaType> {
    const { where, data } = params;
    return this.prisma.type.update({
      data,
      where,
    });
  }

  /**
   * Delete a type by its unique identifier.
   * @param where - The unique identifier of the type to delete.
   * @returns The deleted type.
   */
  async delete(where: Prisma.TypeWhereUniqueInput): Promise<PrismaType> {
    return this.prisma.type.delete({
      where,
    });
  }
}
