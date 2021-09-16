import React from "react";
import { IChildren } from "../../types";
import { H2 } from "./styles";

export const Title = ({ children }: IChildren) => {
  return <H2>{children}</H2>;
};
