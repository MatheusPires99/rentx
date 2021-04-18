import React, { useState } from 'react';
import { TextInputProps } from 'react-native';

import { useForm, Controller } from 'react-hook-form';
import { useTheme } from 'styled-components';

import { Eye, EyeClose } from '../../../assets/icons';
import { IconType } from '../../../types';
import * as S from './styles';

type InputProps = TextInputProps & {
  name: string;
  isSecureField?: boolean;
  icon: IconType;
};

export const Input = ({
  name,
  icon: Icon,
  isSecureField = false,
  ...rest
}: InputProps) => {
  const { control } = useForm();
  const theme = useTheme();

  const [showPassword, setShowPassword] = useState(isSecureField);

  const handleToggleSecure = () => setShowPassword(state => !state);

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
            onChangeText={textValue => onChange(textValue)}
            onBlur={onBlur}
            placeholderTextColor={theme.colors.gray['300']}
            secureTextEntry={showPassword}
            {...rest}
          />

          {isSecureField && (
            <S.EyeButton onPress={handleToggleSecure}>
              {showPassword ? <EyeClose /> : <Eye />}
            </S.EyeButton>
          )}
        </S.Container>
      )}
    />
  );
};
