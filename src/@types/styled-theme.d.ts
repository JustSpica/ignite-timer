import "styled-components";
import { defaultTheme } from "styles/theme/default";

type ThemeType = Readonly<typeof defaultTheme>;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
