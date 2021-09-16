import React from "react";
import { IChildren } from "../../types";
import { Paragraph } from "./styles";

export const Text = ({ children }: IChildren) => {
  return <Paragraph>{children}</Paragraph>;
};
