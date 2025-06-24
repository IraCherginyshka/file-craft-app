import api from '../lib/axios';

export type User = {
  id: number;
  name: string;
  surname: string;
};

export const fetchFirstUser = async () => {
  const response = await api.get<User>('/users/first-user');
  return response.data;
};
