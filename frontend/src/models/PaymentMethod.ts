import { ModelDatabaseConnector as MDC } from './ModelDatabaseConnector';
import { LocalDatabaseConnector as LDC } from './LocalDatabaseConnector';

const ModelName = 'Paymentmethod';

const Connector = true ? MDC : LDC;

export class Paymentmethod extends Connector {
  id: string;
  name: string;
  update_cashier_value: boolean;
  active: boolean;
  constructor(data: any) {
    super(ModelName);
    this.id = data.id || '';
    this.name = data.name || '';
    this.update_cashier_value = data.update_cashier_value || false;
    this.active = data.active || true;
  }
}
