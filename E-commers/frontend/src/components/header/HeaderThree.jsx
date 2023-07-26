import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import { Accordion, Container, Dropdown } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Links from "./Links";


const HeaderThree = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("Categories");

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container className="d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center pt-3">
        <Dropdown>
          <Dropdown.Toggle
            variant="success p-2 position-relative"
            id="dropdown-basic"
            size="sm"
            style={{ background: "#6246ea" }}
          >
            {selectedLanguage}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleLanguageSelect("Bikes")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-bicycle me-1 mb-1"
                viewBox="0 0 16 16"
              >
                <path d="M4 4.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1v.5h4.14l.386-1.158A.5.5 0 0 1 11 4h1a.5.5 0 0 1 0 1h-.64l-.311.935.807 1.29a3 3 0 1 1-.848.53l-.508-.812-2.076 3.322A.5.5 0 0 1 8 10.5H5.959a3 3 0 1 1-1.815-3.274L5 5.856V5h-.5a.5.5 0 0 1-.5-.5zm1.5 2.443-.508.814c.5.444.85 1.054.967 1.743h1.139L5.5 6.943zM8 9.057 9.598 6.5H6.402L8 9.057zM4.937 9.5a1.997 1.997 0 0 0-.487-.877l-.548.877h1.035zM3.603 8.092A2 2 0 1 0 4.937 10.5H3a.5.5 0 0 1-.424-.765l1.027-1.643zm7.947.53a2 2 0 1 0 .848-.53l1.026 1.643a.5.5 0 1 1-.848.53L11.55 8.623z" />
              </svg>
              Bikes
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleLanguageSelect("Electronics")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-laptop me-1 mb-1"
                viewBox="0 0 16 16"
              >
                <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
              </svg>
              Electronics
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleLanguageSelect("Books")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-book-half me-1 mb-1"
                viewBox="0 0 16 16"
              >
                <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
              </svg>
              Books
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleLanguageSelect("Games")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-controller me-1 mb-1"
                viewBox="0 0 16 16"
              >
                <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1v-1z" />
                <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729c.14.09.266.19.373.297.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466.206.875.34 1.78.364 2.606.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527-1.627 0-2.496.723-3.224 1.527-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.34 2.34 0 0 1 .433-.335.504.504 0 0 1-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a13.748 13.748 0 0 0-.748 2.295 12.351 12.351 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.354 12.354 0 0 0-.339-2.406 13.753 13.753 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27-1.036 0-2.063.091-2.913.27z" />
              </svg>
              Games
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      {useMediaQuery("(max-width: 1200px)") && (
        <div>
          <Button
            style={{ background: "#6246EA" }}
            onClick={handleShow}
            className="p-2"
          >
            <div className="border"></div>
            <div className="border mt-1"></div>
            <div className="border pe-3 mt-1"></div>
          </Button>

          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Home</Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>
                        <a href="#">Link 1</a>
                      </li>
                      <li className="py-2">
                        <a href="#">Link 2</a>
                      </li>
                      <li>
                        <a href="#">Link 3</a>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Mega menu</Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>
                        <a href="#">Link 1</a>
                      </li>
                      <li className="py-2">
                        <a href="#">Link 2</a>
                      </li>
                      <li>
                        <a href="#">Link 3</a>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Full screen menu</Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>
                        <a href="#">Link 1</a>
                      </li>
                      <li className="py-2">
                        <a href="#">Link 2</a>
                      </li>
                      <li>
                        <a href="#">Link 3</a>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Pages</Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>
                        <a href="#">Link 1</a>
                      </li>
                      <li className="py-2">
                        <a href="#">Link 2</a>
                      </li>
                      <li>
                        <a href="#">Link 3</a>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>User account</Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>
                        <a href="#">Link 1</a>
                      </li>
                      <li className="py-2">
                        <a href="#">Link 2</a>
                      </li>
                      <li>
                        <a href="#">Link 3</a>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>Vendor account</Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>
                        <a href="#">Link 1</a>
                      </li>
                      <li className="py-2">
                        <a href="#">Link 2</a>
                      </li>
                      <li>
                        <a href="#">Link 3</a>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      )}

      {useMediaQuery("(min-width: 1200px)") && (
        <>
        <Links title={"Home"} />
        <Links title={"Mega menu"} />
        <Links title={"Full screen menu"} />
        <Links title={"Pages"} />
        <Links title={"User account"} />
        <Links title={"Vendor account"} />
        </>
      )}


    </Container>
  );
};

export default HeaderThree;
