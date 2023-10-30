import { getTableSerialIndex } from 'helpers/common';
import { Link } from 'react-router-dom';
import { Badge, Button, ButtonGroup } from "reactstrap";

const userListColumns = (currentPage, pageSize, modal) => [
    {
        Header: "#",
        Cell: (row) => <p className="text-muted mb-0">{getTableSerialIndex(row, currentPage, pageSize)}</p>,
    },
    {
        Header: "Login ID",
        accessor: "uname",
        Cell: props => <p className="">{props.value}</p>
    },
    {
        Header: "First Name",
        accessor: "f_name",
        Cell: props => <p className="">{props.value}</p>
    },
    {
        Header: "Last Name",
        accessor: "l_name",
        Cell: props => <p className="">{props.value}</p>
    },
    {
        Header: "Email Address",
        accessor: "email_addess",
        Cell: props => <p className="">{props.value}</p>
    },
    {
        Header: "Role",
        accessor: "display_name",
        Cell: props => <p className="">{props.value}</p>
    },
    {
        Header: "Allowed Store",
        accessor: "group_name",
        Cell: props => <p className="">{props.value || 'All Stores'}</p>
    },
    {
        Header: "Status",
        accessor: "status",
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
            {
                {
                    1: <span>Active</span>,
                    0: <span>De-active</span>,
                }[props.value] || <span>Unknown</span>
            }
        </Badge>
    },
    {
        Header: "Action",
        accessor: "action",
        Cell: props => <div>
            <ButtonGroup>
                <Button
                    className="btn btn-xs btn-primary mr-1"
                    color=""
                    title="Details"
                    onClick={()=>modal(props.row.original, 'UserDetail')}
                >
                    <span className="align-middle d-flex align-items-center"><i className="glyph-icon simple-icon-eye"></i></span>
                </Button>
                <Link
                    to={'/app/my-users/update-user/' + props.row.original.uid}
                    className="btn btn-xs btn-info"
                    color=""
                    title="Update"
                >
                    <span className="align-middle d-flex align-items-center"><i className="glyph-icon simple-icon-note"></i></span>
                </Link>
            </ButtonGroup>
        </div>
    },
];

export default userListColumns;