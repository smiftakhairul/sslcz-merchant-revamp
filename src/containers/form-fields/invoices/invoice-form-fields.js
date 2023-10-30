import moment from "moment";

const enableList = [
  { label: "Yes", value: 1 },
  { label: "No", value: 0 },
];


export const createInvoiceBtnFields = (data = []) => {
    return [
        {
            label: "Choose Configuration",
            type: "select",
            id: "configure_url",
            name: "configure_url",
            placeholder: "Select configuration",
            options: data,
            required: true,
            wrapperClass: 'col-md-12'
        }
    ]
}

export const productInvoiceFields = (data = null) => {
    return [
        {
          label: data?.prim_key_alias || "Reference/Order ID",
          type: "text",
          name: "acct_no",
          id: "acct_no",
          placeholder: `Enter ${data.prim_key_alias || `reference/order ID` }`,
          required: true,
          wrapperClass: 'col-md-4'
        },
        {
          label: "Customer/Company Name",
          type: "text",
          name: "cus_name",
          id: "cus_name",
          placeholder: "Enter customer/company name",
          required: true,
          wrapperClass: 'col-md-4'
        },
        {
          label: "Email",
          type: "email",
          name: "cus_email",
          id: "cus_email",
          placeholder: "Enter email address",
          required: true,
          wrapperClass: 'col-md-4'
        },
        {
          label: "Mobile",
          type: "text",
          name: "cus_phone",
          id: "cus_phone",
          placeholder: "Enter mobile no.",
          required: true,
          wrapperClass: 'col-md-4'
        },
        {
          label: "Creation Date",
          type: "date",
          name: "invoice_date",
          id: "invoice_date",
          placeholder: "Select Invoice Date",
          defaultValue:moment().format('DD-MM-YYYY'),
          required: true,
          wrapperClass: 'col-md-4'
        },
        {
          label: "Due Date",
          type: "date",
          name: "due_date",
          id: "due_date",
          placeholder: "Select Invoice Date",
          defaultValue:moment().format('DD-MM-YYYY'),
          required: true,
          wrapperClass: 'col-md-4'
        },
        {
          label: "Currency",
          type: "text",
          name: "currency",
          id: "currency",
          placeholder: "Enter currency",
          value: "BDT",
          required: false,
          readonly: true,
          wrapperClass: 'col-md-4'
        },
        {
          label: "Customer/Shipping Address",
          type: "text",
          name: "cus_add1",
          id: "cus_add1",
          placeholder: "Enter customer/shipping ,address",
          required: true,
          wrapperClass: 'col-md-4'
        },
        {
          label: "National ID/ Passport No/ Customer ID",
          type: "text",
          name: "passport_nid",
          id: "passport_nid",
          placeholder: "Enter NID/ Passport No/ Customer ID",
          required: false,
          wrapperClass: 'col-md-4'
        },
        {
          label: "Tax Registration Number",
          type: "text",
          name: "tax_register_number",
          id: "tax_register_number",
          placeholder: "Enter Tax Registration Number",
          required: false,
          wrapperClass: 'col-md-4'
        },
        data?.is_split_payment_enable === 1 && 
        {
          label: "Enable Split Payment  (by default it is no)",
          type: "select",
          name: "is_split_payment_enable",
          id: "is_split_payment_enable",
          options: enableList,
          placeholder: "Select option",
          defaultValue: data?.is_split_payment_enable || enableList[1].value,
          wrapperClass: "col-md-4",
        }   
    ]
}

export const productItemsFields = (data = null, calcTotal ) => {
    return [
        {
          label: 'Service Name (#' + (data + 1) + ')',
          type: "text",
          name: "service_packages[]",
          id: 'service_packages-' + (data + 1),
          placeholder: "Enter service name",
          required: true,
          wrapperClass: 'col-md-2'
        },
        {
          label: "Quantity",
          type: "number",
          name: "qty[]",
          id: 'qty-' + (data + 1),
          placeholder: "Enter qty",
          min:1,
          defaultValue:1,
          required: true,
          onChange: () => calcTotal(),
          wrapperClass: 'col-md-2'
        },
        {
          label: "Amount (Unit Price)",
          type: "number",
          name: "amount[]",
          min:1,
          id: 'amount-' + (data + 1),
          placeholder: "Enter amount",
          required: true,
          onChange: () => calcTotal(),
          wrapperClass: 'col-md-2'
        },
        {
          label: "Total",
          type: "number",
          name: "total_amount[]",
          id: 'total_amount-' + (data + 1),
          readonly: true,
          wrapperClass: 'col-md-2'
        }
    ]
}

export const otherChargesFields = () => {
    return [
        {
          label: "TDS (in amt or %)",
          type: "text",
          name: "tds",
          id: "tds",
          placeholder: "Enter tds",
          required: false,
          wrapperClass: 'col-md-4'
        },
        {
          label: "VAT (in amt or %)",
          type: "text",
          name: "vat",
          id: "vat",
          placeholder: "Enter vat",
          required: false,
          wrapperClass: 'col-md-4'
        },
        {
          label: "Delivery Charge (in amt)",
          type: "text",
          name: "convenience_fee",
          id: "convenience_fee",
          placeholder: "Enter delivery charge",
          required: false,
          wrapperClass: 'col-md-4'
        },
        {
          label: "Discount Amount (in amt or %)",
          type: "text",
          name: "discount_amount",
          id: "discount_amount",
          placeholder: "Enter discount amount",
          required: false,
          wrapperClass: 'col-md-4'
        }
    ]
}

export const othersFields = () => {
  return [
      {
        label: "Alternative Email",
        type: "text",
        name: "alt_email",
        id: "alt_email",
        placeholder: "Give your alternative email for email notification",
        required: false,
        wrapperClass: 'col-md-12'
      },
  ]
}

export const storeInfoFields = (data = null, storeOptions) => {
    return [
        {
          label: "Store",
          type: "select",
          name: "store_id",
          id: "store_id",
          placeholder: "Select store",
          options: storeOptions,
          defaultValue: data?.store_id,
          required: true,
          wrapperClass: 'col-md-4'
        }
    ]
}

export const payFields = (data = null) => {
  return [
    {
      label: "Name of the Invoice",
      type: "text",
      infoText: "* A brief description of this QR",
      name: "subscription_name",
      id: "subscription_name",
      placeholder: "Enter payment or subscription name",
      required: true,
      defaultValue: data?.subscription_name || "",
      wrapperClass: "col-md-4",
    },
    {
      label: "Alias of Transaction Reference",
      type: "text",
      infoText:
        "* It is alias display name of the primary reference key.Example: Mobile number, Account Number, Invoice Number, Role Number, etc. Keep empty, if you do not want this field.",
      name: "prim_key_alias",
      id: "prim_key_alias",
      placeholder: "Enter alias or transaction reference (e.g. Order ID)",
      required: false,
      formGroupClass: "mb-0",
      defaultValue: data?.prim_key_alias || "",
      wrapperClass: "col-md-4",
    },
    {
      label: "Pay Button",
      type: "text",
      name: "button_label",
      id: "button_label",
      placeholder: "Enter pay button label",
      required: false,
      defaultValue: data?.button_label || "",
      wrapperClass: "col-md-4",
    },
  ];
};

export const transactionFields = (data = null) => {
  return [
      {
        label: "Amount (BDT)",
        type: "number",
        infoText:
            "* Keep it unchanged, if you don't want to collect same amount from all customers.",
        name: "amount",
        id: "amount",
        placeholder: "Enter amount",
        required: true,
        defaultValue: data?.amount || "",
        wrapperClass: "col-md-4",
      },
      {
        label: "Amount List",
        type: "text",
        infoText: "* Comma separated amount list to display.",
        name: "amount_list",
        id: "amount_list",
        placeholder: "Enter Amount List",
        defaultValue: data?.amount_list || "",
        required:false,
        wrapperClass: "col-md-4",
      },
      {
        label: "Is Support Cart to Pay",
        type: "select",
        name: "is_support_cart",
        id: "is_support_cart",
        options: [
            { label: "No - Single Item Payment", value: 0 },
            {
            label: "Yes - Support to add Multiple Items in Cart",
            value: 1,
            },
        ],
        placeholder: "Select option",
        required: false,
        defaultValue: data?.is_support_cart,
        wrapperClass: "col-md-4",
      },
      {
        label: "Currency",
        type: "text",
        name: "currency",
        id: "currency",
        placeholder: "Select currency",
        defaultValue: data?.currency || "BDT",
        required: false,
        wrapperClass: "col-md-4",
      },
      {
        label: "Amount Type",
        type: "select",
        name: "amount_type",
        id: "amount_type",
        options: [
          { label: "Dynamic", value: "dynamic" },
          { label: "Fixed", value: "fixed" },
        ],
        placeholder: "Select option",
        required: false,
        defaultValue: data?.amount_type,
        wrapperClass: "col-md-4",
      },
      {
        label: "Invoice Sent by Email",
        type: "select",
        infoText:
          " * Whether customer will receive the invoice when an invoice will be generated.",
        name: "is_send_email",
        id: "is_send_email",
        options: [
          { label: "No Email", value: 0 },
          { label: "Email will be sent", value: 1 },
        ],
        placeholder: "Select option",
        required: false,
        defaultValue: data?.is_send_email,
        wrapperClass: "col-md-4",
      },
      {
        label: "Invoice CC Email",
        type: "text",
        name: "cc_ops_email",
        id: "cc_ops_email",
        placeholder: "Enter Email Address to Keep Cc",
        defaultValue: data?.cc_ops_email || "",
        wrapperClass: "col-md-4",
      },      
      {
        label: "Pre QR Query API",
        type: "text",
        name: "pre_bill_query",
        id: "pre_bill_query",
        placeholder: "Enter IPN URL",
        required: false,
        defaultValue: data?.pre_bill_query || "",
        wrapperClass: "col-md-4",
      },
      {
        label: "Bill Query API",
        type: "text",
        name: "bill_query_url",
        id: "bill_query_url",
        placeholder: "Enter IPN URL",
        required: false,
        defaultValue: data?.bill_query_url || "",
        wrapperClass: "col-md-4",
      },
      {
        label: "IPN URL",
        type: "text",
        name: "ipn_listener_url",
        id: "ipn_listener_url",
        placeholder: "IPN URL",
        required: false,
        defaultValue: data?.ipn_listener_url || "",
        wrapperClass: "col-md-4",
      },
      {
        label: "Mobile Number (SMS Notification)",
        type: "text",
        name: "sms_ipn",
        id: "sms_ipn",
        placeholder: "Enter Bangladeshi Mobile No.",
        required: false,
        defaultValue: data?.sms_ipn || "",
        wrapperClass: "col-md-4",
      },
      {
        label: "Terms and Agreement URL",
        type: "text",
        name: "url_tnc",
        id: "url_tnc",
        placeholder: "Enter terms and agreement url",
        defaultValue: data?.url_tnc || "",
        wrapperClass: "col-md-4",
      },
      {
        label: "Enable Terms and Condition",
        type: "select",
        name: "is_must_agree",
        id: "is_must_agree",
        options: [
            { label: "Display Terms & Conditions", value: 1 },
            { label: "Don't Display Terms & Conditions", value: 0 },
        ],
        required: false,
        placeholder: "Select option",
        defaultValue: data?.is_must_agree,
        wrapperClass: "col-md-4",
      },
      {
        label: "Enable Invoice Logo (by default it is yes)",
        type: "select",
        name: "logo_enabled",
        id: "logo_enabled",
        options: enableList || [],
        placeholder: "Select option",
        defaultValue: data?.logo_enabled || enableList[0].value,
        wrapperClass: "col-md-4",
      },
      {
        label: "Enable Payment Status (by default it is yes)",
        type: "select",
        name: "status_enabled",
        id: "status_enabled",
        options: enableList || [],
        placeholder: "Select option",
        defaultValue: data?.status_enabled || enableList[0].value,
        wrapperClass: "col-md-4",
      },
      {
        label: "Enable Approval Process (by default it is no)",
        type: "select",
        name: "approval_process",
        id: "approval_process",
        options: enableList || [],
        placeholder: "Select option",
        defaultValue: data?.approval_process || enableList[1].value,
        wrapperClass: "col-md-4",
      },
      {
        label: "Enable Split Payment  (by default it is no)",
        type: "select",
        name: "is_split_payment_enable",
        id: "is_split_payment_enable",
        options: enableList,
        placeholder: "Select option",
        defaultValue: data?.is_split_payment_enable || enableList[1].value,
        wrapperClass: "col-md-4",
      },
      {
        label: "Invoice Validity",
        type: "number",
        infoText: `* How long a invoice will be valid. It is mentioned in day(s). "0" means, invoice validity will be max one month`,
        name: "max_cycle",
        id: "max_cycle",
        placeholder: "Enter the max cycle",
        required: false,
        defaultValue: `${data?.max_cycle}` || "",
        formGroupClass: "mb-0",
        wrapperClass: "col-md-4",
      },   
  ];
};


export const additionalMessageFields = (data = null) => {
  return [
    {
      label: "Message on Top",
      type: "text",
      infoText: "* This message will be displayed on the top of the fields",
      name: "msg_on_top",
      id: "msg_on_top",
      placeholder: "Enter top message",
      required: false,
      defaultValue: data?.msg_on_top || "",
      formGroupClass: "mb-0",
      wrapperClass: "col-md-12",
    },
    {
      label: "Message on Footer",
      type: "text",
      infoText: "* This message will be displayed after the pay button",
      name: "msg_on_button",
      id: "msg_on_button",
      placeholder: "Enter footer message",
      required: false,
      defaultValue: data?.msg_on_button,
      formGroupClass: "mb-0",
      wrapperClass: "col-md-12 mt-3",
    },
  ];
};

export const pageStructureFields = ( data = null, fileChangeHandler) => {
  return [
    {
      label: "Left Site Background Color",
      type: "color",
      name: "left_bk_color",
      id: "left_bk_color",
      defaultValue: data?.left_bk_color ? `#${data?.left_bk_color}` : "#0596d3",
      wrapperClass: "col-md-3",
    },
    {
      label: "Left Site Font Color",
      type: "color",
      name: "left_ft_color",
      id: "left_ft_color",
      placeholder: "Select color",
      defaultValue: data?.left_ft_color ? `#${data?.left_ft_color}` : "#0596d3",
      wrapperClass: "col-md-3",
    },
    {
      label: "Right Site Background Color",
      type: "color",
      name: "right_bk_color",
      id: "right_bk_color",
      defaultValue: data?.right_bk_color ? `#${data?.right_bk_color}` : "#0596d3",
      wrapperClass: "col-md-3",
    },
    {
      label: "Right Site Font Color",
      type: "color",
      name: "right_ft_color",
      id: "right_ft_color",
      defaultValue: data?.right_ft_color ? `#${data?.right_ft_color}`: "#0596d3",
      wrapperClass: "col-md-3",
    },
    {
      type: "file",
      label: "Upload Banner",
      id: "bannerUrlFileInput",
      name: "banner_rul",
      onChange: (e) => {fileChangeHandler(e, 'banner_rul')},
      required: false,
      wrapperClass: "col-md-12",
    },
  ];
};