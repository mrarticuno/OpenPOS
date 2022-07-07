import { ModelDatabaseConnector as MDC } from './ModelDatabaseConnector';
import { Product } from './Product';
import { User } from './User';

const ModelName = 'Order';

export class Order extends MDC {
  id: number;
  user_id: number;
  total: number;
  status: string;
  created_at: string;
  updated_at: string;
  user: User;
  products: Product[];
  constructor(
    id: number,
    user_id: number,
    total: number,
    status: string,
    created_at: string,
    updated_at: string,
    user: User,
    products: Product[]
  ) {
    super(ModelName);
    this.id = id;
    this.user_id = user_id;
    this.total = total;
    this.status = status;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.user = user;
    this.products = products;
  }
}
