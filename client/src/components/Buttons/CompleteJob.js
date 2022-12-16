import React from "react";
import { useMutation } from "@apollo/client";
import { COMPLETE_JOB } from "../../utils/mutations";
import ErrorModal from "../Modals/ErrorModal";

function CompleteJob({ postId }) {
  console.log(postId)
  const [finishJob, { error }] = useMutation(COMPLETE_JOB);
  if (error) {
    console.log(error)
    return <ErrorModal message={error.message} activate={true} />
  }
  const completeJob = async (event) => {
    event.preventDefault();
    const jobData = {
      postId,
    };
    console.log(jobData)
    try {
      const { data } = await finishJob({
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
          onClick={completeJob}
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