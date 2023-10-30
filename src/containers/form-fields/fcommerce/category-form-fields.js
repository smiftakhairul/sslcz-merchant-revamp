export const categoryInfoFields = (data = null, parentCategoryOptions = []) => {
    return [
        {
            label: "Category Name",
            type: "text",
            name: "category_name",
            id: "category_name",
            placeholder: "Enter Category Name",
            required: true,
            defaultValue:data?.category_name,
            wrapperClass: 'col-md-12'
        },
        {
            label: "Category Description",
            type: "text",
            name: "category_description",
            id: "category_description",
            placeholder: "Enter Category Description",
            required: false,
            defaultValue:data?.category_description,
            wrapperClass: 'col-md-12'
        },
        {
            label: "Parent Category",
            type: "select",
            name: "parent_id",
            id: "parent_id",
            placeholder: "Select Parent Category",
            options:parentCategoryOptions,
            required: false,
            defaultValue:data?.parent_id,
            wrapperClass: 'col-md-12'
        }
    ]
}