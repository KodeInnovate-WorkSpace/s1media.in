import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function MyNavbar() {
    return (
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">S1Media</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Dropdown as={ButtonGroup} drop="down">
                        <Dropdown.Toggle variant="danger" id="dropdown-basic">
                            Menu
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu-right">
                            <Dropdown.Item href="#/action-1">Home</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">About Us</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Our Services</Dropdown.Item>
                            <Dropdown.Item href="#/action-4">Contact Us</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;