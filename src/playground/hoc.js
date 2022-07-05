import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>THis is info: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please dont share.</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

//requireAuthentication
const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuth && <p>Test this Auth.</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="check" />, document.getElementById("app"));
ReactDOM.render(
  <AuthInfo isAuth={true} info="Auth check" />,
  document.getElementById("app")
);
