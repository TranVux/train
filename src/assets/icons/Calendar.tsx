import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
export const CalendarIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#0158D6"
      fillRule="evenodd"
      d="M8 3a1 1 0 0 1 2 0v1h4V3a1 1 0 1 1 2 0v1a6 6 0 0 1 6 6v6a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6v-6a6 6 0 0 1 6-6V3Zm6 3v1a1 1 0 1 0 2 0V6a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-6a4 4 0 0 1 4-4v1a1 1 0 0 0 2 0V6h4Zm-7 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm1 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm3-3a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm1 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm3-3a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm1 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
      clipRule="evenodd"
    />
  </Svg>
);
