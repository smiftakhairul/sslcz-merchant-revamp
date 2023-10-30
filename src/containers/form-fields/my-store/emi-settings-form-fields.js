const emiStatusOptions = [
    {label: "Disable", value: 0},
    {label: "Enable (EMI with parameters)", value: 1},
    {label: "AUTO EMI (EMI with specific amount & charges will bear by MERCHANT)", value: 3},
    {label: "Global EMI (EMI with specific amount & charges will bear by CUSTOMER/USER)", value: 4},
];


export const emiFields = (store = null) => {
    return [
        {
            label: "EMI Status",
            infoText: 
                <>
                    <ul className = "bg-info text-white py-2 pr-2 pl-4">
                        <li><b>EMI with parameters</b>: This is product Specific EMI configuration. Here, merchant needs to configure EMI parameters at their end. SSL will receive EMI command through these parameters. This way, merchant can provide EMI facility on selective products.</li>
                        <li><b>AUTO EMI (EMI with specific amount & charges will bear by MERCHANT) - EMI with specific amount</b>: This is value specific EMI configuration. Merchant will set a minimum EMI purchase amount. If the minimum purchase amount passes through SSL COMMERZ gateway then customer will find Pay with EMI option in SSL COMMERZ payment page.</li>
                        <li><b>Global EMI (EMI with specific amount & charges will bear by CUSTOMER/USER) - EMI with surcharge</b>: In this model, merchant surcharges customer for EMI payment. Customer will find EMI payment option in SSL COMMERZ payment page. Upon selecting the EMI tenures, EMI charge will be added to the product/service price. This is applicable on all product purchase.</li>
                    </ul>
                </>,
            
            type: "select",
            id: "emi_status",
            name: "emi_status",
            placeholder: "Select status",
            options: emiStatusOptions || [],
            defaultValue: store?.emi_status || '',
            required: true,
            wrapperClass: 'col-md-6'
        },
        {
            label: "Auto EMI Started Amount",
            infoText: 
                <div className = "bg-info text-white p-2">
                    Applicable for only for "EMI with specific amount" and "EMI with surcharge"
                </div>,
            type: "number",
            id: "emi_amount",
            name: "emi_amount",
            placeholder: "EMI amount",
            defaultValue: store?.emi_issuer_bk || '',
            required: true,
            wrapperClass: 'col-md-6'
        },
        {
            label: 'Agreement',
            checkboxLabel: <span>I have agreed with the <a className="text-primary" href="#." onClick={(e) => e.preventDefault()}>terms and conditions</a> to enable the EMI service with SSLCOMMERZ.</span>,
            type: "checkbox",
            id: "agree_emi",
            name: "agree_emi",
            placeholder: "Agree",
            defaultValue: store?.emi_status || false,
            required: true,
            wrapperClass: 'col-md-12'
        }
    ]
}