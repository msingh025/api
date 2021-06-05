import { Model } from "sequelize-typescript";
export interface UserI {
    id?: number | null;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
}
export default class User extends Model implements UserI {
    id?: number;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
}
