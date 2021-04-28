/* eslint-disable import/no-duplicates */
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const formatDate = (date: Date, formatter?: string) =>
  format(date, formatter || 'dd MMMM yyyy', { locale: ptBR });

export default formatDate;
