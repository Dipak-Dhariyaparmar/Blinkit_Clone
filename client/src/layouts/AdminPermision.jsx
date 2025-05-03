import React from "react";
import { useSelector } from "react-redux";
import isAdmin from "../utils/isAdmin";

const AdminPermision = ({ children }) => {
  const user = useSelector((state) => state.user);

  return (
    <>
      {isAdmin(user.role) ? (
        children
      ) : (
        <p className="text-red-600 bg-red-100 p-4">Do not have permission</p>
      )}
    </>
  );
};

export default AdminPermision;
// this component checks if the user has admin permissions and renders the children components if they do, otherwise it shows a permission error message.
// it uses the isAdmin utility function to check the user's role and the useSelector hook from react-redux to access the user state from the Redux store. The component is exported as default for use in other parts of the application.
