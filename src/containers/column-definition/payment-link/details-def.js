import { getParseFloat, getTableSerialIndex } from "helpers/common";
import moment from "moment";
import { Link } from "react-router-dom";
import { Badge, Button, ButtonGroup } from "reactstrap";

const paymentLinkListColumns = (currentPage, pageSize, modal) => [
  {
    Header: "#",
    Cell: (row) => <p className="text-muted mb-0">{getTableSerialIndex(row, currentPage, pageSize)}</p>,
  },
  {
    Header: "Primary Information",
    accessor: "refe_id",
    Cell: (props) => {
      return (
        <div>
          <h6 className="text-primary">{props.value}</h6>
          <p className="mb-0">
            Created On:{" "}
            <span className="font-weight-bold">
              {props.row.original?.created_on
                ? moment(props.row.original?.created_on, "YYYY-MM-DD hh:mm:ss")
                    .format("DD-MM-YYYY hh:mm A")
                    .toString()
                : ""}
            </span>
          </p>
          <p className="mb-0">
            SMS IPN: <span className="font-weight-bold">{props.row.original?.sms_ipn}</span>
          </p>
        </div>
      );
    },
  },
  {
    Header: "Amount",
    accessor: "amount",
    Cell: (props) => (
      <p className="">
        {getParseFloat(props.value || 0)}
      </p>
    ),
  },
  {
    Header: "Status",
    accessor: "is_active",
    Cell: (props) => {
      return (
        <div>
          <Badge
            className={`badge badge-${
              {
                1: "success",
                0: "danger",
              }[props.value] || "danger"
            }`}
            color={
              {
                1: "success",
                0: "danger",
              }[props.value] || "danger"
            }
            pill
          >
            {{
              1: "Active",
              0: "Inactive",
            }[props.value] || "Unknown"}
          </Badge>
        </div>
      );
    },
  },
  {
    Header: "Action",
    accessor: "Action",
    Cell: (props) => {
      return (
        <div>
          <ButtonGroup>
          <Button
            className="btn btn-xs btn-primary mr-1"
            color=""
            title="Details"
            onClick={() => modal(props.row.original, "PaymentLinkDetail")}
          >
            <span className="align-middle d-flex align-items-center"><i className="glyph-icon simple-icon-eye"></i></span>
          </Button>
          <Link
            to={"/app/payment/update-link/" + props.row.original.id}
            className="btn btn-xs btn-info"
            color=""
            title="Update"
          >
            <span className="align-middle d-flex align-items-center"><i className="glyph-icon simple-icon-note"></i></span>
          </Link>
          </ButtonGroup>
        </div>
      );
    },
  },
];

export default paymentLinkListColumns;
