export const refundInitiationFields = () => {
    return [
        {
            label: "Merchant Ref. Code",
            type: "text",
            id: "merchant_ref_id",
            name: "merchant_ref_id",
            placeholder: "Merchant reference code",
            // defaultValue: {transaction?.merchant_ref_id || ''}
            required: true,
            wrapperClass: 'col-md-6'
        },
        {
            label: "Refund Amount",
            type: "number",
            id: "refund_amt",
            name: "refund_amt",
            placeholder: "Refund amount",
            // defaultValue: {transaction?.refund_amt || ''}
            required: true,
            wrapperClass: 'col-md-6'
        },
        {
            label: "Description",
            type: "textarea",
            id: "request_remarks",
            name: "request_remarks",
            placeholder: "Refund description",
            // defaultValue: {transaction?.request_remarks || ''}
            required: true,
            height: 100,
            wrapperClass: 'col-md-12'
        }
    ]
}