import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Navbar, Button, Collapse } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';  // Icon for the collapsible menu
import { AiOutlineUser } from 'react-icons/ai';


function Header() {
    const [open, setOpen] = useState(false);
  return (
    <div>
            {/* Header Navbar */}
            <Navbar bg="light" expand="lg">
                <div className="d-flex " style={{ paddingLeft: '20px', paddingRight: '20px' }}>
                    {/* Left: Collapsible Sidebar Button */}
                    <Button
                        onClick={() => setOpen(!open)}
                        aria-controls="collapse-sidebar"
                        aria-expanded={open}
                        variant="outline-primary"
                        className="me-3"
                    >
                        <FaBars /> {/* Collapsible menu icon */}
                    </Button>

                    {/* Right: Admin Logo */}
                    <div className='ms-auto' style={{paddingLeft:'100%'}}>
                        <AiOutlineUser size={40} /> {/* Admin logo */}
                    </div>
                </div>
            </Navbar>

            {/* Collapsible Sidebar */}
            <Collapse in={open}>
                <div
                    id="collapse-sidebar"
                    className="position-absolute bg-light p-3"
                    style={{ top: '56px', left: 0, width: '250px', height: '100vh' }}
                >
                    {/* Optional: Sidebar content */}
                </div>
            </Collapse>
        </div>
  )
}

export default Header

