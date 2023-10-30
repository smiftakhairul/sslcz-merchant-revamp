export const pnrFields = (data = null) => {
    return [
        {
            label: "Store ID",
            type: "text",
            name: "",
            id: "store_id",
            placeholder: "Enter Store Id",
            required: true,
            defaultValue: data?.strid,
            disabled: true,
            wrapperClass: 'col-md-12'
        },
        {
            label: "Transaction ID",
            type: "text",
            name: "trans_id",
            id: "trans_id",
            placeholder: "Enter transaction id",
            required: true,
            defaultValue: data?.mtxnid,
            disabled: true,
            wrapperClass: 'col-md-12'
        },
        {
            label: "Transaction Date",
            type: "text",
            name: "",
            id: "trans_date",
            placeholder: "Enter transaction date",
            required: true,
            defaultValue: data?.incommingtime,
            disabled: true,
            wrapperClass: 'col-md-12'
        },
        {
            label: "Transaction Amount",
            type: "text",
            name: "",
            id: "trans_amt",
            placeholder: "Enter transaction amount",
            required: true,
            defaultValue: data?.mamount,
            disabled: true,
            wrapperClass: 'col-md-12'
        },
        {
            label: "Remarks",
            type: "textarea",
            name: "ssl_request_remarks",
            id: "ssl_request_remarks",
            placeholder: "",
            required: true,
            height: 100,
            wrapperClass: 'col-md-12'
        }
    ]
}