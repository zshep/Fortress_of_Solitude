import React from "react";
import { useDashContext } from "../../utils/context/dashboardContext";
import { DASH_DISPLAY } from "../../utils/actions";
import { Link } from "react-router-dom";

function Menu() {
  const [dashState, dispatch] = useDashContext();
  return (
    <aside className="menu pl-2  pt-4">
      <p className="menu-label has-text-white">General</p>
      <ul className="menu-list">
        <li>
          <Link
            onClick={async () => {
              await dispatch({
                type: DASH_DISPLAY,
                payload: "needed",
              });
            }}
            className="button m-4 is-size-6-tablet"
            onMouseOver={(e) => {
              e.target.style.transform = "scale(1.25)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "scale(1)";
            }}
            style={{ fontFamily: "Permanent Marker", background: "#e3e3e3" }}
          >
            Your jobs
          </Link>
        </li>
        <li>
          <Link
            onClick={async () => {
              await dispatch({
                type: DASH_DISPLAY,
                payload: "accepted",
              });
            }}
            className="button m-4 is-size-6-tablet"
            onMouseOver={(e) => {
              e.target.style.transform = "scale(1.25)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "scale(1)";
            }}
            style={{ fontFamily: "Permanent Marker", background: "#c3c9bf" }}
          >
            Accepted jobs
          </Link>
        </li>
        <li>
          <Link
            to="/board"
            className="button m-4 is-size-6-tablet"
            onMouseOver={(e) => {
              e.target.style.transform = "scale(1.25)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "scale(1)";
            }}
            style={{ fontFamily: "Permanent Marker", background: "#dbe0d7" }}
          >
            See All jobs
          </Link>
        </li>
        <li>
          <Link
            to="/createpost"
            className="button m-4 is-size-6-tablet"
            onMouseOver={(e) => {
              e.target.style.transform = "scale(1.25)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "scale(1)";
            }}
            style={{ fontFamily: "Permanent Marker", background: "#c3c9bf" }}
          >
            Create a job
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Menu;
