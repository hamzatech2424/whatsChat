import React from 'react';
import { SvgXml } from 'react-native-svg';

const BackSvg = () => {
 
  return (
    <SvgXml
      xml={` <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.71 4.41L8.12001 9L12.71 13.59L11.29 15L5.29001 9L11.29 3L12.71 4.41Z" fill="white"/>
      <mask id="mask0_170_1682" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="5" y="3" width="10" height="14">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.71 4.41L8.12001 9L12.71 13.59L11.29 15L5.29001 9L11.29 3L12.71 4.41Z" fill="white"/>
      </mask>
      <g mask="url(#mask0_170_1682)">
      </g>
      </svg>
      
      `}
    />
  );
};

export default BackSvg;
