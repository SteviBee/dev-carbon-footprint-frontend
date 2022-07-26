import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import UserContext from "./userContext";


// Check for currentUser context, if not found then don't allow children
// Components to be rendered 
function PrivateRoute({ exact, path, children }) {
  const { curUser } = useContext(UserContext);

  if (!curUser) {
    return <Navigate to="/login" />;
  }

  return (
      <Route exact={exact} path={path}>
        {children}
      </Route>
  );
}

export default PrivateRoute;
