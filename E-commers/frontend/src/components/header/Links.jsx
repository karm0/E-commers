import { Dropdown } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
const Links = ({ title }) => {
  return (
    <div className="d-flex">
      <Dropdown>
        <Dropdown.Toggle
          variant="success"
          id="dropdown-basic"
          style={{ background: "white", color: "black", border: "none" }}
        >
          {title}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="1" as="a" href="#" rel="noopener noreferrer">
            Link 1
          </Dropdown.Item>
          <Dropdown.Item
            eventKey="2"
            as="a"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link 2
          </Dropdown.Item>
          <Dropdown.Item
            eventKey="3"
            as="a"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link 2
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Links;
