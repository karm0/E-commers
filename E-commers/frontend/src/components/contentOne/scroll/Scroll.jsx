import { useState } from "react";
import { useEffect } from "react";

const Scroll = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      style={{
        position: "fixed",
        bottom: "15%",
        right: "2%",
        cursor: "pointer"
      }}
    >
      {" "}
      {showTopBtn && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="#6246ea"
          className="bi bi-arrow-up-circle-fill"
          viewBox="0 0 16 16"
          onClick={goToTop}
        >
          <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
        </svg>
      )}{" "}
    </div>
  );
};

export default Scroll;
