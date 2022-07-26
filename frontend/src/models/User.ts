import { Address } from './Address';
import { ModelDatabaseConnector as MDC } from './ModelDatabaseConnector';
import { LocalDatabaseConnector as LDC } from './LocalDatabaseConnector';

const ModelName = 'User';

const Connector = true ? MDC : LDC;

export class User extends Connector {
  id: string;
  name: string;
  email: string;
  password: string;
  document: string;
  phone: string;
  active: boolean;
  company_id: string;
  address: Address;
  role: string;
  confirmation_code: string;
  created_at: string;
  updated_at: string;
  constructor(data: any) {
    super(ModelName);
    this.id = data.id || '';
    this.name = data.name || '';
    this.email = data.email || '';
    this.role = data.role || '';
    this.password = data.password || '';
    this.document = data.document || '';
    this.phone = data.phone || '';
    this.active = data.active || false;
    this.company_id = data.company_id || '';
    this.address = data.address || new Address({});
    this.confirmation_code = data.confirmation_code || '';
    this.password = data.password || '';
    this.created_at = data.created_at || '';
    this.updated_at = data.updated_at || '';
  }
}
