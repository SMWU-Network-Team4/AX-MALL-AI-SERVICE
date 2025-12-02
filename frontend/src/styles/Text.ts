import styled from "styled-components";
import theme from "./theme";

export const H3 = styled.div`
  font-family: ${theme.typography.heading3.fontFamily};
  font-weight: ${theme.typography.heading3.fontWeight};
  font-size: ${theme.typography.heading3.fontSize};
  line-height: ${theme.typography.heading3.lineHeight};
  letter-spacing: ${theme.typography.heading3.letterSpacing};
`;

export const Body1 = styled.div`
  font-family: ${theme.typography.body1.fontFamily};
  font-weight: ${theme.typography.body1.fontWeight};
  font-size: ${theme.typography.body1.fontSize};
  line-height: ${theme.typography.body1.lineHeight};
  letter-spacing: ${theme.typography.body1.letterSpacing};
`;

export const Body2 = styled.div`
  font-family: ${theme.typography.body2.fontFamily};
  font-weight: ${theme.typography.body2.fontWeight};
  font-size: ${theme.typography.body2.fontSize};
  line-height: ${theme.typography.body2.lineHeight};
  letter-spacing: ${theme.typography.body2.letterSpacing};
`;
