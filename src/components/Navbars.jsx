import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";


function Navbars() {
  return (
    <div className='TopNav'>
          <Nav variant="pills" defaultActiveKey="/home" className='justify-content-center p-4'>
            <Nav.Item>
              <Nav.Link href="#"><Link to="/">Home</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1"><Link to="/about">About</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2"><Link to="/contact">Contact</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-3"> <Link to="/project">Project</Link></Nav.Link>
            </Nav.Item>
          </Nav>
    </div>
  )
}

export default Navbars