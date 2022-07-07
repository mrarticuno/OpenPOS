import { ModelDatabaseConnector as MDC } from './ModelDatabaseConnector';

const ModelName = 'User';

export class User extends MDC {
  id: number;
  name: string;
  email: string;
  password: string;
  created_at: string;
  updated_at: string;
  constructor(data: any) {
    super(ModelName);
    this.id = data.id || 0;
    this.name = data.name || '';
    this.email = data.email || '';
    this.password = data.password || '';
    this.created_at = data.created_at || '';
    this.updated_at = data.updated_at || '';
  }
}
