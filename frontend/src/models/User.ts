import { ModelDatabaseConnector as MDC } from './ModelDatabaseConnector';
import { LocalDatabaseConnector as LDC } from './LocalDatabaseConnector';

const ModelName = 'User';

const Connector = true ? MDC : LDC;

export class User extends Connector {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
  confirmation_code: string;
  created_at: string;
  updated_at: string;
  constructor(data: any) {
    super(ModelName);
    this.id = data.id || 0;
    this.name = data.name || '';
    this.email = data.email || '';
    this.role = data.role || '';
    this.confirmation_code = data.confirmation_code || '';
    this.password = data.password || '';
    this.created_at = data.created_at || '';
    this.updated_at = data.updated_at || '';
  }
}
