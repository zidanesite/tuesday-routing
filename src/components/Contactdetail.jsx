import React from 'react'
import { useParams } from 'react-router-dom';

function Contactdetail() {
    const {name} = useParams();
  return (
    <>
    <h1>Contact Detail of {name} </h1>
    <p>
        Lorem ipsum dolor sit amet consectetur <br/>
        adipisicing elit. Ex vitae, a praesentium ad <br/>
        aperiam rem minus, inventore repellat saepe <br/>
        repudiandae debitis id molestias provident at <br/>
        eligendi eveniet ipsam, porro dicta.
    </p>
    </>
    
  )
}

export default Contactdetail