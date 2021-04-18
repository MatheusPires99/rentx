import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';

import * as S from './styles';

type CheckboxProps = {
  isChecked: boolean;
  onChange: () => void;
  label: string;
};

export const Checkbox = ({ isChecked, onChange, label }: CheckboxProps) => {
  return (
    <TouchableWithoutFeedback onPress={onChange}>
      <S.Container>
        <S.Box isChecked={isChecked}>{isChecked && <S.CheckedBox />}</S.Box>

        <S.Label>{label}</S.Label>
      </S.Container>
    </TouchableWithoutFeedback>
  );
};
