import React from "react";
import { useDashContext } from "../../utils/context/dashboardContext";
import { DASH_DISPLAY } from "../../utils/actions";

function Menu() {
  const [dashState, dispatch] = useDashContext();
  return (
    <aside className="menu pl-2  pt-4">
      <p className="menu-label">General</p>
      <ul className="menu-list">
        <li>
          <a
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
          </a>
        </li>
        <li>
          <a
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
          </a>
        </li>
        <li>
          <a
            href="/board"
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
          </a>
        </li>
        <li>
          <a
            href="/createpost"
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
          </a>
        </li>
        <li>
          <a
            href="/post"
            className="button m-4 is-size-6-tablet"
            onMouseOver={(e) => {
              e.target.style.transform = "scale(1.25)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "scale(1)";
            }}
            style={{ fontFamily: "Permanent Marker", background: "#e3e3e3" }}
          >
            Temp one job
          </a>
        </li>
        <li>
          <a
            href="/mypost"
            className="button m-4 is-size-6-tablet"
            onMouseOver={(e) => {
              e.target.style.transform = "scale(1.25)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "scale(1)";
            }}
            style={{ fontFamily: "Permanent Marker", background: "#dbe0d7" }}
          >
            Temp Edit One Job
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Menu;
