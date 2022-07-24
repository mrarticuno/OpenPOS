import { ModelDatabaseConnector as MDC } from './ModelDatabaseConnector';
import { LocalDatabaseConnector as LDC } from './LocalDatabaseConnector';

const ModelName = 'Company';

const Connector = true ? MDC : LDC;

export class Company extends Connector {
  id: string;
  name: string;
  corporate_name: string;
  registration_number: string;
  main: boolean;
  provider: boolean;
  active: boolean;
  address_id: string;
  constructor(data: any) {
    super(ModelName);
    this.id = data.id || '';
    this.name = data.name || '';
    this.corporate_name = data.corporate_name || '';
    this.registration_number = data.registration_number || '';
    this.main = data.main || false;
    this.provider = data.provider || false;
    this.active = data.active || true;
    this.address_id = data.address_id || '';
  }
}
