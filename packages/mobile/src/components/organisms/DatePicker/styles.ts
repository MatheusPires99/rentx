import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${() => css`
    flex: 1;
  `}
`;

export const Header = styled.View`
  ${({ theme }) => css`
    padding: 24px;
    background: ${theme.colors.black};
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.archivo.semiBold};
    font-size: 30px;
    color: ${theme.colors.white};
    line-height: 34px;
    max-width: 212px;
  `}
`;

export const CalenderContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingTop: 16,
  },
})`
  ${() => css`
    flex: 1;
  `}
`;
