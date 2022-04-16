import {
  Connection,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { Product } from './product.entity';
import { BigQuery } from '@google-cloud/bigquery';

@EventSubscriber()
export class ProductSubscriber implements EntitySubscriberInterface<Product> {
  constructor(connection: Connection) {
    connection.subscribers.push(this);
  }
  listenTo() {
    return Product;
  }

  afterInsert(event: InsertEvent<Product>) {
    // 로그를 만들어서, BigQuert에 저장하기
    const bigQuery = new BigQuery({
      keyFilename: 'gcp-bgiquery.json',
      projectId: 'holy-moly-341008',
    });
    bigQuery
      .dataset('myproduct')
      .table('productlog')
      .insert([
        {
          id: event.entity.id,
          name: event.entity.name,
          descroption: event.entity.description,
          price: event.entity.price,
          isSoldout: event.entity.isSoldout,
        },
      ]);
  }
}
