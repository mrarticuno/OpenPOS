import { ModelDatabaseConnector as MDC } from './ModelDatabaseConnector';

const ModelName = 'Product';

export class Product extends MDC {
  id: number;
  name: string;
  description: string;
  price: number;
  created_at: string;
  updated_at: string;
  constructor(
    id: number,
    name: string,
    description: string,
    price: number,
    created_at: string,
    updated_at: string
  ) {
    super(ModelName);
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
