export const profileInfoFields = (user = null) => {
    return [
        {
            label: "First Name",
            type: "text",
            name: "f_name",
            id: "f_name",
            placeholder: "Enter first name",
            defaultValue: user?.ad_user_profile?.f_name,
            required: true,
            wrapperClass: 'col-md-4'
        },
        {
            label: "Middle Name",
            type: "text",
            name: "m_name",
            id: "m_name",
            placeholder: "Enter middle name",
            defaultValue: user?.ad_user_profile?.m_name,
            required: false,
            wrapperClass: 'col-md-4'
        },
        {
            label: "Last Name",
            type: "text",
            name: "l_name",
            id: "l_name",
            placeholder: "Enter last name",
            defaultValue: user?.ad_user_profile?.l_name,
            required: false,
            wrapperClass: 'col-md-4'
        },
        {
            label: "Mobile Number",
            type: "text",
            name: "mobile_no",
            id: "mobile_no",
            placeholder: "Enter mobile no.",
            defaultValue: user?.ad_user_profile?.mobile_no,
            required: true,
            wrapperClass: 'col-md-4'
        },
        {
            label: "Phone Number",
            type: "text",
            name: "phone_no",
            id: "phone_no",
            placeholder: "Enter phone no.",
            defaultValue: user?.ad_user_profile?.phone_no,
            required: false,
            wrapperClass: 'col-md-4'
        },
        {
            label: "Email Address",
            type: "email",
            name: "email_addess",
            id: "email_addess",
            placeholder: "Enter email address (email must be unique at SSLCOMMERZ system)",
            defaultValue: user?.ad_user_profile?.email_addess,
            required: true,
            wrapperClass: 'col-md-4'
        }
    ]
}

export const loginCredFields = (user = null, userRoleOptions = [], storeGroupOptions = [], merchantAppRoleOptions = [], action = '', checkPassword) => {
    return [
        {
            label: "Login Name",
            type: "text",
            name: "user_login",
            id: "user_login",
            placeholder: "Enter login id (id must be unique at SSLCOMMERZ system)",
            defaultValue: user?.uname,
            required: true,
            wrapperClass: 'col-md-4'
        },
        {
            label: "Login Password",
            type: "password",
            name: "user_passwd",
            id: "user_passwd",
            placeholder: action === 'ADD' ? 'Enter login password' : 'No need to input password if previous password keep unchanged',
            required: action === 'ADD',
            onKeyup: () => checkPassword(),
            wrapperClass: 'col-md-4'
        },
        {
            label: "Confirm Password",
            type: "password",
            name: "confirm_passwd",
            id: "confirm_passwd",
            placeholder: "Confirm login password (Follow the below password policy)",
            required: action === 'ADD',
            onKeyup: () => checkPassword(),
            wrapperClass: 'col-md-4'
        },
        {
            label: "User Role",
            type: "select",
            name: "role_id",
            id: "role_id",
            placeholder: "Select Role",
            options: userRoleOptions,
            defaultValue: user?.role_id,
            required: true,
            wrapperClass: 'col-md-4'
        },
        {
            label: "Allowed Store Groups",
            type: "select",
            name: "store_grp_id",
            id: "store_grp_id",
            placeholder: "Select Store Group",
            options: storeGroupOptions,
            defaultValue: user?.store_grp_id,
            required: true,
            wrapperClass: 'col-md-4'
        },
        {
            label: "Merchant App Role",
            type: "select",
            name: "merchant_app_role_id",
            id: "merchant_app_role_id",
            placeholder: "Select Merchant App Role",
            options: merchantAppRoleOptions,
            defaultValue: user?.merchant_app_role_id,
            required: false,
            wrapperClass: 'col-md-4'
        }
    ]

}