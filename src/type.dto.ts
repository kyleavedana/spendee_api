import { ApiProperty } from '@nestjs/swagger';

export class CreateTypeDTO {
  @ApiProperty()
  name: string;
}

export class UpdateTypeDTO {
  @ApiProperty()
  name: string;
}
