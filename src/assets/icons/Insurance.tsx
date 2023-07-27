import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
export const InsuranceIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#FFAAF6"
      fillRule="evenodd"
      d="M2 5c5 0 7 0 10-3 3 3 5 3 10 3v7c0 5.523-4.477 10-10 10S2 17.523 2 12V5Zm18 1.992c-1.566-.023-2.961-.108-4.235-.427-1.39-.347-2.582-.95-3.765-1.882-1.183.932-2.376 1.535-3.765 1.882-1.274.319-2.669.404-4.235.427V12a8 8 0 1 0 16 0V6.992Zm-3.293 3.715a1 1 0 0 0-1.414-1.414L11 13.586l-2.293-2.293a1 1 0 0 0-1.414 1.414L9.586 15a2 2 0 0 0 2.828 0l4.293-4.293Z"
      clipRule="evenodd"
    />
  </Svg>
);
