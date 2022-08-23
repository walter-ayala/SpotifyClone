import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const SearchIcon = (props: SvgProps) => (
  <Svg width={18} height={18} viewBox="0 0 18 18" {...props}>
    <Path
      fill={props?.color || '#b9b9c7'}
      d="M16.804 16.817a.625.625 0 000-.883l-2.794-2.795a.625.625 0 10-.884.883l2.795 2.795a.623.623 0 00.883 0zM12.928 7.59a5.346 5.346 0 01-5.34 5.34 5.346 5.346 0 01-5.34-5.34 5.346 5.346 0 015.34-5.34 5.346 5.346 0 015.34 5.34zm1.249 0A6.596 6.596 0 007.588 1 6.596 6.596 0 001 7.589a6.596 6.596 0 006.588 6.588 6.596 6.596 0 006.589-6.588z"
    />
    <Path
      fill="none"
      stroke={props?.color || '#b9b9c7'}
      strokeMiterlimit={20}
      strokeWidth={0.5}
      d="M16.804 16.817a.625.625 0 000-.883l-2.794-2.795a.625.625 0 10-.884.883l2.795 2.795a.623.623 0 00.883 0zM12.928 7.59a5.346 5.346 0 01-5.34 5.34 5.346 5.346 0 01-5.34-5.34 5.346 5.346 0 015.34-5.34 5.346 5.346 0 015.34 5.34zm1.249 0A6.596 6.596 0 007.588 1 6.596 6.596 0 001 7.589a6.596 6.596 0 006.588 6.588 6.596 6.596 0 006.589-6.588z"
    />
  </Svg>
)

export default SearchIcon
