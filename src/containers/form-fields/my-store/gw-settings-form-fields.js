import { rgbToHex } from "helpers/utils";

const payGroupOptions = [
    { label: "Cards Payment", value: "card" },
    { label: "Internet Banking", value: "ib" },
    { label: "Mobile Banking", value: "mb" },
];

const chargePaidByCustomersOptions = [
    { label: "Disabled", value: 0 },
    { label: "Enabled - Paid by Cardholder/ Account holder", value: 1 },
];

export const gatewayColorFields = (data = null) => {
    return [
        {
            label: "Primary Color (Web)",
            type: "color",
            id: "color_1_bk",
            name: "color_1_bk",
            defaultValue: rgbToHex(`rgb(${data?.gateway_setting?.color_1_bk})`) || "#0596d3",
            wrapperClass: 'col-md-6'        
        },
        {
            label: "Active Color (Web)",
            type: "color",
            id: "color_1_ft",
            name: "color_1_ft",
            defaultValue: rgbToHex(`rgb(${data?.gateway_setting?.color_1_ft})`) || "#0596d3",
            wrapperClass: 'col-md-6'        
        },
        {
            label: "Primary Color (App SDK)",
            type: "color",
            id: "color_2_bk",
            name: "color_2_bk",
            defaultValue: data?.gateway_setting?.color_2_bk
                        ? `#${data?.gateway_setting?.color_2_bk}`
                        : "#0596d3",
            wrapperClass: 'col-md-6'        
        },
        {
            label: "Active Color (App SDK)",
            type: "color",
            id: "color_2_ft",
            name: "color_2_ft",
            defaultValue: data?.gateway_setting?.color_2_ft
                        ? `#${data?.gateway_setting?.color_2_ft}`
                        : "#0596d3",
            wrapperClass: 'col-md-6'        
        },
    ]
}

export const gatewaySettingsFields = (data = null) => {
    return [
        {
            label: "Default Pay Group",
            type: "select",
            id: "other1",
            name: "other1",
            placeholder: "Select Default Pay Group",
            options: payGroupOptions,
            defaultValue: data?.gateway_setting?.other1 || "",
            wrapperClass: 'col-md-12'  
        },
        {
            label: "Gateway charge paid by customer",
            type: "select",
            id: "convenienctFee",
            name: "convenienctFee",
            placeholder: "Select Gateway charge paid by customer",
            options: chargePaidByCustomersOptions,
            defaultValue: data.hasOwnProperty("tdr_carried_by_cust") ? data.tdr_carried_by_cust === 2
                        ? chargePaidByCustomersOptions[1].value
                        : chargePaidByCustomersOptions[0].value : "" ,
            wrapperClass: 'col-md-12'
        }
    ]
}