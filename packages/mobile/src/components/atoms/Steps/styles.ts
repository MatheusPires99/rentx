import styled, { css } from 'styled-components/native';

type StepProps = {
  active: boolean;
};

export const Container = styled.View`
  ${() => css`
    flex-direction: row;
    align-items: center;
  `}
`;

export const Step = styled.View<StepProps>`
  ${({ theme, active }) => css`
    width: ${active ? 6 : 4}px;
    height: ${active ? 6 : 4}px;
    border-radius: ${active ? 3 : 2}px;
    background: ${active ? theme.colors.gray['600'] : theme.colors.gray['300']};
    margin-right: 8px;
  `}
`;
