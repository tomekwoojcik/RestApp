export interface ResponseModel {
  accessToken: string;
  user: UserModel;
}

export interface UserModel {
  address: object;
  age: number;
  bank: object;
  birthDate: string;
  company: object;
  domain: string;
  ein: string;
  email: string;
  eyeColor: string;
  firstName: string;
  gender: string;
  hair: object;
  height: number;
  id: number;
  image: string;
  ip: string;
  lastName: string;
  macAddress: string;
  maidenName: string;
  phone: string;
  ssn: string;
  university: string;
  userAgent: string;
  username: string;
  weight: number;
}
