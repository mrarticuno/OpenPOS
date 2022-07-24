import { ModelDatabaseConnector as MDC } from './ModelDatabaseConnector';
import { LocalDatabaseConnector as LDC } from './LocalDatabaseConnector';
import { Product } from './Product';
import { User } from './User';

const ModelName = 'Order';

const Connector = true ? MDC : LDC;

export class Order extends Connector {
  id: string;
  user_id: string;
  total: number;
  status: string;
  created_at: string;
  updated_at: string;
  user: User;
  products: Product[];
  company_id: string;
  constructor(data: any) {
    super(ModelName);
    this.id = data.id || '';
    this.user_id = data.user_id || 0;
    this.total = data.total || 0;
    this.status = data.status || '';
    this.created_at = data.created_at || '';
    this.updated_at = data.updated_at || '';
    this.user = new User(data.user);
    this.products = data.products || [];
    this.company_id = data.company_id || '';
  }
}
