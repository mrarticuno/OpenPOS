import { ModelDatabaseConnector as MDC } from './ModelDatabaseConnector';
import { LocalDatabaseConnector as LDC } from './LocalDatabaseConnector';

const ModelName = 'Cashier';

const Connector = true ? MDC : LDC;

export class Cashier extends Connector {
  id: number;
  open_date: Date;
  close_date: Date;
  closed: boolean;
  opening_value: number;
  closing_value: number;
  user_id: string;
  company_id: string;
  active: boolean;
  constructor(data: any) {
    super(ModelName);
    this.id = data.id || 0;
    this.open_date = data.open_date || new Date().getTime();
    this.close_date = data.close_date || '';
    this.closed = data.closed || false;
    this.opening_value = data.opening_value || 0;
    this.closing_value = data.closing_value || 0;
    this.user_id = data.user_id || '';
    this.active = data.active || true;
    this.company_id = data.company_id || '';
  }
}
