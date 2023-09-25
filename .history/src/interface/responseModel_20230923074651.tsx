export interface ResponseModelData {
  accessToken: string;
  data:ResponseModel
}
export interface ResponseModel {
  accessToken: string;
  user: UserModel;
}

export interface UserModel {
  id: number;
  user: {
    address: object;
    age: number;
    bank: object;
    birthDate: string;
    company: {
      address: {
        
      }
      department: string,
      name: string,
      role: [];
      
    };
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
}
