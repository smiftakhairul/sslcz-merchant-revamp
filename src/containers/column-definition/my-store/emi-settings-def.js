import FormGroupField from "components/bootstrap/custom-form-groups";
import { getParseFloat } from "helpers/common";
import React from "react";

const emiSettingsColumns = [
    // {
    //     Header: "#",
    //     Cell: (row) => <p className="text-muted mb-0">{Number(row.row.id) + 1}</p>,
    // },
    {
        Header: 'Tenure',
        accessor: 'tenure',
        Cell: (props) => <p className="">{props.value}</p>
    },
    {
        Header: 'EMI Charge',
        accessor: 'percentage',
        Cell: (props) => <p className="">{getParseFloat(props.value || 0, 3)}%</p>
    },
    {
        Header: 'Status',
        accessor: 'status',
        Cell: (props) => <React.Fragment>
            <FormGroupField
                checkboxLabel=""
                type="checkbox"
                id={"bank_emi_status-" + props.row.original.index}
                name={"bank_emi_status[" + props.row.original?.bank_id + "*" + props.row.original?.tenure + "]"}
                placeholder="Checkbox"
                defaultValue={props.row.original.status_checked || false}
                required={false}
            />
        </React.Fragment>
    },
];

export default emiSettingsColumns;