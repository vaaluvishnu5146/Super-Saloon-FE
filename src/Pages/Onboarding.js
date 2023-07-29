import React from "react";
import BasicButton from "../Elements/Button/BasicCta";
import { useNavigate } from "react-router-dom";

function Onboarding() {
  const navigator = useNavigate();
  return (
    <section className="app-page-layout">
      <div className="onboarding-page-container">
        <img
          height="40%"
          src="https://cdni.iconscout.com/illustration/premium/thumb/salon-man-doing-hair-washing-of-girl-2660611-2231742.png"
          alt="saloon image"
        />
        <h1
          style={{
            textAlign: "center",
          }}
        >
          Book your slot for getting Beautified
        </h1>
        <p
          style={{
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          Looking good is not luxurious anymore
        </p>
        <BasicButton
          text="Get Started"
          id="get_started"
          name="get_started"
          onClick={() => navigator("/home")}
          overrides={{
            background: "#F17689",
            color: "#FFFFFF",
            fontWeight: "bold",
            width: "60%",
            fontSize: "1.2rem",
          }}
        />
      </div>
    </section>
  );
}

export default Onboarding;
