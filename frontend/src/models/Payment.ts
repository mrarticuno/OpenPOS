import { ModelDatabaseConnector as MDC } from './ModelDatabaseConnector';
import { LocalDatabaseConnector as LDC } from './LocalDatabaseConnector';

const ModelName = 'Payment';

const Connector = true ? MDC : LDC;

export class Payment extends Connector {
  id: string;
  amount: number;
  payment_date: number;
  payment_method: string;
  canceled: boolean;
  active: boolean;
  constructor(data: any) {
    super(ModelName);
    this.id = data.id || 0;
    this.amount = data.amount || 0;
    this.payment_date = data.payment_date || new Date().getTime();
    this.payment_method = data.payment_method || '';
    this.active = data.active || true;
    this.canceled = data.canceled || false;
  }
}
