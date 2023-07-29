import React from "react";

function ScrollableGrid({
  heading = "",
  ctaText = "",
  onCTAClick = () => {},
  data = [],
}) {
  return (
    <section className="scrollable-grid-container" id="scrollable-grid">
      <div className="scrollable-grid-header">
        <h3>{heading || "Heading"}</h3>
        <button
          style={{
            fontSize: "0.8rem",
          }}
        >
          {ctaText || "See More"}
        </button>
      </div>
      <div className="scrollable-grid">
        {data.map((d, i) => (
          <div key={`specialists-${i}`} className="grid-item">
            <img
              className="grid-image"
              width="100%"
              src={d.generalDetails.profileImage}
            />
            <h4 className="grid-label">{d.generalDetails.firstName}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ScrollableGrid;
