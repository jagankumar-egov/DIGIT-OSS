import { PrivateRoute } from "@egovernments/digit-ui-react-components";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link, Switch, useLocation, Route } from "react-router-dom";
import Inbox from "./Inbox/Inbox";
import Sample from "./Sample";


const EmployeeApp = ({ path, url, userType, tenants, parentRoute }) => {
  const { t } = useTranslation();

  const BRManageApplication = Digit?.ComponentRegistryService?.getComponent("BRManageApplication");
  const RegisterDetails = Digit?.ComponentRegistryService?.getComponent("RegisterDetails");
  const Inbox = Digit?.ComponentRegistryService?.getComponent("Inbox");
  const ResponseEmployee = Digit?.ComponentRegistryService?.getComponent("ResponseEmployee");
  const Create = Digit?.ComponentRegistryService?.getComponent("BRCreate");


  return (
    <Switch>
      <React.Fragment>
        <div className="ground-container">
          <PrivateRoute path={`${path}/responseemp`} component={() => <ResponseEmployee />} />
          <PrivateRoute path={`${path}/birth`} component={Create} />
          <PrivateRoute path={`${path}/inbox`} component={(props) => <Inbox {...props} tenants={tenants} parentRoute={parentRoute} />} />
          <PrivateRoute path={`${path}/sample`} component={Sample} />
          <PrivateRoute path={`${path}/myapplication`} component={() => <BRManageApplication />} />
          <PrivateRoute path={`${path}/details/:id`} component={(props) => <RegisterDetails {...props} />} />
        </div>
      </React.Fragment>
    </Switch>
  );
};

export default EmployeeApp;
