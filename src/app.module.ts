import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
//import { join } from 'path';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { ApolloDriver } from '@nestjs/apollo';

@Module({
  imports: [
    RestaurantsModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
