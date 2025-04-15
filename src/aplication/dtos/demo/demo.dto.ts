import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class DemoDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'el campo name no puede estar vacio' })
  name: string;
}
