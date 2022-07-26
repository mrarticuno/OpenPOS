import { Address } from './Address';
import { ModelDatabaseConnector as MDC } from './ModelDatabaseConnector';
import { LocalDatabaseConnector as LDC } from './LocalDatabaseConnector';

const ModelName = 'Customer';

const Connector = true ? MDC : LDC;

export class Customer extends Connector {
  id: string;
  name: string;
  company_name: string;
  document: string;
  email: string;
  phone: string;
  address: Address;
  company_id: string;
  active: boolean;
  constructor(data: any) {
    super(ModelName);
    this.id = data.id || '';
    this.name = data.name || '';
    this.company_name = data.company_name || '';
    this.document = data.document || '';
    this.email = data.email || '';
    this.phone = data.phone || '';
    this.active = data.active || true;
    this.address = data.address || new Address({});
    this.company_id = data.company_id || '';
  }
}
