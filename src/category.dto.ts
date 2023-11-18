import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDTO {
  @ApiProperty()
  name: string;

  @ApiProperty()
  typeId: number;
}

export class UpdateCategoryDTO {
  @ApiProperty()
  name?: string;

  @ApiProperty()
  typeId?: number;
}
