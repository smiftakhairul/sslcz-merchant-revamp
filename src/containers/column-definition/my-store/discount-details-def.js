import {
    getTableSerialIndex
} from "helpers/common";
import React from "react";
import { Badge, Button } from "reactstrap";

const storeDiscountListColumns = (currentPage, pageSize, modal) => [
  {
    Header: "#",
    Cell: (row) => (
      <p className="text-muted mb-0">
        {getTableSerialIndex(row, currentPage, pageSize)}
      </p>
    ),
  },
  {
    Header: "Offer Name",
    accessor: "offer_name",
    Cell: (props) => <p className="">{props.value}</p>,
  },
  {
    Header: "Store Info",
    accessor: "strid",
    Cell: (props) => <p className="">{props.value} - {props.row.original.store_name}</p>,
  },
  {
    Header: "Offer Details",
    accessor: "offer_details_custom",
    Cell: (props) => (
        <Button
          className="btn btn-xs btn-primary"
          title="Details"
          color=""
          onClick={() => modal(props.row.original, "OfferDetail")}
        >
          <span className="align-middle d-flex align-items-center"><i className="glyph-icon simple-icon-eye"></i></span>
        </Button>
    ),
  },
  {
    Header: "Discount Details",
    accessor: "discount_details_custom",
    Cell: (props) => (
        <Button
          className="btn btn-xs btn-primary"
          title="Details"
          color=""
          onClick={() => modal(props.row.original, "DiscountDetail")}
        >
          <span className="align-middle d-flex align-items-center"><i className="glyph-icon simple-icon-eye"></i></span>
        </Button>
    ),
  },
  {
    Header: "Card Details",
    accessor: "card_details_custom",
    Cell: (props) => (
        <Button
          className="btn btn-xs btn-primary"
          title="Details"
          color=""
          onClick={() => modal(props.row.original, "CardDetail")}
        >
          <span className="align-middle d-flex align-items-center"><i className="glyph-icon simple-icon-eye"></i></span>
        </Button>
    ),
  },
  {
    Header: "Acquirer Bank",
    accessor: "offer_image_path",
    Cell: (props) => (
        <Button
          className="btn btn-xs btn-secondary"
          title="View Offer Logo"
          color=""
          disabled={!props.value}
          onClick={() => {window.open("https://securepay.sslcommerz.com/stores/offers/" + props.value, "_blank");}}
        >
          <span className="align-middle d-flex align-items-center"><i className="glyph-icon simple-icon-eye"></i></span>
        </Button>
    ),
  },
  {
    Header: "Status",
    accessor: "status",
    Cell: (props) => (
      <React.Fragment>
        <Badge
          className={`badge badge-${parseInt(props.value || 0) && props.row.original?.OfferInRunning === 'Running' ? 'success' : 'danger'} text-white`}
          color={parseInt(props.value || 0) && props.row.original?.OfferInRunning === 'Running' ? 'success' : 'danger'}
          pill
        >
          {parseInt(props.value || 0) && props.row.original?.OfferInRunning === 'Running' ? 'Running' : 'End'}
        </Badge>
      </React.Fragment>
    ),
  },
  {
    Header: "Action",
    accessor: "action_custom",
    Cell: (props) => (
        <Button
          className="btn btn-xs btn-primary"
          title="Edit Discount"
          color=""
          onClick={() => modal(props.row.original, "EditDiscount")}
        >
          <span className="align-middle d-flex align-items-center"><i className="glyph-icon simple-icon-note"></i></span>
        </Button>
    ),
  },
];

export default storeDiscountListColumns;
