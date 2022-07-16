import { ModelDatabaseConnector as MDC } from './ModelDatabaseConnector';
import { LocalDatabaseConnector as LDC } from './LocalDatabaseConnector';

const ModelName = 'Product';

const Connector = true ? MDC : LDC;

export class Product extends Connector {
  id: number;
  name: string;
  description: string;
  price: number;
  code: string;
  ean: string[];
  price_on_weight: boolean;
  image: string;
  favorite: boolean;
  priority: number;
  tax_data: any;
  active: boolean;
  created_at: string;
  updated_at: string;
  company_id: string;
  constructor(data: any) {
    super(ModelName);
    this.id = data.id || 0;
    this.name = data.name || '';
    this.description = data.description || '';
    this.code = data.code || '';
    this.ean = data.ean || [];
    this.price = data.price || 0;
    this.price_on_weight = data.price_on_weight || false;
    this.image = data.image || '';
    this.favorite = data.favorite || false;
    this.priority = data.priority || 0;
    this.tax_data = data.tax_data || {};
    this.active = data.active || true;
    this.created_at = data.created_at || new Date().getTime();
    this.updated_at = data.updated_at || new Date().getTime();
    this.company_id = data.company_id || '';
  }
}
