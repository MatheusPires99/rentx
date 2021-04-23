/* eslint-disable no-shadow */
import { SvgProps } from '../assets/icons';

export type IconType = React.FC<SvgProps>;

export enum OnboardingStep {
  Date = 1,
  Car = 2,
  Wellcome = 3,
}

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

export type Car = {
  id: number;
  name: string;
  brand: string;
  valuePerDay: number;
  fuel: 'gasoline' | 'eletric' | ' hybrid';
  image: string;
};
