import { NOCService } from "../../elements/NOC";
import { OBPSService } from "../../elements/OBPS";

export const NOCSearch = {
  all: async (tenantId, filters = {}) => {
    const response = await NOCService.NOCsearch({ tenantId, filters });
    return response;
  },
  application: async (tenantId, filters = {}) => {
    const response = await NOCService.NOCsearch({ tenantId, filters });
    return response.Noc[0];
  },

  numberOfApplications: async (tenantId, filters = {}) => {
    const response = await NOCService.NOCsearch({ tenantId, filters });
    return response.Noc;
  },

  scrutinyDetails: async (tenantId, params, data) => {
    const response = await OBPSService.scrutinyDetails(tenantId, params, data);
    return response?.edcrDetail?.[0];
  },

  BPADetails: async (tenantId, params) => {
    const response = await OBPSService.BPASearch(tenantId, params);
    return response?.BPA;
  },

  applicationDetails: async (t, tenantId, applicationNumber, userType) => {
    const filter = applicationNumber;
    const response = await NOCSearch.application(tenantId, filter);

    let bpaResponse = [];
    if (response?.sourceRefId) {
      const bpaFilter = { applicationNo: response?.sourceRefId }
      bpaResponse = await NOCSearch.BPADetails(tenantId, bpaFilter);
    }

    let edcrResponse = {};
    if (bpaResponse?.[0]?.edcrNumber) {
      const bpaFilter = { edcrNumber: bpaResponse?.[0]?.edcrNumber }
      edcrResponse = await NOCSearch.scrutinyDetails(tenantId, bpaFilter);
    }

    let employeeResponse = [];
    const buildingDetails = {
      title: "NOC_BULDING_DETAILS_LABEL",
      asSectionHeader: true,
      values: [
        { title: "NOC_APP_NO_LABEL", value: bpaResponse?.[0]?.applicationNo || "NA" },
        { title: "NOC_MODULE_SOURCE_LABEL", value: t(response?.source) || "NA" },
        { title: "NOC_APPLICATION_TYPE_LABEL", value: t(edcrResponse?.appliactionType) || "NA" },
        { title: "NOC_SERVICE_TYPE_LABEL", value: t(edcrResponse?.applicationSubType) || "NA" }
      ]
    };

    response && employeeResponse.push(buildingDetails);

    return {
      tenantId: response.tenantId,
      applicationDetails: employeeResponse,
      additionalDetails: response?.additionalDetails,
      applicationData: response
    };
  },
};