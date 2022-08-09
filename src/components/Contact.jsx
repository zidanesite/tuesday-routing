import React from 'react'
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className='ContactD'>
    <h1>Contact</h1>
    <p>
        Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Ex vitae, a praesentium ad <br/>
        aperiam rem minus, inventore repellat saepe <br/>
        repudiandae debitis id molestias provident at <br/>
        eligendi eveniet ipsam, porro dicta.
    </p>
    <Link to="/contactdetail Zidane" >Contact Details</Link>
    </div>
    
  )
}

export default Contact