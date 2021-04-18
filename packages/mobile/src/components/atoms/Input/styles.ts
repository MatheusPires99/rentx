import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${() => css`
    height: 56px;
    position: relative;

    flex-direction: row;
    align-items: center;
  `}
`;

export const IconBox = styled.View`
  ${({ theme }) => css`
    height: 100%;
    width: 56px;
    background: ${theme.colors.inputBackground};
    margin-right: 2px;

    align-items: center;
    justify-content: center;
  `}
`;

export const TextField = styled.TextInput`
  ${({ theme }) => css`
    height: 100%;
    background: ${theme.colors.inputBackground};
    padding: 20px 24px;
    font-family: ${theme.fonts.inter.regular};
    font-size: 15px;
    color: ${theme.colors.gray['400']};

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
