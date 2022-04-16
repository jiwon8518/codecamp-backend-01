import { Module, CacheModule } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { BoardModule } from './apis/board/board.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductCategoryModule } from './apis/productCategory/productCategory.module';
import { ProductModule } from './apis/product/product.module';
import { UserModule } from './apis/user/user.module';
import { AuthModule } from './apis/auth/auth.module';
import { PointTransactionModule } from './apis/pointTransaction/pointTransaction.module';
import { FileModule } from './apis/file/file.module';
// import { ProductTag } from './apis/productTag/entities/productTag.entity';
import { ProductTag } from '../src/apis/ProductTag/entities/productTag.entity';

import type { RedisClientOptions } from 'redis';
import * as redisStore from 'cache-manager-redis-store';

@Module({
  imports: [
    AuthModule,
    BoardModule, //
    FileModule,
    PointTransactionModule,
    ProductModule,
    ProductCategoryModule,
    UserModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'src/common/graphql/schema.gql',
      context: ({ req, res }) => ({ req, res }),
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      // host: 'localhost',
      host: 'my_database',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'myproject',
      entities: [__dirname + '/apis/**/*.entity.*'],
      synchronize: true,
      logging: true,
    }),
    CacheModule.register<RedisClientOptions>({
      store: redisStore,
      url: 'redis://my_redis:6379',
      isGlobal: true,
    }),
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
