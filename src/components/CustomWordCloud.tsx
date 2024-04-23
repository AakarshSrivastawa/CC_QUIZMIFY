"use client";
import { useTheme } from 'next-themes';
import React from 'react';
import D3WordCloud from 'react-d3-cloud';

type Props = {};

const data =[
    {
        text:"Grind",
        value :3,
    },
    {
        text:"Hey",
        value :3,
    },
    {
        text:"Hi",
        value :5,
    },
    {
        text:"Aakarsh",
        value :10,
    },
    {
        text:"YoYo",
        value :8,
    },
    {
        text:"Bash",
        value :6,
    },
];

const fontSizeMapper = (word : {value:number}) =>{
    return Math.log2(word.value)*5 +16 ;
}

const CustomWordCloud = (props: Props) => {
    const theme = useTheme();
  return (
    <>
       <D3WordCloud 
       height ={500} 
       data={data} 
       font ="Times" 
       fontSize={fontSizeMapper} 
       rotate={0} 
       padding={10}
       fill={theme.theme == 'dark' ? 'white':'black'}
       />
    </>
  )
}

export default CustomWordCloud;