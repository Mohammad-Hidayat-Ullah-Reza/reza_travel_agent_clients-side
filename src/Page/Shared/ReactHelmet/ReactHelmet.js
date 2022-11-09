import React from "react";
import { Helmet } from "react-helmet-async";

const ReactHelmet = ({ value }) => {
  return (
    <Helmet>
      <title>{value}</title>
      <meta
        name="description"
        content="Beginner friendly page for learning React Helmet."
      />
    </Helmet>
  );
};

export default ReactHelmet;
