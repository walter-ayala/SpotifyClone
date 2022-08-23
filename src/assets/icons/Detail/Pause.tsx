import React from 'react'
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg'

const Pause = (props: SvgProps) => (
  <Svg
    {...props}
    width={15}
    height={15}
    fill="none"
  >
    <G clipPath="url(#a)" fill="#000">
      <Path d="M12.803 2.198a7.494 7.494 0 0 0-10.604 0 7.494 7.494 0 0 0 0 10.604 7.494 7.494 0 0 0 10.604 0 7.494 7.494 0 0 0 0-10.604ZM7.501 13.766A6.274 6.274 0 0 1 1.234 7.5a6.274 6.274 0 0 1 6.267-6.267A6.274 6.274 0 0 1 13.767 7.5a6.274 6.274 0 0 1-6.266 6.266Z" />
      <Path d="M8.75 4.694a.616.616 0 0 0-.615.616v4.38a.616.616 0 0 0 1.232 0V5.31a.616.616 0 0 0-.616-.616ZM6.249 4.694a.616.616 0 0 0-.616.616v4.38a.616.616 0 0 0 1.232 0V5.31a.616.616 0 0 0-.616-.616Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h15v15H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default Pause
