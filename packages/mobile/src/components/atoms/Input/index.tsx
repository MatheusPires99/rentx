import React, { useState } from 'react';
import { TextInputProps } from 'react-native';

import { useForm, Controller } from 'react-hook-form';
import { useTheme } from 'styled-components';

import * as S from './styles';
import { Eye, EyeClose } from '../../../assets/icons';

type InputProps = TextInputProps & {
  name: string;
  isSecureField?: boolean;
  icon: any;
};

export const Input = ({
  name,
  icon: Icon,
  isSecureField = false,
  ...rest
}: InputProps) => {
  const { control } = useForm();
  const theme = useTheme();

  const [secure, setSecure] = useState(isSecureField);

  const handleToggleSecure = () => setSecure(state => !state);

  return (
    <Controller
      control={control}
      name={name}
      rules={{ required: true }}
      render={({ field: { onChange, onBlur, value } }) => (
        <S.Container>
          <S.IconBox>
            <Icon />
          </S.IconBox>

          <S.TextField
            value={value}
            onChangeText={value => onChange(value)}
            onBlur={onBlur}
            placeholderTextColor={theme.colors.gray['300']}
            secureTextEntry={secure}
            {...rest}
          />

          {isSecureField && (
            <S.EyeButton onPress={handleToggleSecure}>
              {secure ? <EyeClose /> : <Eye />}
            </S.EyeButton>
          )}
        </S.Container>
      )}
    />
  );
};
