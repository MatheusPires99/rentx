import React, { useState, useCallback } from 'react';
import { TextInputProps } from 'react-native';

import { Controller, FieldError, useFormContext } from 'react-hook-form';
import { useTheme } from 'styled-components';

import { Eye, EyeClose } from '../../../assets/icons';
import { IconType } from '../../../types';
import * as S from './styles';

type InputProps = TextInputProps & {
  name: string;
  isSecureField?: boolean;
  icon: IconType;
  error?: FieldError;
  marginTop?: number;
};

export const Input = ({
  name,
  icon: Icon,
  isSecureField = false,
  error,
  marginTop = 0,
  ...rest
}: InputProps) => {
  const { control, getValues } = useFormContext();
  const theme = useTheme();

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [showPassword, setShowPassword] = useState(isSecureField);

  const handleToggleSecure = () => setShowPassword(state => !state);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!getValues(name));
  }, [getValues, name]);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <S.Container style={{ marginTop }}>
          <S.Content isFocused={isFocused}>
            <S.IconBox>
              <Icon
                color={
                  isFocused || isFilled
                    ? theme.colors.primary
                    : theme.colors.gray['400']
                }
                size={24}
              />
            </S.IconBox>

            <S.TextField
              value={value}
              onChangeText={textValue => onChange(textValue)}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              placeholderTextColor={theme.colors.gray['300']}
              secureTextEntry={showPassword}
              isSecureField={isSecureField}
              {...rest}
            />

            {isSecureField && (
              <S.EyeButton onPress={handleToggleSecure}>
                {showPassword ? <EyeClose /> : <Eye />}
              </S.EyeButton>
            )}
          </S.Content>

          {!!error && <S.ErrorMessage>{error.message}</S.ErrorMessage>}
        </S.Container>
      )}
    />
  );
};
