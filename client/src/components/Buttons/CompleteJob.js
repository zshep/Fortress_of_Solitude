import React from "react";

function CompleteJob({action}) {
    return (
        <button
          class="button m-4"
          onClick={action}
          onMouseOver={(e) => {
            e.target.style.transform = "scale(1.25)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "scale(1)";
          }}
          style={{ fontFamily: "Permanent Marker", background: "#A6CE90" }}
        >
          Complete Job
        </button>
    )
}

export default CompleteJob