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
        label: "Name of the Recurring/Subscription",
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
        label: "Invoice Refer ID",
        type: "text",
        infoText:
          "* Only applicable for recurring type to send invoice if the payment channel has no auto debit facility.",
        name: "invoice_ref",
        id: "invoice_ref",
        placeholder: "Enter Invoice Refer ID for Recurring",
        required: false,
        defaultValue: data?.invoice_ref || "",
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

export const recurringCustomizedFields = (namePrefix = "", tFields = []) => {
  return [
      {
          label: "Field Type",
          checkboxLabel: "",
          type: "select",
          name: `${namePrefix}_type`,
          options: [
              { label: "Text Field", value: "text" },
              { label: "Select Field", value: "select" },
              { label: "Date Field", value: "date" },
          ],
          defaultValue:
              tFields.find((item) => item.name === namePrefix)?.type || "",
          required: false,
          wrapperClass: "col-md-3",
      },
      {
          label: "Display name",
          checkboxLabel: "",
          type: "text",
          name: `${namePrefix}_alias`,
          placeholder: "Enter Display Name",
          options: null,
          defaultValue:
              tFields.find((item) => item.name === namePrefix)?.alias || "",
          required: false,
          wrapperClass: "col-md-3",
      },
      {
          label: "Placeholder",
          checkboxLabel: "",
          type: "text",
          name: `${namePrefix}_placeholder`,
          placeholder: "Enter PlaceHolder",
          options: null,
          defaultValue:
              tFields.find((item) => item.name === namePrefix)?.placeholder || "",
          required: false,
          wrapperClass: "col-md-3",
      },
      {
          label: "Default Value",
          checkboxLabel: "",
          type: "text",
          name: `${namePrefix}_value`,
          placeholder: "Enter Default value",
          options: null,
          defaultValue:
              tFields.find((item) => item.name === namePrefix)?.value || "",
          required: false,
          wrapperClass: "col-md-3",
      },
      {
          label: "Other Value",
          checkboxLabel: "",
          type: "text",
          name: `${namePrefix}_list`,
          placeholder: "Enter Other Value",
          options: null,
          defaultValue:
              tFields.find((item) => item.name === namePrefix)?.list || "",
          required: false,
          wrapperClass: "col-md-3",
      },
      {
          label: "",
          checkboxLabel: "Whether it is mandatory",
          type: "checkbox",
          name: `${namePrefix}_is_mandatory`,
          options: null,
          defaultValue:
              parseInt(
              tFields.find((item) => item.name === namePrefix)?.is_mandatory || 0
              ) || "",
          required: false,
          wrapperClass: "col-md-3 mt-4",
      },
      {
          label: "",
          checkboxLabel: "Whether to display",
          type: "checkbox",
          name: `${namePrefix}_is_display`,
          options: null,
          defaultValue:
              parseInt(
              tFields.find((item) => item.name === namePrefix)?.is_display || 0
              ) || "",
          required: false,
          wrapperClass: "col-md-3 mt-4",
      },
  ];
};