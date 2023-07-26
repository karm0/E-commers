import { Button, Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./HeroStyle.css";
import { Pagination } from "swiper/modules";

const Hearo = () => {
  return (
    <Container className="py-5 d-flex align-item-center gap-3">
      <Swiper
      loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RvcmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <div
            className="position-absolute text-start"
            style={{ backgroundColor: "transparent", left: "10%" }}
          >
            <div style={{ backgroundColor: "transparent" }}>
              <p
                className="fs-4 fs-md-1"
                style={{
                  backgroundColor: "transparent",
                  color: "#fff",
                  fontWeight: "bold",
                }}
              >
                COLLECTION
              </p>
              <p
                className="fs-4 fs-md-1"
                style={{
                  backgroundColor: "transparent",
                  color: "#fff",
                  fontWeight: "bold",
                }}
              >
                MEN
              </p>
            </div>
            <div style={{ backgroundColor: "transparent" }}>
              <span
                style={{ backgroundColor: "transparent", color: "#fff" }}
                className="fs-5"
              >
                SALE UP TO
              </span>
              <span
                style={{ color: "#e45858" }}
                className="ms-3 px-3 p-1 rounded-pill fs-5"
              >
                70% OFF
              </span>
              <p
                style={{
                  backgroundColor: "transparent",
                  color: "#fff",
                  fontSize: "15px",
                }}
                className="mt-2"
              >
                Get Free Shopping On Orders Over
                <span
                  className="rounded-pill px-2 p-1"
                  style={{ color: "#e45858" }}
                >
                  $99.00
                </span>
              </p>
            </div>
            <Button style={{ background: "#6246EA", border: "none" }}>
              SHOP NOW
            </Button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHxwcm9kdWN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1509695507497-903c140c43b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjc3fHxwcm9kdWN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </SwiperSlide>
      </Swiper>

      <div className="d-none d-md-block" style={{ minWidth: "32%" }}>
        <div className="position-relative mb-4">
          <img
            className="w-100"
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt="..."
          />
          <div
            className="position-absolute ms-3"
            style={{ background: "transparent", top: "20%" }}
          >
            <h6
              style={{ background: "transparent", color: "#fff" }}
              className="small"
            >
              Lorem ipsum dolor sit amet.
            </h6>
            <h6
              style={{ background: "transparent", color: "#fff" }}
              className="small"
            >
              Lorem ipsum dolor sit amet consectetur
            </h6>
            <Button style={{ background: "#6246EA", border: "none" }}>
              Buy Now
            </Button>
          </div>
        </div>

        <div className="position-relative">
          <img
            className="w-100"
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="..."
          />
          <div
            className="position-absolute ms-3"
            style={{ background: "transparent", top: "35%" }}
          >
            <h6 style={{ background: "transparent", color: "#fff" }}>
              Lorem ipsum dolor sit amet consectetur
            </h6>
            <Button style={{ background: "#6246EA", border: "none" }}>
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hearo;
