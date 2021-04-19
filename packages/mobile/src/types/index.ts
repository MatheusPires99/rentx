import { SvgProps } from '../assets/icons';

export type IconType = React.FC<SvgProps>;

export type SignInCredencials = {
  email: string;
  password: string;
};

export type SignUpCredencials = {
  name: string;
  email: string;
  cnh: string;
  password: string;
  password_confirmation: string;
};
