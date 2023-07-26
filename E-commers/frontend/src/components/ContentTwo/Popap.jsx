/* eslint-disable react/prop-types */
import Modal from "react-bootstrap/Modal";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ background: "transparent"}}
    >
          <div className="text-end me-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-x-lg"
              viewBox="0 0 16 16"
              onClick={props.onHide}
              style={{cursor: "pointer"}}
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          </div>
      <div className="d-block d-lg-flex align-items-center gap-3">
        <div className="d-flex justify-content-center">
          <img
            width={350}
            src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="d-flex justify-content-center align-items-center flex-column">
          <h3>Smart Wathe</h3>
          <p>$50</p>
          <p className="text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab,
            exercitationem.
          </p>
          <div className="d-flex gap-3">
            {[
              "https://images.unsplash.com/photo-1569411032431-07598b0012c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
              "https://images.unsplash.com/photo-1636877648317-fc6275acf0dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
              "https://images.unsplash.com/photo-1541351991055-b55135fea4bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
            ].map((item) => (
              <img
                style={{ cursor: "pointer" }}
                width={100}
                key={item}
                src={item}
                alt=""
              />
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
