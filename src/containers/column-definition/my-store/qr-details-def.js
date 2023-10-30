import ReactButtonDropdown from "components/bootstrap/custom-button-dropdown";
import { invBaseUrl } from "constants/default-values";
import { getTableSerialIndex } from "helpers/common";
import moment from "moment";
import { Link } from "react-router-dom";
import { ButtonGroup } from "reactstrap";

const qrListColumns = (currentPage, pageSize, modal) => [
  {
    Header: "#",
    Cell: (row) => <p className="text-muted mb-0">{getTableSerialIndex(row, currentPage, pageSize)}</p>,
  },
  {
    Header: "Payment Name",
    accessor: "subscription_name",
    Cell: (props) => (
      <p className="">
        {props.value}
      </p>
    ),
  },
  {
    Header: "Refer Id",
    accessor: "refe_id",
    Cell: (props) => (
      <p className="">
        {props.value}
      </p>
    ),
  },
  {
    Header: "Pay Type",
    accessor: "subscription_type",
    Cell: (props) => (
      <p className="">
        {{
            'once': <span>Payment Link</span>,
            'subscribe': <span>Recurring/Subscription</span>,
            'invoice': <span>Invoice - Generete Invoice Link to Collect Fixed Amount</span>
        }[props.value] || ''}
      </p>
    ),
  },
  {
    Header: "Created On",
    accessor: "created_on",
    Cell: (props) => <p className="">{props.value?moment(props.value,"YYYY-MM-DD HH:mm:ss").format("YYYY-MM-DD HH:mm:ss"):''}</p>,
  },
  {
    Header: "Action",
    accessor: "Action",
    Cell: (props) => {
      return (
        <div>
        <ButtonGroup>
          <ReactButtonDropdown
            className="btn btn-primary btn-xs align-middle d-flex align-items-center mr-1"
            title={<i className="glyph-icon simple-icon-eye"></i>}
            items={[
              {title: "Pay Url", onClick: () => {window.open(`${invBaseUrl}/invoice-form?&refer=${props.row.original.refe_id}`, "_blank")}, disabled: false},
              {title: "Get QR, Button & Other Details", onClick: () => {modal(props.row.original, "GetQrDetails")}, disabled: false},
            ]}
            // disableToggle={true}
          />
          <Link
            to={`/app/my-store/update-subscription/${props.row.original.id}`}
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

export default qrListColumns;
