export const ipnEmailFields = (data = null) => {
    return [
        {
            label: "Email One",
            type: "email",
            id: "ipn_email_1",
            name: "ipn_email_1",
            defaultValue: data?.ipn_email_1 || "",
            placeholder: "Please enter email address",
            wrapperClass: 'col-md-12'
        },
        {
            label: "Email Two",
            type: "email",
            id: "ipn_email_2",
            name: "ipn_email_2",
            defaultValue: data?.ipn_email_2 || "",
            placeholder: "Please enter email address",
            wrapperClass: 'col-md-12'
        },
        {
            label: "Email Three",
            type: "email",
            id: "ipn_email_3",
            name: "ipn_email_3",
            defaultValue: data?.ipn_email_3 || "",
            placeholder: "Please enter email address",
            wrapperClass: 'col-md-12'
        }

    ]
}

export const ipnMobileFields = (data = null) => {
    return [
        {
            label: "Mobile One",
            type: "number",
            id: "ipn_mobile_1",
            name: "ipn_mobile_1",
            defaultValue: data?.ipn_mobile_1 || "",
            placeholder: "Please enter mobile number",
            wrapperClass: 'col-md-12'
        },
        {
            checkboxLabel: "Enable SMS",
            type: "checkbox",
            id: "ipn_mobile_1_enable",
            name: "ipn_mobile_1_enable",
            defaultValue: data?.ipn_mobile_1_enable ? true : false,
            wrapperClass: 'col-md-12'
        },
        {
            label: "Mobile Two",
            type: "number",
            id: "ipn_mobile_2",
            name: "ipn_mobile_2",
            defaultValue: data?.ipn_mobile_2 || "",
            placeholder: "Please enter mobile number",
            wrapperClass: 'col-md-12'
        },
        {
            checkboxLabel: "Enable SMS",
            type: "checkbox",
            id: "ipn_mobile_2_enable",
            name: "ipn_mobile_2_enable",
            defaultValue: data?.ipn_mobile_2_enable ? true : false,
            wrapperClass: 'col-md-12'
        }

    ]
}

// export const ipnMobileFields2 = (data = null) => {
//     return [
//         {
//             label: "Mobile Two",
//             type: "number",
//             id: "ipn_mobile_2",
//             name: "ipn_mobile_2",
//             defaultValue: data?.ipn_mobile_2 || "",
//             placeholder: "Please enter mobile number",
//             wrapperClass: 'col-md-12'
//         }
//     ]
// }

// export const ipnEnableSMSFields1 = (data = null) => {
//     return [
//         {
//             checkboxLabel: "Enable SMS",
//             type: "checkbox",
//             id: "ipn_mobile_1_enable",
//             name: "ipn_mobile_1_enable",
//             defaultValue: data?.ipn_mobile_1_enable ? true : false,
//             wrapperClass: 'col-md-12'
//         }
//     ]
// }

// export const ipnEnableSMSFields2 = (data = null) => {
//     return [
//         {
//             checkboxLabel: "Enable SMS",
//             type: "checkbox",
//             id: "ipn_mobile_2_enable",
//             name: "ipn_mobile_2_enable",
//             defaultValue: data?.ipn_mobile_2_enable ? true : false,
//             wrapperClass: 'col-md-12'
//         }
//     ]
// }

export const ipnHttpListenerFields = (data = null) => {
    return [
        {
            label: "IPN Listener",
            type: "text",
            id: "ipn_http_url",
            name: "ipn_http_url",
            placeholder: `Example: http(s)://${data?.store_url}/ipn_listener/`,
            wrapperClass: 'col-md-12'
        },
        {
            checkboxLabel: "Enable SMS",
            type: "checkbox",
            id: "ipn_http_url_enable",
            name: "ipn_http_url_enable",
            defaultValue: data?.ipn_http_url_enable ? true : false,
            wrapperClass: 'col-md-12'
        }
    ]
}

// export const ipnEnableHttpListenerFields = (data = null) => {
//     return [
//         {
//             checkboxLabel: "Enable SMS",
//             type: "checkbox",
//             id: "ipn_http_url_enable",
//             name: "ipn_http_url_enable",
//             defaultValue: data?.ipn_http_url_enable ? true : false,
//             wrapperClass: 'col-md-12'
//         }
//     ]
// }