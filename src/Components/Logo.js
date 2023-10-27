import React from 'react'
import download from "../Content/llooggoo.png";


export default function Logo(props) {
  return (
    <div>
      <img src={download} id={props.id} alt="" />
    </div>
  )
}
