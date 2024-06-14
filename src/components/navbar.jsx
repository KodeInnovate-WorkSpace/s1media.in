import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from 'react-router-dom';

export const MyNavbar = () => {
    return (
        <Navbar className="bg-black">
            {/* <Navbar className="bg-body-tertiary"> */}
            <Container>
                <Navbar.Brand href="#home" style={{ fontWeight: 'bold', fontSize: '1.5rem', }}>

                    <Link to={'/'} className='text-decoration-none text-danger text-uppercase'>S1Media</Link>

                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Dropdown as={ButtonGroup} drop="down">
                        <Dropdown.Toggle variant="danger" id="dropdown-basic">
                            Menu
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu-right bg-black text-white border">
                            <Link to={"/"} className=' text-decoration-none '>
                                <div className='dropdown-item text-white'>
                                    Home
                                </div>
                            </Link>
                            <Link to={"/about"} className=' text-decoration-none '>
                                <div className='dropdown-item text-white'>
                                    About Us
                                </div>
                            </Link>
                            <Link to={"/services"} className=' text-decoration-none '>
                                <div className='dropdown-item text-white'>
                                    Our Services
                                </div>
                            </Link>
                            <Link to={"/contact"} className=' text-decoration-none '>
                                <div className='dropdown-item text-white'>
                                    Contact Us
                                </div>
                            </Link>
                        </Dropdown.Menu>
                    </Dropdown>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
