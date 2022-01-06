import { StatusTable, Row, PDFSvg, CardLabel } from "@egovernments/digit-ui-react-components";
import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";

const ScruntinyDetails = ({ scrutinyDetails }) => {
  const { t } = useTranslation();
  let count = 0;
  const getTextValues = (data) => {
    if (data?.value && data?.isTransLate) return <span style={{color: "#00703C"}}>{t(data?.value)}</span>;
    else if (data?.value && data?.isTransLate) return t(data?.value);
    else if (data?.value) return data?.value;
    else t("NA");
  }
  return (
    <Fragment>
      {!scrutinyDetails?.isChecklist && <div style={{ background: "#FAFAFA", border: "1px solid #D6D5D4", padding: "8px", borderRadius: "4px", maxWidth: "950px", minWidth: "280px" }}>
        <StatusTable>
          <div>
            {scrutinyDetails?.values?.map((value, index) => {
              return <Row className="border-none" textStyle={value?.value === "Paid"?{color:"darkgreen"}:{}} key={`${value.title}`} label={`${t(`${value.title}`)}`} text={getTextValues(value)} />
            })}
            {scrutinyDetails?.permit?.map((value,ind) => {
              return <CardLabel style={{fontWeight:"400"}}>{value?.title}</CardLabel>
            })}
          </div>
          <div>
            {scrutinyDetails?.scruntinyDetails?.map((report, index) => {
              return (
                <Fragment>
                  <Row className="border-none" label={`${t(report?.title)}`} />
                  <a href={report?.value}> <PDFSvg /> </a>
                  <p style={{ margin: "8px 0px", fontWeight: "bold", fontSize: "16px", lineHeight: "19px", color: "#505A5F" }}>{t(report?.text)}</p>
                </Fragment>
              )
            })}
          </div>
        </StatusTable>
      </div>}
    </Fragment>
  )
}

export default ScruntinyDetails;