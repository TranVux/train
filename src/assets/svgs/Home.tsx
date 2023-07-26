import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
export const HomeIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#0158D6"
      d="m3.055 9.845 6.019-6.551a3.998 3.998 0 0 1 5.896.007l5.982 6.545A4.004 4.004 0 0 1 22 12.547v6.451A3 3 0 0 1 19 22h-3a2 2 0 0 1-2-2.001v-4.003a2 2 0 1 0-4 0V20a2 2 0 0 1-2 2H5c-1.657 0-3-1.343-3-3.001v-6.445c0-1.003.377-1.97 1.055-2.708Z"
    />
  </Svg>
);
