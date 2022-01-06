import React from 'react';
import {SvgXml} from 'react-native-svg';



const PhoneSvg = ({height,width,color,size}) => {
  const defaultHeight = height ? height : 10;
  const defaultWidth = width ? width : 10
  const defaultColor = color ? color : 'white'
  const defaultSize = size ? size : 12

  return (
    <SvgXml
      // width={defaultSize}
      // height={defaultSize}
      xml={`
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.994 16.4096C21.4634 16.4096 19.9605 16.1702 18.5364 15.6996C17.8385 15.4616 16.9807 15.6799 16.5548 16.1174L13.7437 18.2394C10.4838 16.4992 8.47572 14.4918 6.75931 11.2563L8.81888 8.51855C9.35397 7.98418 9.5459 7.20358 9.31595 6.47116C8.84329 5.03952 8.60319 3.53737 8.60319 2.00612C8.60326 0.899935 7.70332 0 6.5972 0H2.00605C0.899935 0 0 0.899935 0 2.00605C0 14.6851 10.315 25 22.994 25C24.1001 25 25.0001 24.1001 25.0001 22.9939V18.4156C25 17.3096 24.1001 16.4096 22.994 16.4096Z" fill="white"/>
      </svg>
        `}
    />
  );
};


export default PhoneSvg;