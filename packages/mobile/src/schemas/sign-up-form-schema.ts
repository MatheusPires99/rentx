import * as yup from 'yup';

export default yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  cnh: yup.string().required('CNH obrigatória'),
  password: yup
    .string()
    .required('Senha obrigatória')
    .min(6, 'Senha deve conter pelo menos 6 caracteres'),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais')
    .required('Confirmação de senha obrigatória'),
});
