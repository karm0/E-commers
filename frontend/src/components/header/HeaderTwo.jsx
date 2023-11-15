import { useState } from "react";
import { Badge, Button, Container, Dropdown, Form } from "react-bootstrap";

const HeaderTwo = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("All Categories");

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
  };
  return (
    <Container className="container text-center">
      <div className="d-flex flex-column flex-md-row align-items-center">
        <div className="col-md-2  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-cart2"
            viewBox="0 0 16 16"
          >
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
          </svg>
          <p>E-commerce</p>
        </div>

        <div className="col-12 col-md-8">
          <Form className="d-flex position-relative">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Dropdown className="position-absolute end-0 me-2 h-100">
              <Dropdown.Toggle
                variant="success h-100"
                id="dropdown-basic"
                size="sm"
                style={{ background: "#6246ea" }}
              >
                {selectedLanguage}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() => handleLanguageSelect("All Categories")}
                >
                  All Categories
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleLanguageSelect("Car")}>
                  Car
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleLanguageSelect("Clothes")}>
                  Clothes
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => handleLanguageSelect("Electronics")}
                >
                  Electronics
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Form>
        </div>

        <div className=" pt-4 pe-3 d-flex justify-content-md-end  align-items-center col-md-2 ">
          <Button variant="btn position-relative me-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-cart2"
              viewBox="0 0 16 16"
            >
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>{" "}
            <Badge bg="secondary position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              9
            </Badge>
          </Button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-person"
            viewBox="0 0 16 16"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
          </svg>
        </div>
      </div>
    </Container>
  );
};

export default HeaderTwo;
