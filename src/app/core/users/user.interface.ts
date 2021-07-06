export interface User {
  _id?: string;
  dni: string;
  name: string;
  lastName: string;
  phone?: string;
  email: string;
  role: any;
  photo?: string;
  status: any;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface userAuth extends User {
  token?: string;
  password?: string;
}
