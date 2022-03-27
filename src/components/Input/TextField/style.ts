import styled from "styled-components/native";
import { InvalidInput } from "../types";

export const Container = styled.View``;

export const Label = styled.Text<InvalidInput>`
  font-family: ${({ theme }) => theme.FONTS.POPPINS_REGULAR};
  font-size: 14px;
  margin-bottom: 5px;
  color: ${({ theme, hasError }) =>
    hasError ? theme.COLORS.DANGER : theme.COLORS.BLACK};
`;

export const InputField = styled.TextInput<InvalidInput>`
  height: 45px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border: 1px solid
    ${({ theme, hasError }) =>
      hasError ? theme.COLORS.DANGER : theme.COLORS.BLACK};
  padding: 0 10px;
  font-family: ${({ theme }) => theme.FONTS.POPPINS_REGULAR};
`;
