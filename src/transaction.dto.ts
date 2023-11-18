import { ApiProperty } from '@nestjs/swagger';

export class CreateTransactionDTO {
  @ApiProperty()
  amount: number;

  @ApiProperty()
  date: Date;

  @ApiProperty()
  description: string;

  @ApiProperty()
  categoryId: number;
}

export class UpdateTransactionDTO {
  @ApiProperty()
  amount?: number;

  @ApiProperty()
  date?: Date;

  @ApiProperty()
  description?: string;

  @ApiProperty()
  categoryId?: number;
}
