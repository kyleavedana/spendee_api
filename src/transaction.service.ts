import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Transaction, Prisma } from '@prisma/client';

/**
 * Service responsible for handling transactions.
 */
@Injectable()
export class TransactionService {
  constructor(private prisma: PrismaService) {}

  /**
   * Find a transaction by its unique identifier.
   * @param transactionWhereUniqueInput - The unique identifier of the transaction.
   * @returns The found transaction, or null if not found.
   */
  async find(
    transactionWhereUniqueInput: Prisma.TransactionWhereUniqueInput,
  ): Promise<Transaction | null> {
    return this.prisma.transaction.findUnique({
      where: transactionWhereUniqueInput,
      include: {
        category: {
          include: {
            type: true,
          },
        },
      },
    });
  }

  /**
   * Find all transactions based on the provided parameters.
   * @param params - The parameters for filtering, pagination, and sorting.
   * @returns An array of transactions.
   */
  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.TransactionWhereUniqueInput;
    where?: Prisma.TransactionWhereInput;
    orderBy?: Prisma.CategoryOrderByWithRelationInput;
  }): Promise<Transaction[]> {
    if (!params) {
      return this.prisma.transaction.findMany();
    }

    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.transaction.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include: {
        category: {
          include: {
            type: true,
          },
        },
      },
    });
  }

  /**
   * Create a new transaction.
   * @param data - The data for creating the transaction.
   * @returns The created transaction.
   */
  async create(data: Prisma.TransactionCreateInput): Promise<Transaction> {
    return this.prisma.transaction.create({
      data,
    });
  }

  /**
   * Update a transaction by its unique identifier.
   * @param params - The unique identifier of the transaction and the data to update.
   * @returns The updated transaction.
   */
  async update(params: {
    where: Prisma.TransactionWhereUniqueInput;
    data: Prisma.TransactionUpdateInput;
  }): Promise<Transaction> {
    const { where, data } = params;
    return this.prisma.transaction.update({
      data,
      where,
    });
  }

  /**
   * Delete a transaction by its unique identifier.
   * @param where - The unique identifier of the transaction to delete.
   * @returns The deleted transaction.
   */
  async delete(
    where: Prisma.TransactionWhereUniqueInput,
  ): Promise<Transaction> {
    return this.prisma.transaction.delete({
      where,
    });
  }
}
