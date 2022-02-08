import SelectTradeLicenceCustomization from "./TL/selectTrade";
import SelectOccupanCyType from "./TL/SelectOccupancyType";
// import SelectProofIdentity from "./TL/proof";
import SelectOwnerShipDetails from "./TL/SelectOwnerShipDetails";
//import CreateEmployee from "./HRMS/CreateEmployee";
import SelectOwnerDetails from "./TL/SelectOwnerDetails";
import TlAcknowledgement from "./TL/TlAcknowledgement";
import TLGSTNumber from "./TL/TLGSTNumber"
import SelectTradeUnits from "./TL/SelectTradeUnits";
import TLCheckPage from "./TL/TLCheckPage"
import TLNoOfEmployees from "./TL/TLNoOfEmployees";
import TLOperationalArea from "./TL/TLOperationalArea";
import ApplicationDetails from "./TL/ApplicationDetails"
import TLTradeUnitsEmployee from "./TL/TLTradeUnitsEmployee"
import TLDocumentsEmployee from "./TL/TLDocumentsEmployee"
import CreateChallen from "./mCollect/CreateChallen"
import TLRenewTrade from "./TL/RenewTrade";
import TLLinks from "./TL/TLCard";

export const customizations = [
  SelectTradeLicenceCustomization,
  SelectOccupanCyType,
  SelectOwnerShipDetails,
  SelectOwnerDetails,
  TlAcknowledgement,
  TLGSTNumber,
  SelectTradeUnits,
  TLCheckPage,
  TLOperationalArea,
  TLNoOfEmployees,
  ApplicationDetails,
  TLTradeUnitsEmployee,
  TLDocumentsEmployee,
  CreateChallen,
  TLRenewTrade,
  TLLinks
];
