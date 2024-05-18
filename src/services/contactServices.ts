import axios from 'axios';

const host = axios.create({
  baseURL: 'https://contact.herokuapp.com/',
});

const api = {
  getData: () => host.get('contact'),
  getDetail: (id: string) => host.get(`contact/${id}`),
  update: (id: string, payload: any) => host.put(`contact/${id}`, payload),
  delete: (id: string) => host.delete(`contact/${id}`),

  create: (payload: any) => host.post('contact', payload),
};

export default api;
