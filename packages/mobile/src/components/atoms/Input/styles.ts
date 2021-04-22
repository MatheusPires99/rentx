import styled, { css } from 'styled-components/native';

type ContentProps = {
  isFocused: boolean;
};

type TextField = {
  isSecureField?: boolean;
};

export const Container = styled.View`
  ${() => css``}
`;

export const Content = styled.View<ContentProps>`
  ${({ theme, isFocused }) => css`
    height: 56px;
    position: relative;
    border-bottom-width: 2px;
    border-style: solid;
    border-color: ${isFocused ? theme.colors.primary : 'transparent'};

    flex-direction: row;
    align-items: center;
  `}
`;

export const IconBox = styled.View`
  ${({ theme }) => css`
    height: 100%;
    width: 56px;
    background: ${theme.colors.white};
    margin-right: 2px;

    align-items: center;
    justify-content: center;
  `}
`;

export const TextField = styled.TextInput<TextField>`
  ${({ theme, isSecureField }) => css`
    height: 100%;
    background: ${theme.colors.white};
    padding: 18px ${isSecureField ? 48 : 24}px 18px 24px;
    font-family: ${theme.fonts.inter.regular};
    font-size: 15px;
    color: ${theme.colors.gray['600']};

    flex: 1;
  `}
`;

export const EyeButton = styled.TouchableOpacity`
  ${() => css`
    position: absolute;
    right: 16px;
    width: 24px;
    height: 24px;

    align-items: center;
    justify-content: center;
  `}
`;

export const ErrorMessage = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.inter.regular};
    font-size: 13px;
    color: ${theme.colors.primary};
    margin-top: 8px;
  `}
`;
