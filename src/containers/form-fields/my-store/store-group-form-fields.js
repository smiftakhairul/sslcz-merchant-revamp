const statusOptions = [
    {label: 'Active', value: 1},
    {label: 'De-active', value: 0},
];

export const storeGroupFields = (data = null) => {
    return [
        {
            label: "Store Group Name",
            type: "text",
            id: "group_name",
            name: "group_name",
            placeholder: "Store group name",
            defaultValue: data?.group_name || '',
            required: true,
            wrapperClass: 'col-md-12'
        },
        {
            label: "Status",
            type: "select",
            id: "status",
            name: "status",
            placeholder: "Select status",
            options: statusOptions,
            defaultValue: data && (data).hasOwnProperty('status') ? data.status : '',
            required: true,
            wrapperClass: 'col-md-12'
        }
    ]
}