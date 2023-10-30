const statusOptions = [
    {label:'Active', value:1},
    {label: 'Inactive', value:0}, 
];

export const brandInfoFields = (data = null) => {
    return [
        {
            label: "Brand Name",
            type: "text",
            name: "brand_name",
            id: "brand_name",
            placeholder: "Enter brand Name",
            required: true,
            defaultValue: data?.brand_name,
            wrapperClass: 'col-md-12'
        },
        {
            label: "Brand Code",
            type: "text",
            name: "brand_code",
            id: "brand_code",
            placeholder: "Enter Category Description",
            required: false,
            defaultValue: data?.brand_code,
            wrapperClass: 'col-md-12'
        },
        {
            label: "Status",
            type: "select",
            name: "is_active",
            id: "is_active",
            placeholder: "Select Status",
            options: statusOptions,
            required: false,
            defaultValue:data?.is_active,
            wrapperClass: 'col-md-12'
        }
    ]
}