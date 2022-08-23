import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const LeftArrow = (props: SvgProps) => (
  <Svg
    {...props}
    width={25}
    height={17}
    fill="none"
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.174 16.008a1 1 0 0 1-.66-.25l-7-6.12a1.5 1.5 0 0 1 1-2.63h21.49a1 1 0 1 1 0 2H2.834l6 5.25a1 1 0 0 1-.66 1.75Zm-3.34-10.75 4-3.5a1.003 1.003 0 1 0-1.32-1.51l-4 3.5a1.003 1.003 0 0 0 1.32 1.51Z"
      fill="#fff"
    />
  </Svg>
)

export default LeftArrow
