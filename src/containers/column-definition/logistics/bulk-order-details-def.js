import { getTableSerialIndex } from 'helpers/common';
import { Link } from 'react-router-dom';
import { Badge, Button, ButtonGroup } from "reactstrap";
import moment from "moment";

const bulkOrderDetailsListColumns = (currentPage, pageSize) => [
    {
        Header: "#",
        Cell: (row) => <p className="text-muted mb-0">{getTableSerialIndex(row, currentPage, pageSize)}</p>,
    },
    {
        Header: "DateTime",
        accessor: "created_at",
        Cell: (props) => (
          <p className="">
            {props.value
              ? moment(props.value, "YYYY-MM-DD hh:mm:ss")
                  .format("DD-MM-YYYY hh:mm A")
                  .toString()
              : ""}
          </p>
        ),
      },
    {
        Header: "Status",
        accessor: "action_status",
        Cell: props => <Badge className={`badge badge-${
            {
                success: "success",
                failed: "danger",
            }[props.value] || "warning"
        } text-white`} color={
            {
                success: "success",
                failed: "danger",
            }[props.value] || "warning"
        } pill>
            {
                {
                    success: <span>Success</span>,
                    failed: <span>Failed</span>,
                }[props.value] || <span>Unknown</span>
            }
        </Badge>
    },
    {
        Header: "Failed Reason",
        accessor: "failed_reason",
        Cell: props => <p className="">{props.value || 'N\/A'}</p>
    },
    {
        Header: "Store",
        accessor: "store",
        Cell: props => <p className="">{props.row.original?.details?.merchant_shop_id}</p>
    },
    {
        Header: "Partner",
        accessor: "partner",
        Cell: props => <p className="">{props.row.original?.details?.partner_name}</p>
    },
    {
        Header: "IDS",
        accessor: "ids",
        Cell: props => 
        <>
            <p className="mb-0">
                <span className='font-weight-bold'>Consignment ID:</span> {props.row.original?.details?.consignment_id || 'N\/A'}
            </p>
            <p className="mb-0">
                <span className='font-weight-bold'>Payment Gateway TXN ID:</span> {props.row.original?.details?.pgw_txn_id || 'N\/A'}
            </p>
            <p className="mb-0">
                <span className='font-weight-bold'>Merchant Order ID:</span> {props.row.original?.details?.merchant_order_id || 'N\/A'}
            </p>
            <p className="mb-0">
                <span className='font-weight-bold'>Pickup Store ID:</span> {props.row.original?.details?.pickup_store_id || 'N\/A'}
            </p>
        </>
    },
    {
        Header: "Recipient Details",
        accessor: "recipient_details",
        Cell: props =>
        <>
            <p className="mb-0">
                <span className='font-weight-bold'>Name:</span> {props.row.original?.details?.recipient_name || 'N\/A'}
            </p>
            <p className="mb-0">
                <span className='font-weight-bold'>Mobile:</span> {props.row.original?.details?.recipient_mobile || 'N\/A'}
            </p>
            <p className="mb-0">
                <span className='font-weight-bold'>District:</span> {props.row.original?.details?.recipient_district || 'N\/A'}
            </p>
            <p className="mb-0">
                <span className='font-weight-bold'>Thana:</span> {props.row.original?.details?.recipient_thana || 'N\/A'}
            </p>
            <p className="mb-0">
                <span className='font-weight-bold'>Postcode:</span> {props.row.original?.details?.recipient_postcode || 'N\/A'}
            </p>
            <p className="mb-0">
                <span className='font-weight-bold'>Area:</span> {props.row.original?.details?.recipient_area || 'N\/A'}
            </p>
            <p className="mb-0">
                <span className='font-weight-bold'>Address:</span> {props.row.original?.details?.recipient_address || 'N\/A'}
            </p>
        </>
    },
    {
        Header: "Parcel Details",
        accessor: "parcel_details",
        Cell: props => 
        <>
            <p className="mb-0">
                <span className='font-weight-bold'>Delivery Type:</span> {props.row.original?.details?.delivery_type || 'N\/A'}
            </p>
            <p className="mb-0">
                <span className='font-weight-bold'>Parcel Type:</span> {props.row.original?.details?.parcel_type || 'N\/A'}
            </p>
            <p className="mb-0">
                <span className='font-weight-bold'>Quantity:</span> {props.row.original?.details?.parcel_quantity || 'N\/A'}
            </p>
            <p className="mb-0">
                <span className='font-weight-bold'>Weight:</span> {props.row.original?.details?.parcel_weight || 'N\/A'}
            </p>
            <p className="mb-0">
                <span className='font-weight-bold'>Amount:</span> {props.row.original?.details?.parcel_amount || 'N\/A'}
            </p>
            <p className="mb-0">
                <span className='font-weight-bold'>Description:</span> {props.row.original?.details?.parcel_description || 'N\/A'}
            </p>
            <p className="mb-0">
                <span className='font-weight-bold'>Payment Method:</span> {props.row.original?.details?.payment_method || 'N\/A'}
            </p>
            <p className="mb-0">
                <span className='font-weight-bold'>Delivery Instructions:</span> {props.row.original?.details?.delivery_instructions || 'N\/A'}
            </p>
        </>
    },
    // {
    //     Header: "Action",
    //     accessor: "action",
    //     Cell: props => <div>
    //         <ButtonGroup>
    //             <Button
    //                 className="btn btn-xs btn-primary"
    //                 color=""
    //                 title="Details"
    //                 onClick={()=>window.open(`/app/logistics/bulk-order-details/${props.row.original.bulk_id}/list`, "_blank")}
    //             >
    //                 <span className="align-middle d-flex align-items-center"><i className="glyph-icon simple-icon-eye"></i></span>
    //             </Button>
    //         </ButtonGroup>
    //     </div>
    // },
];

export default bulkOrderDetailsListColumns;