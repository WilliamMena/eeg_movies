import React from 'react'
import Navbar from 'react-bootstrap/Navbar'

const Header = () => {
    return (
        <Navbar>
            <Navbar.Brand>EEG Movies</Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Created By: <a href="mailto:williammena1991@gmail.com">William Mena</a>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;