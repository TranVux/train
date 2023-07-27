import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
export const NewsIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill={props.fill ? props.fill : '#0000004D'}
    {...props}>
    <Path
      fill={props.fill ? props.fill : '#0000004D'}
      fillRule="evenodd"
      d="M14 2a4 4 0 0 1 4 4 4 4 0 0 1 4 4v9a3 3 0 0 1-3 3H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h8Zm4 17V8a2 2 0 0 1 2 2v9a1 1 0 1 1-2 0ZM5 11a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2H6Z"
      clipRule="evenodd"
    />
  </Svg>
);
