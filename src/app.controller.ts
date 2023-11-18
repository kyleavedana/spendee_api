import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { TypeService } from './type.service';
import { CreateTypeDTO, UpdateTypeDTO } from './type.dto';
import { CategoryService } from './category.service';
import { CreateCategoryDTO, UpdateCategoryDTO } from './category.dto';
import { TransactionService } from './transaction.service';
import { CreateTransactionDTO, UpdateTransactionDTO } from './transaction.dto';
import { ApiBody, ApiParam, ApiTags } from '@nestjs/swagger';

/**
 * Controller for handling API endpoints related to types, categories, and transactions.
 */
@Controller()
export class AppController {
  constructor(
    private readonly typeService: TypeService,
    private readonly categoryService: CategoryService,
    private readonly transactionService: TransactionService,
  ) {}

  /**
   * Get all types.
   * @param params - Query parameters for filtering, pagination, and sorting.
   * @returns A list of types.
   */
  @Get('/types')
  @ApiTags('Types')
  @ApiParam({ name: 'skip', required: false })
  @ApiParam({ name: 'take', required: false })
  @ApiParam({ name: 'cursor', required: false })
  @ApiParam({ name: 'where', required: false })
  @ApiParam({ name: 'orderBy', required: false })
  async getTypes(params: {
    skip?: number;
    take?: number;
    cursor?: { id: number };
    where?: { name: string };
    orderBy?: { name: 'asc' | 'desc' };
  }) {
    return await this.typeService.findAll(params);
  }

  /**
   * Get a type by ID.
   * @param id - The ID of the type.
   * @returns The type with the specified ID.
   */
  @Get('/types/:id')
  @ApiTags('Types')
  async getType(@Param('id') id: string) {
    return await this.typeService.find({ id: Number(id) });
  }

  /**
   * Create a new type.
   * @param data - The data for creating the type.
   * @returns The created type.
   */
  @Post('/types')
  @ApiTags('Types')
  @ApiBody({ type: CreateTypeDTO })
  async createType(@Body() data: CreateTypeDTO) {
    return await this.typeService.create(data);
  }

  /**
   * Update a type by ID.
   * @param id - The ID of the type to update.
   * @param data - The updated data for the type.
   * @returns The updated type.
   */
  @Put('/types/:id')
  @ApiTags('Types')
  @ApiBody({ type: UpdateTypeDTO })
  async updateType(@Param('id') id: string, @Body() data: UpdateTypeDTO) {
    return await this.typeService.update({
      where: {
        id: Number(id),
      },
      data,
    });
  }

  /**
   * Delete a type by ID.
   * @param id - The ID of the type to delete.
   * @returns The deleted type.
   */
  @Delete('/types/:id')
  @ApiTags('Types')
  async deleteType(@Param('id') id: string) {
    return await this.typeService.delete({ id: Number(id) });
  }

  /**
   * Get all categories.
   * @param params - Query parameters for filtering, pagination, and sorting.
   * @returns A list of categories.
   */
  @Get('/categories')
  @ApiTags('Categories')
  @ApiParam({ name: 'skip', required: false })
  @ApiParam({ name: 'take', required: false })
  @ApiParam({ name: 'cursor', required: false })
  @ApiParam({ name: 'where', required: false })
  @ApiParam({ name: 'orderBy', required: false })
  async getCategories(params: {
    skip?: number;
    take?: number;
    cursor?: { id: number };
    where?: { name: string };
    orderBy?: { name: 'asc' | 'desc' };
  }) {
    return await this.categoryService.findAll(params);
  }

  /**
   * Get a category by ID.
   * @param id - The ID of the category.
   * @returns The category with the specified ID.
   */
  @Get('/categories/:id')
  @ApiTags('Categories')
  async getCategory(@Param('id') id: string) {
    return await this.categoryService.find({ id: Number(id) });
  }

  /**
   * Create a new category.
   * @param data - The data for creating the category.
   * @returns The created category.
   */
  @Post('/categories')
  @ApiTags('Categories')
  @ApiBody({ type: CreateCategoryDTO })
  async createCategory(@Body() data: CreateCategoryDTO) {
    return await this.categoryService.create(data);
  }

  /**
   * Update a category by ID.
   * @param id - The ID of the category to update.
   * @param data - The updated data for the category.
   * @returns The updated category.
   */
  @Put('/categories/:id')
  @ApiTags('Categories')
  @ApiBody({ type: UpdateCategoryDTO })
  async updateCategory(
    @Param('id') id: string,
    @Body() data: UpdateCategoryDTO,
  ) {
    return await this.categoryService.update({
      where: {
        id: Number(id),
      },
      data,
    });
  }

  /**
   * Delete a category by ID.
   * @param id - The ID of the category to delete.
   * @returns The deleted category.
   */
  @Delete('/categories/:id')
  @ApiTags('Categories')
  async deleteCategory(@Param('id') id: string) {
    return await this.categoryService.delete({ id: Number(id) });
  }

  /**
   * Get all transactions.
   * @param params - Query parameters for filtering, pagination, and sorting.
   * @returns A list of transactions.
   */
  @Get('/transactions')
  @ApiTags('Transactions')
  @ApiParam({ name: 'skip', required: false })
  @ApiParam({ name: 'take', required: false })
  @ApiParam({ name: 'cursor', required: false })
  @ApiParam({ name: 'where', required: false })
  @ApiParam({ name: 'orderBy', required: false })
  async getTransactions(params: {
    skip?: number;
    take?: number;
    cursor?: { id: number };
    where?: { description: string };
    orderBy?: { name: 'asc' | 'desc' };
  }) {
    return await this.transactionService.findAll(params);
  }

  /**
   * Get a transaction by ID.
   * @param id - The ID of the transaction.
   * @returns The transaction with the specified ID.
   */
  @Get('/transactions/:id')
  @ApiTags('Transactions')
  async getTransaction(@Param('id') id: string) {
    return await this.transactionService.find({ id: Number(id) });
  }

  /**
   * Create a new transaction.
   * @param data - The data for creating the transaction.
   * @returns The created transaction.
   */
  @Post('/transactions')
  @ApiTags('Transactions')
  @ApiBody({ type: CreateTransactionDTO })
  async createTransaction(
    @Body()
    data: CreateTransactionDTO,
  ) {
    return await this.transactionService.create(data);
  }

  /**
   * Update a transaction by ID.
   * @param id - The ID of the transaction to update.
   * @param data - The updated data for the transaction.
   * @returns The updated transaction.
   */
  @Put('/transactions/:id')
  @ApiTags('Transactions')
  @ApiBody({ type: UpdateTransactionDTO })
  async updateTransaction(
    @Param('id') id: string,
    @Body()
    data: UpdateTransactionDTO,
  ) {
    return await this.transactionService.update({
      where: {
        id: Number(id),
      },
      data,
    });
  }

  /**
   * Delete a transaction by ID.
   * @param id - The ID of the transaction to delete.
   * @returns The deleted transaction.
   */
  @Delete('/transactions/:id')
  @ApiTags('Transactions')
  async deleteTransaction(@Param('id') id: string) {
    return await this.transactionService.delete({ id: Number(id) });
  }
}
