import React from 'react';
import './Loading.css';
import { Audio } from 'react-loader-spinner'


const Loading = () => {
  return <Audio style={{
    margin: "3rem auto",
    display: "block"
  }}
  width="100%"
  height="100px"
  radius="9"
  color="green"
  ariaLabel="three-dots-loading"
  wrapperStyle
  wrapperClass
/>
}

export default Loading