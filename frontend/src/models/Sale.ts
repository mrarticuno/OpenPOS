import { ModelDatabaseConnector as MDC } from './ModelDatabaseConnector';
import { LocalDatabaseConnector as LDC } from './LocalDatabaseConnector';

const ModelName = 'Sale';

const Connector = true ? MDC : LDC;

export class Sale extends Connector {
  id: string;
  description: string;
  open_date: Date;
  close_date: Date;
  closed: boolean;
  canceled: boolean;
  itens: any[];
  payments: any[];
  total_amount: number;
  amount_paid: string;
  discount: number;
  cashier_id: string;
  user_id: string;
  customer_id: string;
  active: boolean;
  constructor(data: any) {
    super(ModelName);
    this.id = data.id || 0;
    this.description = data.description || '';
    this.open_date = data.open_date || new Date().getTime();
    this.close_date = data.close_date || '';
    this.closed = data.closed || false;
    this.canceled = data.canceled || false;
    this.itens = data.itens || [];
    this.payments = data.payments || [];
    this.total_amount = data.total_amount || 0;
    this.amount_paid = data.amount_paid || 0;
    this.discount = data.discount || 0;
    this.cashier_id = data.cashier_id || 0;
    this.user_id = data.user_id || 0;
    this.customer_id = data.customer_id || 0;
    this.active = data.active || true;
  }
}
