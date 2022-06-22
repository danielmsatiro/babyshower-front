export interface IUser {
  id?: number;
  cpf: string;
  username: string;
  email: string;
  password: string;
  name: string;
  phone: string;
  products: string;
  image: string | null;
  image_key: string | null; 
  city: string;
  state: string;
}
