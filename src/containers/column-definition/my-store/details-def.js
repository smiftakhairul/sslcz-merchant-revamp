import ReactButtonDropdown from "components/bootstrap/custom-button-dropdown";
import { NotificationManager } from "components/notifications";
import { storeFilteredPaymentType } from "constants/default-values";
import { getTableSerialIndex } from "helpers/common";
import { ButtonGroup } from "reactstrap";

const storeListColumns = (currentPage, pageSize, modal) => [
  {
    Header: "#",
    Cell: (row) => <p className="text-muted mb-0">{getTableSerialIndex(row, currentPage, pageSize)}</p>,
  },
  {
    Header: "Store ID",
    accessor: "strid",
    Cell: (props) => <p className="">{props.value}</p>,
  },
  {
    Header: "Store Name",
    accessor: "store_name",
    Cell: (props) => <p className="">{props.value}</p>,
  },
  {
    Header: "Base URL",
    accessor: "store_url",
    Cell: (props) => <p className="">{props.value}</p>,
  },
  {
    Header: "Group",
    accessor: "group_name",
    Cell: (props) => <p className="">{props.value}</p>,
  },

  {
    Header: "Status",
    accessor: "store_status",
    Cell: (props) => <p className="">{props.value}</p>,
  },
  // {
  //   Header: "Gateway Charge",
  //   accessor: "ffff",
  //   Cell: (props) => (
  //     <Button
  //       className="btn btn-xs btn-primary"
  //       color=""
  //       title="Details"
  //       // onClick={()=>modal(props.row.original)}
  //     >
  //       <span className="align-middle d-flex align-items-center"><i className="glyph-icon simple-icon-eye"></i></span>
  //     </Button>
  //   ),
  // },
  // {
  //   Header: "Settlement Bank",
  //   accessor: "dddd",
  //   Cell: (props) => (
  //     <Button
  //       className="btn btn-xs btn-primary"
  //       color=""
  //       title="Details"
  //       // onClick={()=>modal(props.row.original)}
  //     >
  //       <span className="align-middle d-flex align-items-center"><i className="glyph-icon simple-icon-eye"></i></span>
  //     </Button>
  //   ),
  // },
  // {
  //   Header: "View",
  //   accessor: "ssss",
  //   Cell: (props) => (
  //     <Button
  //       className="btn btn-xs btn-primary"
  //       color=""
  //       onClick={() => modal(props.row.original, "StoreDetail")}
  //     >
  //       Details
  //     </Button>
  //   ),
  // },
  {
    Header: "Action",
    accessor: "action",
    Cell: (props) => (
      <div>
        <ButtonGroup>
          <ReactButtonDropdown
            className="btn btn-primary btn-xs align-middle d-flex align-items-center mr-1"
            title={<i className="glyph-icon simple-icon-eye"></i>}
            items={[
              {title: "Store Details", onClick: () => {modal(props.row.original, "StoreDetail")}, disabled: false},
              {title: "Settlement Bank Details", onClick: () => {modal(props.row.original, "SettlementBankDetail")}, disabled: false},
            ]}
            // disableToggle={true}
          />
          <ReactButtonDropdown
            direction="left"
            className="btn btn-info btn-xs align-middle d-flex align-items-center"
            title={<i className="glyph-icon simple-icon-settings"></i>}
            items={[
              {title: "Set Group", onClick: () => {modal(props.row.original, "SetStoreGroup")}, disabled: false},
              {title: "Store Discounts", onClick: () => {window.open(`/app/my-store/discounts/${props.row.original.stid}`, "_blank")}, disabled: false},
              {title: "Manage QR", onClick: () => {window.open(`/app/my-store/subscription/${props.row.original.stid}`, "_blank")}, disabled: false},
              {title: "Manage Terminal", onClick: () => {storeFilteredPaymentType.includes(props.row.original.pmt_type) ? window.open(`/app/my-store/terminal/${props.row.original.stid}`, "_blank") : NotificationManager.error("Invalid store payment type!Sorry, Your account is not configured for using Terminal. Please contact system administrator to enable this feature.","Error!")}, disabled: false},
              {title: "Store Daily Balance", onClick: () => {storeFilteredPaymentType.includes(props.row.original.pmt_type) ? window.open(`/app/my-store/store-daily-balance/${props.row.original.strid}`, "_blank") : NotificationManager.error("Invalid store payment type! Sorry, Your account is not configured for using store daily balance. Please contact system administrator to enable this feature.","Error!")}, disabled: false},
              {title: "Balance Transfer", onClick: () => {modal(props.row.original, "BalanceTransfer")}, disabled: true},
              {title: "Manage Settlement", onClick: () => {storeFilteredPaymentType.includes(props.row.original.pmt_type) ? window.open(`/app/my-store/manage-settlement/${props.row.original.stid}`, "_blank") : NotificationManager.error("Invalid store payment type! Sorry, Your account is not configured for using settlement. Please contact system administrator to enable this feature.","Error!")}, disabled: false},
              {title: "IPN Settings", onClick: () => {modal(props.row.original, "SetIPNSettings")}, disabled: false},
              {title: "GW Settings", onClick: () => {modal(props.row.original, "SetGWSettings")}, disabled: false},
              {title: "Site Settings", onClick: () => {modal(props.row.original, "SiteSettings")}, disabled: true},
              {title: "Shipping Settings", onClick: () => {modal(props.row.original, "ShippingSettings")}, disabled: true},
              {title: "EMI Settings", onClick: () => {window.open(`/app/my-store/emi-settings/${props.row.original.stid}`, "_blank")}, disabled: false},
            ]}
            // disableToggle={true}
          />
        </ButtonGroup>
      </div>
    ),
  },
];

export default storeListColumns;
