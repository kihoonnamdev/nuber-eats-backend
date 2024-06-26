import {
  Field,
  InputType,
  Int,
  ObjectType,
  PartialType,
  PickType,
} from '@nestjs/graphql';
import { CoreOutput } from 'src/common/dtos/output.dto';
import { Dish } from '../entities/dish.entity';

@InputType()
export class EditDishInput extends PartialType(
  PickType(Dish, ['name', 'options', 'price', 'description'] as const),
) {
  @Field((type) => Int)
  dishId: number;
}

@ObjectType()
export class EditDishOutput extends CoreOutput {}
