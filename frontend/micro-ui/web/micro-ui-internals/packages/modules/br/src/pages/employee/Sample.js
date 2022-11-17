import {  Loader,FormComposer } from "@egovernments/digit-ui-react-components";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";


export const newConfig = [
  {
    head: "Config Header",
    subHead: "Config Sub Head",
    body: [
      {
        inline:true,
        label: "Enter Sample text 1",
        isMandatory: false,
        key: "BrSelectFather",
        type: "text",
        disable: false,
        populators: { name: "sampletext1", error: "Required", validation: { pattern: /^[A-Za-z]+$/i } },
      },   {
        inline:true,
        label: "Enter Sample text 333",
        isMandatory: true,
        key: "BrSelectFather",
        type: "text",
        disable: false,
        populators: { name: "sampletext333", error: "Required", validation: { pattern: /^[A-Za-z]+$/i } },
      },
      { inline:true,
        label: "Enter Sample text 2",
        isMandatory: false,
        description: "Field supporting description",
        key: "BrSelectFather",
        type: "text",
        disable: false,
        populators: { name: "sampletext2", error: "Required", validation: { pattern: /^[A-Za-z]+$/i } },
      },
      {
        label: "Enter Sample phone number",
        isMandatory: true,
        key: "BrSelectFather",
        type: "number",
        disable: false,
        populators: { name: "samplenum1", error: "sample error message", validation: { min: 5999999999, max: 9999999999 } },
      },
      {
        label: "Enter Sample phone number 2",
        isMandatory: true,
        key: "BrSelectFather",
        type: "mobileNumber",
        disable: false,
        populators: { name: "samplenum2", error: "sample error message", validation: { min: 5999999999, max: 9999999999 } },
      },
      
    ],
  },
  {
    head: "Config Header 2",
    body: [
      {
        label: "Enter text 2",
        isMandatory: true,
        description: "Field supporting description",
        key: "BrSelectFather",
        type: "text",
        disable: false,
        populators: { name: "sampletext3", error: "sample error message", validation: { pattern: /^[A-Za-z]+$/i } },
      },
      {
        component: "BRSelectGender",
        withoutLabel: true,
        key: "BRSelectGender",
        type: "component",
        populators: { name: "genders",}
      },
    ],
  },
];

const Create = () => {
  const tenantId = Digit.ULBService.getCurrentTenantId();
  const { t } = useTranslation();
  const history = useHistory();

  const onSubmit = (data) => {
    console.log(data, "data");
  };

  /* use newConfig instead of commonFields for local development in case needed */

  const configs = newConfig ? newConfig : newConfig;

  return (
    <FormComposer
      heading={t("Config Application Heading")}
      label={t("Submit Bar")}
      description={"Sample Description"}
      text={"Sample Text"}
      config={configs.map((config) => {
        return {
          ...config,
          body: config.body.filter((a) => !a.hideInEmployee),
        };
      })}
      defaultValues={{}}
      onSubmit={onSubmit}
      fieldStyle={{ marginRight: 0 }}
    />
  );
};

export default Create;
