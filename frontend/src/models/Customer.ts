import { ModelDatabaseConnector as MDC } from './ModelDatabaseConnector';
import { LocalDatabaseConnector as LDC } from './LocalDatabaseConnector';

const ModelName = 'Customer';

const Connector = true ? MDC : LDC;

export class Customer extends Connector {
  id: number;
  name: string;
  company_name: string;
  document_number: string;
  email: string;
  phone: string;
  address_id: number;
  company_id: string;
  active: boolean;
  constructor(data: any) {
    super(ModelName);
    this.id = data.id || 0;
    this.name = data.name || '';
    this.company_name = data.company_name || '';
    this.document_number = data.document_number || '';
    this.email = data.email || '';
    this.phone = data.phone || '';
    this.active = data.active || true;
    this.address_id = data.address_id || 0;
    this.company_id = data.company_id || '';
  }
}
