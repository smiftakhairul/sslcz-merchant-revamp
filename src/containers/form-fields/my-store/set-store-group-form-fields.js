export const setStoreGroupFields = (storeGroups = [], store = '') => {
    return [
        {
            label: "Store Group",
            type: "select",
            id: "store_grp_id",
            name: "store_grp_id",
            placeholder: "Select group",
            options: storeGroups || [],
            defaultValue: store?.store_grp_id || '',
            required: true,
            wrapperClass: 'col-md-12'
        }
    ]
}