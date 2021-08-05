import styled, { css } from 'styled-components';
import get from 'lodash/get';
import { TextStyleVariantMap } from '../../foundation/Text';
import { breakpointsMedia } from '../../../theme/Utils/breakpointsMedia';

const ButtonGhost = css`
  color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
  background-color: transparent;
`;

const ButtonDefault = css`
  color: ${({ theme, variant }) => get(theme, `colors.${variant}.contrastText`)};
  background-color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
`;

export const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  transition: opacity ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};
  ${breakpointsMedia({
    xs: css`
      ${TextStyleVariantMap.smallestException}
    `,
    md: css`
      padding: 12px 43px;
      ${TextStyleVariantMap.paragraph1}
    `,
  })}
  ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)}
  &:hover,
  &:focus {
    opacity: .5;
  }
`;