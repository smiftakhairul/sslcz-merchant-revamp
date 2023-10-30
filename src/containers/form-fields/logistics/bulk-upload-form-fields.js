export const bulkUploadFormFields = (data = null, fileChangeHandler) => [
    {
        type: "file",
        label: "File",
        id: "bulk_upload_file_path",
        name: "bulk_upload_file_path",
        onChange: (e) => {fileChangeHandler(e, 'bulk_order')},
        required: false,
    },
];