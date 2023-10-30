import ReactButtonDropdown from 'components/bootstrap/custom-button-dropdown';
import { getTableSerialIndex } from 'helpers/common';
import { Badge, Button, ButtonGroup } from "reactstrap";

const fcommerceStoreListColumns = (currentPage, pageSize, modal) => [
    {
        Header: "#",
        Cell: (row) => <p className="text-muted mb-0">{getTableSerialIndex(row, currentPage, pageSize)}</p>,
    },
    {
        Header: "Store ID",
        accessor: "strid",
        Cell: props => <p className="">{props.value}</p>
    },
    {
        Header: "Store Name",
        accessor: "store_name",
        Cell: props => <p className="">{props.value}</p>
    },
    {
        Header: "Base URL",
        accessor: "store_url",
        Cell: props => <p className="">{props.value}</p>
    },
    {
        Header: "Group",
        accessor: "group_name",
        Cell: props => <p className="">{props.value}</p>
    },
    {
        Header: "Status",
        accessor: "store_status",
        Cell: props => <Badge className={`badge badge-${
            {
                "active": "success",
                "inactive": "danger",
            }[props.value] || "warning"
        } text-white`} color={
            {
                "active": "success",
                "inactive": "danger",
            }[props.value] || "warning"
        } pill>
            <span>
                {
                    {
                        "active": "Active",
                        "inactive": "Inactive",
                    }[props.value] || "Unknown"
                }
            </span>
        </Badge>
    },
    {
        Header: "Action",
        accessor: "action",
        Cell: (props) => (
            <div>
                <ButtonGroup>
                    <Button
                        className="btn btn-xs btn-primary mr-1"
                        title="Details"
                        color=""
                        onClick={() => modal(props.row.original, "StoreDetail")}
                    >
                        <span className="align-middle d-flex align-items-center"><i className="glyph-icon simple-icon-eye"></i></span>
                    </Button>
                    <ReactButtonDropdown
                        direction="left"
                        className="btn btn-info btn-xs align-middle d-flex align-items-center"
                        title={<i className="glyph-icon simple-icon-settings"></i>}
                        items={[
                            {title: "Site Settings", onClick: () => {modal(props.row.original, "SiteSettings")}, disabled: false},
                            {title: "Shipping Settings", onClick: () => {window.open()}, disabled: false},
                        ]}
                        // disableToggle={true}
                    />
                </ButtonGroup>
            </div>
        ),
    },
];

export default fcommerceStoreListColumns;