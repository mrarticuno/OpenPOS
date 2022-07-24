import { api } from 'boot/axios';

import { AxiosResponse } from 'axios';

class ModelDatabaseConnector {
  constructor(public Model: string) {
    this.Model = Model.toLocaleLowerCase();
  }

  async get(id: string): Promise<AxiosResponse> {
    return await api.get(`v1/${this.Model}/${id}`);
  }

  async getAll(): Promise<AxiosResponse> {
    return await api.get(`v1/${this.Model}`);
  }

  async create(data: object): Promise<AxiosResponse> {
    return await api.post(`v1/${this.Model}`, data);
  }

  async createOrUpdate(data: object, id: string): Promise<AxiosResponse> {
    return id && id.length > 0
      ? await this.update(id, data)
      : await this.create(data);
  }

  async update(id: string, data: object): Promise<AxiosResponse> {
    return await api.patch(`v1/${this.Model}/${id}`, data);
  }

  async delete(id: string): Promise<AxiosResponse> {
    return await api.delete(`v1/${this.Model}/${id}`);
  }
}

export { ModelDatabaseConnector };
