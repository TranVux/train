import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
export const ChatIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill={props.fill ? props.fill : '#0000004D'}
    {...props}>
    <Path
      fill={props.fill ? props.fill : '#0000004D'}
      fillRule="evenodd"
      d="M12 21c5.523 0 10-4.253 10-9.5S17.523 2 12 2 2 6.253 2 11.5c0 2.84 1.313 5.39 3.393 7.131.033.283.05.573.05.869 0 .88-.15 1.71-.417 2.448.317.034.642.052.974.052 1.641 0 3.129-.44 4.212-1.151.58.1 1.178.151 1.788.151Z"
      clipRule="evenodd"
    />
  </Svg>
);
