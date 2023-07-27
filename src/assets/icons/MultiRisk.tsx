import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
export const MultiRisk = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#5E77F7"
      fillRule="evenodd"
      d="M2 5c5 0 7 0 10-3 3 3 5 3 10 3v7c0 5.523-4.477 10-10 10S2 17.523 2 12V5Zm18 1.992c-1.566-.023-2.961-.108-4.235-.427-1.39-.347-2.582-.95-3.765-1.882-1.183.932-2.376 1.535-3.765 1.882-1.274.319-2.669.404-4.235.427V12a8 8 0 1 0 16 0V6.992Zm-9.424 1.08A1 1 0 0 1 11.574 7h.852a1 1 0 0 1 .998 1.071l-.358 5a1 1 0 0 1-.997.929h-.138a1 1 0 0 1-.997-.929l-.357-5ZM12 15a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"
      clipRule="evenodd"
    />
  </Svg>
);
