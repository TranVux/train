import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
export const PersonalIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#FF8DC4"
      fillRule="evenodd"
      d="M12 2C9 5 7 5 2 5v7c0 5.523 4.477 10 10 10s10-4.477 10-10V5c-5 0-7 0-10-3Zm3.765 4.565c1.274.319 2.669.404 4.235.427V12a8 8 0 1 1-16 0V6.992c1.566-.023 2.961-.108 4.235-.427 1.39-.347 2.582-.95 3.765-1.882 1.183.932 2.376 1.535 3.765 1.882ZM14 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-6 6a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3H8Z"
      clipRule="evenodd"
    />
  </Svg>
);
