import React from "react";
import { useParams } from "react-router-dom";

export const Profile = () => {
  const params = useParams();

  return (
    <div>
      <h2>This is profile of {params.userName}</h2>
    </div>
  );
};
