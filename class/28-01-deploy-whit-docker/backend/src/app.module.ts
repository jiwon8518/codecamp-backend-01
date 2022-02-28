import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { BoardModule } from './apis/board/board.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductCategoryModule } from './apis/productCategory/productCategory.module';
import { ProductModule } from './apis/product/product.module';
import { UserModule } from './apis/user/user.module';
import { AuthModule } from './apis/auth/auth.module';
import { PointTransactionModule } from './apis/pointTransaction/pointTransaction.module';
import { FileModule } from './apis/file/file.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

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
      playground: false, // 플레이그라운드 비공개하겠다 개발환경일때는 ture로
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mydatabase.holymoly90.shop', // 비공개IP
      // host: '10.107.32.4', // 비공개IP
      // host: 'mydatabase',
      // host: 'my_database',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'myproject',
      entities: [__dirname + '/apis/**/*.entity.*'],
      synchronize: true,
      logging: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
