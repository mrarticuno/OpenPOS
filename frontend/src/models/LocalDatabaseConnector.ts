import { api } from 'boot/axios';

class LocalDatabaseConnector {
  constructor(public Model: string) {
    this.Model = Model.toLocaleLowerCase();
  }

  async get(id: string): Promise<unknown> {
    return await api.get(`v1/${this.Model}/${id}`);
  }

  async getAll(): Promise<unknown> {
    return await api.get(`v1/${this.Model}`);
  }

  async create(data: object): Promise<unknown> {
    return await api.post(`v1/${this.Model}`, data);
  }

  async update(id: string, data: object): Promise<unknown> {
    return await api.patch(`v1/${this.Model}/${id}`, data);
  }

  async delete(id: string): Promise<unknown> {
    return await api.delete(`v1/${this.Model}/${id}`);
  }
}

export { LocalDatabaseConnector };
