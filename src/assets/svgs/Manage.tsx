import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
export const ManageIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#000"
      fillOpacity={0.3}
      fillRule="evenodd"
      d="M22.218 17.08c-.501 1.255-1.812 1.92-3.164 1.92H4.946c-1.352 0-2.663-.665-3.164-1.92A10.97 10.97 0 0 1 1 13C1 6.925 5.925 2 12 2s11 4.925 11 11a10.97 10.97 0 0 1-.782 4.08Zm-7.663-7.912a1 1 0 0 1 .277 1.387l-1.039 1.558a2 2 0 1 1-1.664-1.109l1.039-1.559a1 1 0 0 1 1.387-.277ZM4 15a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm2-7a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm6-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm7 9a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-2-5a1 1 0 1 1 2 0 1 1 0 0 1-2 0ZM5 20a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H5Z"
      clipRule="evenodd"
    />
  </Svg>
);
