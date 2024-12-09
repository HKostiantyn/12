import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const DisplaySessionId = () => {
  const sessionId = useSelector((state: RootState) => state.subscription.sessionId);
  console.log("Current Session ID from Redux:", sessionId);

  return <div>Session ID: {sessionId}</div>;
};

export default DisplaySessionId;