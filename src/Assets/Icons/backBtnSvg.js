import React from 'react';
import {SvgXml} from 'react-native-svg';



const BackBtnSvg = ({height,width,color,size}) => {
  const defaultHeight = height ? height : 9;
  const defaultWidth = width ? width : 16
  const defaultColor = color ? color : 'white'
  const defaultSize = size ? size : 12

  return (
    <SvgXml
      // width={defaultSize}
      // height={defaultSize}
      xml={`
      <svg width="${defaultWidth}" height="${defaultHeight}" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.5 1L1.5 8L8.5 15" stroke="white"/>
</svg>

        `}
    />
  );
};


export default BackBtnSvg;