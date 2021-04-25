/* eslint-disable no-shadow */
import { SvgProps } from '../assets/icons';

export type IconType = React.FC<SvgProps>;

export type LoginResponse = {
  accessToken: string;
};

export type UserResponse = {
  id: number;
  name: string;
  email: string;
  cnh: string;
};

export type SignInCredencials = {
  email: string;
  password: string;
};

export enum SignUpStep {
  Data = 1,
  Password = 2,
}

export type SignUpCredencials = {
  name: string;
  email: string;
  cnh: string;
  password: string;
  password_confirmation: string;
};

export enum BookStep {
  Car = 1,
  Date = 2,
  Confirm = 3,
}

export type Car = {
  id: number;
  name: string;
  brand: string;
  valuePerDay: number;
  image: string;
  maxSpeed: number;
  timeForMaxSpeed: number;
  power: number;
  fuel: 'gasoline' | 'eletric' | 'hybrid';
  gearshift: 'auto' | 'manual';
  maxPeople: number;
  description: string;
};
