import React from "react";
import { useMutation } from "@apollo/client";
import { ACCEPT_JOB } from "../../utils/mutations";
import ErrorModal from "../Modals/ErrorModal";

function ClaimJob({ postId }) {
  const [acceptJob, {error}] = useMutation(ACCEPT_JOB);
  if (error) {
    return <ErrorModal message={error.message} activate={true} />
  }
  const claimJob = async (event) => {
    event.preventDefault();
    const jobData = {
      postId,
    };
    try {
      const { data } = await acceptJob({
        variables: { jobData },
      });
      if (!data) {
        const error = new Error("No data returned");
        return (
          <>
            <ErrorModal message={error.message} activate={true} />
          </>
        );
      }
    } catch (error) {
      return (
        <>
          <ErrorModal message={error.message} activate={true} />
        </>
      );
    }
  };
    return (
        <button
          class="button m-4"
          onClick={claimJob}
          onMouseOver={(e) => {
            e.target.style.transform = "scale(1.25)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "scale(1)";
          }}
          style={{ fontFamily: "Permanent Marker", background: "#ffa" }}
        >
          Claim Job
        </button>
    )
}

export default ClaimJob