import { Container } from "react-bootstrap";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import MyVerticallyCenteredModal from "./Popap";
import { useState } from "react";
import { useGetproductByNameQuery } from "../../Redux/product";

const Mine = () => {
  const handleBtn = (e) => {
    setMyData(e)
  }
  const [modalShow, setModalShow] = useState(false);

  const allProductsAPI = "products?populate=*";
  const menProductAPI = "products?populate=*&filters[productCategory][$eq]=men";
  const womenProductAPI =
    "products?populate=*&filters[productCategory][$eq]=women";

  const [myData, setMyData] = useState(allProductsAPI);
  const { data, error, isLoading } = useGetproductByNameQuery(myData);

  return (
    <Container className="my-5">
      <div className="pt-4 flex-wrap gap-4 d-flex align-items-center justify-content-between">
        <div>
          <h3>Selected Products</h3>
          <p>All our new arrivals in a exclusivo barnd selection</p>
        </div>
        <ToggleButtonGroup
          className="gap-3"
          type="radio"
          name="options"
          defaultValue={allProductsAPI}
          onChange={handleBtn}
        >
          <ToggleButton
            style={{ background: "#6246EA" }}
            id="tbg-radio-1"
            value={allProductsAPI}
          >
            All Products
          </ToggleButton>
          <ToggleButton
            style={{ background: "#6246EA" }}
            id="tbg-radio-2"
            value={menProductAPI}
          >
            MEN Category
          </ToggleButton>
          <ToggleButton
            style={{ background: "#6246EA" }}
            id="tbg-radio-3"
            value={womenProductAPI}
          >
            Women Category
          </ToggleButton>
        </ToggleButtonGroup>
      </div>

      <div className="d-flex gap-5 flex-wrap justify-content-center py-5">
        {isLoading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error.message}</h2>
        ) : data ? (
          data.data.map((item) => {
            return (
              <Card key={item.id} style={{ width: "18rem" }}>
                <Card key={item} style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={`${
                      item.attributes.productImg.data[0].attributes.url
                    }`}
                  />
                  <Card.Body>
                    <Card.Title>
                      {item.attributes.productTitle}{" "}
                      <span style={{ marginLeft: "9rem" }}>
                        {item.attributes.productPrice}$
                      </span>
                    </Card.Title>
                    <Card.Text>{item.attributes.productDescription}</Card.Text>
                    <Button
                      onClick={() => setModalShow(true)}
                      style={{
                        backgroundColor: "transparent",
                        color: "#e45858",
                        border: "none",
                      }}
                      variant="primary d-flex align-items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-bag-plus-fill me-1"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z"
                        />
                      </svg>
                      Add To Cart
                    </Button>
                  </Card.Body>
                </Card>
              </Card>
            );
          })
        ) : null}
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    </Container>
  );
};

export default Mine;
