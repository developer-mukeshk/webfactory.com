import React from 'react';
import { Helmet } from "react-helmet";
import { Link, useHistory } from 'react-router-dom';



const Error404 = () => {
  const history = useHistory();
  return (
    <React.Fragment>
      <Helmet> <title>Page Not Found</title> </Helmet>
      <div className="loadTemplate error">
        <h4>404 Error Page</h4>
        <p>Sorry, This page doesn't exist</p>
        <Link onClick={() => history.goBack()}>Go Back</Link>
      </div>
    </React.Fragment>
  );
}

export default Error404;