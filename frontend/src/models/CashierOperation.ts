import { ModelDatabaseConnector as MDC } from './ModelDatabaseConnector';
import { LocalDatabaseConnector as LDC } from './LocalDatabaseConnector';

const ModelName = 'CashierOperation';

const Connector = true ? MDC : LDC;

export class CashierOperation extends Connector {
  id: string;
  operation_date: Date;
  description: string;
  amount: number;
  type: string;
  user_id: string;
  cashier_id: string;
  active: boolean;
  constructor(data: any) {
    super(ModelName);
    this.id = data.id || 0;
    this.operation_date = data.operation_date || new Date().getTime();
    this.description = data.description || '';
    this.amount = data.amount || 0;
    this.type = data.type || '';
    this.user_id = data.user_id || 0;
    this.cashier_id = data.cashier_id || 0;
    this.active = data.active || true;
  }
}
