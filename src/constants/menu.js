import { mainMenus } from "helpers/permissions";

const data = [
  {
      id: "DashboardX",
      icon: "iconsminds-shop-4",
      label: "menu.sslDashboard",
      to: "/app/dashboard",
      permissions: ['dashboard']
  },
  {
      id: "TransactionsX",
      icon: "iconsminds-letter-open",
      label: "menu.sslTransaction",
      to: "/app/transactions",
      permissions: ['transactionsMerchant']
  },
  {
      id: "InvoiceX",
      icon: "iconsminds-receipt-4",
      label: "menu.sslInvoice",
      to: "/app/invoice",
    //   permissions: ['merchantInvoice', 'merchantInvoiceConfiguration'],
    permissions: ['merchantInvoice', 'merchantInvoice'],
      subs: [
          {
              icon: "simple-icon-briefcase",
              label: "menu.sslInvoiceList",
              to: "/app/invoice/list",
              permissions: ['merchantInvoice'],
          },
          {
              icon: "simple-icon-pie-chart",
              label: "menu.invoice-configuration",
              to: "/app/invoice/configuration",
            //   permissions: ['merchantInvoiceConfiguration'],
            permissions: ['merchantInvoice'],
          },

      ]
  },
  {
      id: "LogisticsX",
      icon: "iconsminds-ship",
      label: "menu.sslLogistics",
      to: "/app/logistics",
      permissions: ['logistic', 'shippingManagedByMerchant', 'orderPickupStoreManagedByMerchant', 'orderBulkManagedByMerchant', 'orderBillingByMerchant'],
      subs: [
          {
              icon: "simple-icon-bag",
              label: "menu.ssl-logi-order-list",
              to: "/app/logistics/order/list",
              permissions: ['shippingManagedByMerchant'],
          },
          {
            icon: "simple-icon-layers",
            label: "menu.ssl-logi-bulkorder-list",
            to: "/app/logistics/bulk-order/list",
            permissions: ['orderPickupStoreManagedByMerchant'],
          },
          {
            icon: "simple-icon-home",
            label: "menu.ssl-logi-pickupstore-list",
            to: "/app/logistics/pickup-store/list",
            permissions: ['orderBulkManagedByMerchant'],
          },
          {
            icon: "simple-icon-wallet",
            label: "menu.ssl-logi-billing-list",
            to: "/app/logistics/billing/list",
            permissions: ['orderBillingByMerchant'],
          },
      ]
  },
  {
      id: "PaymentLinkX",
      icon: "iconsminds-line-chart-1",
      label: "menu.payment-link-menu",
      to: "/app/payment/link-list",
      permissions: ['paymentLink']
  },
  {
      id: "RecurringX",
      icon: "iconsminds-line-chart-1",
      label: "menu.recurring",
      to: "/app/recurring/list",
      permissions: ['recurring', 'merchantRecurringConfiguration'],
      subs: [
          {
              icon: "simple-icon-briefcase",
              label: "menu.recurring-list",
              to: "/app/recurring/list",
              permissions: ['recurring'],
          },
          {
              icon: "simple-icon-pie-chart",
              label: "menu.recurring-configuration",
              to: "/app/recurring/configuration",
              permissions: ['merchantRecurringConfiguration'],
          },
      ]
  },
  {
      id: "IdTrackingX",
      icon: "iconsminds-target",
      label: "menu.sslIDtracking",
      to: "/app/id-tracking",
      permissions: ['merchantTracking'],
  },
  {
      id: "RefundRequestX",
      icon: "iconsminds-repeat",
      label: "menu.sslRefundRequest",
      to: "/app/refund/request",
      permissions: ['refundInitiatebyMerchant'],
  },
  {
      id: "Chargeback RequestX",
      icon: "iconsminds-bucket",
      label: "menu.sslChargebackRequest",
      to: "/app/chargeback",
      permissions: ['chargeBackConfirmByMerchant'],
  },
  {
      id: "Analytics",
      icon: "iconsminds-line-chart-1",
      label: "menu.sslAnalytics",
      to: "/app/blank-page",
      permissions: [
        'AnalyticReport',
        'AnalyticReportMarketShare',
        'AnalyticReportGeolocation',
        'AnalyticReportOperator',
        'AnalyticReportDevice',
        'AnalyticReportIssuer',
        'AnalyticReportSavedCard'
    ],
      subs: [
        {
            icon: "simple-icon-briefcase",
            label: "menu.sslAnalyticsShare",
            to: "/app/analytics/market-share",
            permissions: ['AnalyticReportMarketShare']
        },
        {
            icon: "simple-icon-pie-chart",
            label: "menu.sslAnalyticsGeo",
            to: "/app/analytics/geo-location",
            permissions: ['AnalyticReportGeolocation']
        },
        {
            icon: "simple-icon-basket-loaded",
            label: "menu.sslAnalyticsMobile",
            to: "/app/analytics/mobile-operators",
            permissions: ['AnalyticReportOperator']
        },{
            icon: "simple-icon-doc",
            label: "menu.sslAnalyticsAgent",
            to: "/app/analytics/user-agent",
            permissions: ['AnalyticReportDevice']
        },{
            icon: "simple-icon-basket-loaded",
            label: "menu.sslAnalyticsLocation",
            to: "/app/analytics/issuer-location",
            permissions: ['AnalyticReportIssuer']
        },{
            icon: "simple-icon-basket-loaded",
            label: "menu.sslAnalyticsSavedCard",
            to: "/app/analytics/saved-card",
            permissions: ['AnalyticReportSavedCard']
        },
      ]
  },
  {
      id: "AccountingX",
      icon: "iconsminds-receipt-4",
      label: "menu.sslAccounting",
      to: "/app/accounting",
      permissions: ['paymentInfoMerchant']
  },
  {
      id: "Modify PNR",
      icon: "iconsminds-target-market",
      label: "menu.sslModifyPnr",
      to: "/app/pnr",
      permissions: ['transactionAmendment']
  },
  {
      id: "My UserX",
      icon: "iconsminds-repeat",
      label: "menu.sslMyUser",
      to: "/app/my-users",
      permissions: ['userManagedByMerchant']
  },
  {
      id: "FcommerceX",
      icon: "iconsminds-clothing-store",
      label: "menu.sslFcommerce",
      to: "/app/fcommerce",
      permissions: ['fcommercz', 'orderManagedByMerchant'],
      subs: [
        {
            icon: "simple-icon-basket-loaded",
            label: "menu.sslFcommerceOrders",
            to: "/app/fcommerce/orders",
            permissions: ['orderManagedByMerchant']
        },
        {
            icon: "simple-icon-screen-tablet",
            label: "menu.sslFcommerceProducts",
            to: "/app/fcommerce/products",
            permissions: ['productManagedByMerchant']
        },
        {
            icon: "simple-icon-grid",
            label: "menu.sslFcommerceCategories",
            to: "/app/fcommerce/categories",
            permissions: ['categoryManagedByMerchant']
        },
        {
            icon: "simple-icon-tag",
            label: "menu.sslFcommerceBrands",
            to: "/app/fcommerce/brands",
            permissions: ['brandManagedByMerchant']
        },
        {
            icon: "simple-icon-home",
            label: "menu.sslFcommerceStores",
            to: "/app/fcommerce/stores",
            permissions: ['fCommerceStoreManagedByMerchant']
        },
    ]
  },
  {
      id: "My StoreX",
      icon: "iconsminds-shop",
      label: "menu.sslMyStore",
      to: "/app/my-store",
      permissions: ['storeManagedbyMerchant'],
      subs: [
        {
            icon: "simple-icon-home",
            label: "menu.sslMyStoreList",
            to: "/app/my-store/list",
            permissions: ['storeManagedbyMerchant'],
        },
        {
            icon: "simple-icon-briefcase",
            label: "menu.sslMyStoreGroup",
            to: "/app/my-store/groups",
            permissions: ['storeManagedbyMerchant'],
        },
        {
            icon: "simple-icon-credit-card",
            label: "menu.sslMyStoreGateway",
            to: "/app/my-store/gateways",
            permissions: ['storeManagedbyMerchant'],
        }
    ]
  }
];

const loadedMenuPermissions = mainMenus(true);

let menus = [];
for (let [menu, permissions] of Object.entries(loadedMenuPermissions || {})) {
    let filtered = data.filter(item => item?.permissions.includes(permissions?.main?.name));
    if (!filtered.length) continue;
    filtered = filtered[0];

    let pMenu = {
        id: filtered.id,
        icon: filtered.icon,
        label: filtered.label,
        to: filtered.to,
    }

    if (filtered.subs && Object.keys(filtered.subs).length) {
        pMenu.subs = [];
        filtered.subs
            .filter(item => {
                let flag = false;
                if (permissions?.subs && Object.keys(permissions?.subs).length) {
                    for (let [sMenu, sPermissions] of Object.entries(permissions?.subs)) {
                        if (item?.permissions.includes(sPermissions?.name)) {
                            flag = true;
                            break;
                        }
                    }
                } else {
                    flag = item?.permissions.includes(permissions?.main?.name)
                }
                return flag;
            })
            .forEach(item => {
                let psMenu = {
                    icon: item.icon,
                    label: item.label,
                    to: item.to,
                }
                pMenu.subs.push(psMenu);
            });
    }
    menus.push(pMenu);
}

// export default data; //  without permission
export default menus;
