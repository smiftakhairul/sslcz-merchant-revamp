import { getTableSerialIndex } from 'helpers/common';
import { Badge, Button, ButtonGroup } from "reactstrap";

const fcommerceBrandListColumns = (currentPage, pageSize, modal) => [
    {
        Header: "#",
        Cell: (row) => <p className="text-muted mb-0">{getTableSerialIndex(row, currentPage, pageSize)}</p>,
    },
    {
        Header: "Name",
        accessor: "brand_name",
        Cell: props => <p className="">{props.value}</p>
    },
    {
        Header: "Code",
        accessor: "brand_code",
        Cell: props => <p className="">{props.value}</p>
    },
    {
        Header: "UID",
        accessor: "brand_uid",
        Cell: props => <p className="">{props.value}</p>
    },
    {
        Header: "Slug",
        accessor: "brand_slug",
        Cell: props => <p className="">{props.value}</p>
    },
    {
        Header: "Status",
        accessor: "is_active",
        Cell: props => <Badge className={`badge badge-${
            {
                1: "success",
                0: "danger",
            }[props.value] || "warning"
        } text-white`} color={
            {
                1: "success",
                0: "danger",
            }[props.value] || "warning"
        } pill>
            <span>
                {
                    {
                        1: "Active",
                        0: "Inactive",
                    }[props.value] || "Unknown"
                }
            </span>
        </Badge>
    },
    {
        Header: "Action",
        accessor: "action",
        Cell: props => <div>
            <ButtonGroup>
                <Button
                    className="btn btn-xs btn-info"
                    color=""
                    title="Update"
                    onClick={()=>modal(props.row.original, 'UpdateBrand')}
                >
                    <span className="align-middle d-flex align-items-center"><i className="glyph-icon simple-icon-note"></i></span>
                </Button>
            </ButtonGroup>
        </div>
    },
];

export default fcommerceBrandListColumns;