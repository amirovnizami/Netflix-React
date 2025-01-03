import React, { useRef } from "react";

const ScrollableContainer = ({ children }) => {
  const containerRef = useRef();

  // Sol ve sağa kaydırma işlevleri
  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div style={{ position: "relative" }}>
      <button
        style={{
          position: "absolute",
          left: "-20px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          border: "none",
          padding: "0.5rem",
          cursor: "pointer",
          borderRadius: "50%",
        }}
        onClick={scrollLeft}
      >
        ◀
      </button>

      <div
        ref={containerRef}
        style={{
          display: "flex",
          gap: "1rem",
          overflowX: "auto",
          overflowY: "hidden",
          scrollBehavior: "smooth",
          padding: "10px 0",
        }}
      >
        {children}
      </div>

      <button
        style={{
          position: "absolute",
          right: "-20px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          border: "none",
          padding: "0.5rem",
          cursor: "pointer",
          borderRadius: "50%",
        }}
        onClick={scrollRight}
      >
        ▶
      </button>
    </div>
  );
};

export default ScrollableContainer;
