import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
export const HouseIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#8A6AE7"
      fillRule="evenodd"
      d="M13.487 5.147a2 2 0 0 0-2.974 0L6 10.16V19a1 1 0 0 0 1 1h2v-3a3 3 0 1 1 6 0v3h2a1 1 0 0 0 1-1v-8.838l-4.513-5.015Zm-9.744 7.522L4 12.384V19a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-6.616l.257.285a1 1 0 1 0 1.486-1.338l-6.77-7.522a4 4 0 0 0-5.946 0l-6.77 7.522a1 1 0 0 0 1.486 1.338ZM13 20v-3a1 1 0 1 0-2 0v3h2Zm-3-10a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4Z"
      clipRule="evenodd"
    />
  </Svg>
);
