import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
export const CardIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#C29D65"
      fillRule="evenodd"
      d="M4 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v.535A3.998 3.998 0 0 0 18 12c0 1.48.804 2.773 2 3.465V16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8Zm16 4a2 2 0 0 1 2-2V8a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-2a2 2 0 0 1-2-2Zm-4-5h-2v2h2V7Zm-2 4h2v2h-2v-2Zm2 4h-2v2h2v-2Z"
      clipRule="evenodd"
    />
  </Svg>
);
