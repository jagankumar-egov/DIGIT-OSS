import { CitizenHomeCard, PTIcon } from "@egovernments/digit-ui-react-components";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useRouteMatch } from "react-router-dom";
import CitizenApp from "./pages/citizen";
import Create from "./pages/citizen/create/index";



export const FSModule = ({ stateCode, userType, tenants }) => {
    const { path, url } = useRouteMatch();

    const moduleCode = "FS";
    const language = Digit.StoreData.getCurrentLanguage();
    const { isLoading, data: store } = Digit.Services.useStore({ stateCode, moduleCode, language });

    if (userType === "citizen") {
        return <CitizenApp path={path} stateCode={stateCode} />;
    }

    return null;
};

export const FSLinks = ({ matchPath, userType }) => {
    const { t } = useTranslation();
    const links = [
        {
            link: `${matchPath}/birth`,
            i18nKey: t("Create FarmerSurvey"),
        },
    ];

    return <CitizenHomeCard header={t("FarmerSurvey")} links={links} Icon={() => <PTIcon className="fill-path-primary-main" />} />;
};
const componentsToRegister = {
    Response,
    FSCreate: Create,
    FSModule
};
export const initFSComponents = () => {
    Object.entries(componentsToRegister).forEach(([key, value]) => {
        Digit.ComponentRegistryService.setComponent(key, value);
    });
};

