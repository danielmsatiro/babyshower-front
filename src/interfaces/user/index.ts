export interface IUser {
  id?: number;
  cpf: string;
  username: string;
  email: string;
  password: string;
  name: string;
  phone: string;
  product: string; //Alterar na api para "products"
  image?: string; //Incluir campo na api
  city?: string; //Incluir informação no response da api.
  state?: string; //Incluir informação no response da api.
}
