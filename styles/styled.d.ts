import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    font: {
      family: string;
      colors: {
        white: "#FFFFFF";
        grey200: "#999999";
      };
    };

    colors: {
      white: "#FFFFFF";
      grey200: "#999999";
    };
  }
}
