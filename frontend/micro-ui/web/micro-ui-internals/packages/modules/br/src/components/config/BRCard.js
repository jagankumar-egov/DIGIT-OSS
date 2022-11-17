import { PersonIcon, EmployeeModuleCard } from "@egovernments/digit-ui-react-components";
import React from "react";
import { useTranslation } from "react-i18next";

const BRCard = () => {
  const ADMIN = Digit.Utils.hrmsAccess();
  if (!ADMIN) {
    return null;
  }
    const { t } = useTranslation();
    const tenantId = Digit.ULBService.getCurrentTenantId();
    const { isLoading, isError, error, data, ...rest } = Digit.Hooks.hrms.useHRMSCount(tenantId);

   
    const propsForModuleCard = {
        Icon : <PersonIcon/>,
        moduleName: t("BR_Birth Registration"),
        kpis: [
            {
                count:  isLoading ? "-" : data?.EmployeCount?.totalEmployee,
                label: t("BR_TOTAL Application"),
                link: `/digit-ui/employee/br/Inbox`
            },
         
        ],
        links: [
            {
                label: t("BR_Inbox"),
                link: `/digit-ui/employee/br/Inbox`
            },
            {
                label: t("BR_Create Birth-Registration"),
                link: `/digit-ui/employee/br/birth`
            }           
        ]
    }

    return <EmployeeModuleCard {...propsForModuleCard} />
};

export default BRCard;

