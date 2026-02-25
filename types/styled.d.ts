import "styled-components";
import type { AppTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme extends AppTheme {}
}
