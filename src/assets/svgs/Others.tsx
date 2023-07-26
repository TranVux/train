import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
export const OthersIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#8390B0"
      fillRule="evenodd"
      d="M11 3a1 1 0 1 1 1.999.05C18.053 3.55 22 7.813 22 13v1h-2a2 2 0 1 0-4 0h-2a2 2 0 0 0-1-1.732V19a3 3 0 1 1-6 0v-1h2v1a1 1 0 1 0 2 0v-6.732A2 2 0 0 0 10 14H8a2 2 0 1 0-4 0H2v-1c0-5.186 3.947-9.45 9.001-9.95L11 3Zm-5 7c-.544 0-1.062.108-1.535.305a8.003 8.003 0 0 1 15.07 0A3.988 3.988 0 0 0 18 10a3.99 3.99 0 0 0-3 1.354A3.99 3.99 0 0 0 12 10a3.99 3.99 0 0 0-3 1.354A3.99 3.99 0 0 0 6 10Z"
      clipRule="evenodd"
    />
  </Svg>
);
