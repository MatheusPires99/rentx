import styled, { css } from 'styled-components/native';

export const Box = styled.View`
  ${() => css`
    margin-top: 32px;

    flex-direction: row;
    justify-content: space-between;
  `}
`;

export const ForgotPasswordButton = styled.TouchableOpacity``;

export const ForgotPasswordButtonText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.inter.regular};
    font-size: 13px;
    color: ${theme.colors.gray['400']};
  `}
`;
