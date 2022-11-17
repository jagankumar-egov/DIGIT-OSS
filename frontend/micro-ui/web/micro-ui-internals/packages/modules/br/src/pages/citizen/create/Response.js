import { ActionBar, Banner, Card, CardText, Loader, SubmitBar,  Header} from "@egovernments/digit-ui-react-components";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Response = (props) => {
  const { t } = useTranslation();
  return (
    <Card>
      <CardText>
      <Header>{t("BR_Birth_Registration_Success_Thank_You")}</Header>
      </CardText>
      <Banner></Banner>
      <ActionBar>
        <Link to={"/digit-ui/citizen"}>
          <SubmitBar label="GO TO HOME" />
        </Link>
      </ActionBar>
    </Card>
  );
};

export default Response;
