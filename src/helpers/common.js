import { Colxx } from "components/bootstrap/custom-bootstrap";
import moment from "moment";
import React from "react";
import { Badge } from "reactstrap";
import { getRandomProfileImageColor } from "./utils";

export const getTodayFromTime = (showTime = true) => {
  return (
    moment().format("YYYY-MM-DD").toString() + (showTime ? " 00:00:00" : "")
  );
};
export const getTodayToTime = (showTime = true) => {
  return (
    moment().format("YYYY-MM-DD").toString() + (showTime ? " 23:59:59" : "")
  );
};

export const getAsyncFieldNames = () => {
  return {
    mid: "getAsyncMerchantOptions",
    strid: "getAsyncStoreOptions",
    store_list_key: "getAsyncStoreOptions",
  };
};

export const getDateDiff = (
  from,
  to,
  currentFormat = "DD-MM-YYYY",
  diffType = "days"
) => {
  let fromDate = moment(from, currentFormat).format();
  let toDate = moment(to, currentFormat).format();
  return moment(toDate).diff(moment(fromDate), diffType) || 0;
};

export const titleCase = (str = null) => {
  if (!str.length) return;
  var splitStr = str.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(" ");
};

export const stringToJson = (string, type = 'obj') => {
  try {
    string = string
      .replace(/\\n/g, "\\n")
      .replace(/\\'/g, "\\'")
      .replace(/\\"/g, '\\"')
      .replace(/\\&/g, "\\&")
      .replace(/\\r/g, "\\r")
      .replace(/\\t/g, "\\t")
      .replace(/\\b/g, "\\b")
      .replace(/\\f/g, "\\f");
    string = string.replace(/[\u0000-\u0019]+/g, "");
    string = string.replace(/[\u0000-\u001F]+/g, "");
    return JSON.parse(string);
  } catch (e) {
    return type === 'obj' ? {} : [];
  }
};

export const deepEqual = (x, y) => {
  const ok = Object.keys, tx = typeof x, ty = typeof y;
  return x && y && tx === 'object' && tx === ty ? (
    ok(x).length === ok(y).length &&
      ok(x).every(key => deepEqual(x[key], y[key]))
  ) : (x === y);
}

export const getParseFloat = (number = 0, fraction = 2) => {
  return parseFloat(number || 0).toLocaleString(undefined, {
    minimumFractionDigits: fraction,
    maximumFractionDigits: fraction,
  });
};

export const getTableSerialIndex = (row, currentPage = 1, pageSize = 1) => {
  return (Number(currentPage) - 1) * Number(pageSize) + Number(row.row.id) + 1;
};

export const numberFormatterKmb = (num) => {
  num = Math.round(parseFloat(num.replace(",", "")));

  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "G";
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return num;
};

export const displayHtmlMessage = (message) => {
  message = message.replace("s_bbbb", "<strong>");
  message = message.replace("e_bbbb", "</strong>");
  message = message.replace("s_bbbb", "<strong>");
  message = message.replace("n_line", "<br />");
  return message;
};

export const getBinInfo = (issuerbank) => {
  let binInfo = {};
  let cardBinInfo = issuerbank ? issuerbank.split("|") : [];
  binInfo.bin_info_bank = cardBinInfo[3] || "";
  binInfo.bin_info_country = cardBinInfo[5] || "";
  binInfo.bin_info_country_code = cardBinInfo[4] || "";

  return binInfo;
};

export const getSettlementType = (type) => {
  let types = {
    ONLINE_PAYMENT: "On-line Payment",
    REFUND: "Refund",
    CHARGEBACK: "Charge Back",
    MONTHLY_CHARGE: "Monthly Fee",
  };

  return types.hasOwnProperty(type) ? types[type] : null;
};

export const getCardInfo = (cardtype) => {
  let cardInfo = {};
  let cardBinInfo = cardtype ? cardtype.split("-") : [];
  cardInfo.card_type = cardBinInfo[0] || "";
  cardInfo.gateway_bank = cardBinInfo[1] || "";

  return cardInfo;
};

export const listGroupItem = (title = null, value = null, grid1 = 5, grid2 = 7, readMode = false, bodyContent=null) => {
  return <>
    <div className="list-group-item bg-transparent">
      <div className="d-flex w-100 justify-content-left align-items-center">
        <Colxx md={grid1} className={readMode ? "text-right" : ''}>
          <h6 className="mb-0 display-8 font-weight-bold">{title}</h6>
        </Colxx>
        <Colxx md={grid2}>
          {bodyContent ? bodyContent() : <p className="mb-0 display-8">{value}</p>}
        </Colxx>
      </div>
    </div>
  </>
};

export const getDefaultEmiTenureRates = (bankId = 'default') => {
  let rate = {};
  switch (bankId) {
    case 21: // BANK - LankaBangla Financial Limited
      rate = {
        3: '0.035',
        6: '0.045',
        9: '0.065',
        12: '0.085',
        18: '0.115',
        24: '0.155',
        36: '0.195'
      }
      break;
    case 36: // BANK - STANDARD CHARTERED BANK
      rate = {
        3: '0.035',
        6: '0.055',
        9: '0.080',
        12: '0.1050',
        18: '0.1350',
        24: '0.175',
        36: '0.225'
      }
      break;
    default:
      rate = {
        3: "0.0300",
        6: "0.045",
        9: "0.065",
        12: "0.085",
        18: "0.115",
        24: "0.155",
        30: "0.165",
        36: "0.195"
      };
  }

  return rate;
};

export const getStatusColumnContent = (status, transaction = null) => {
  switch (status) {
    case "success":
      let settleStatus = '',
        emiHoldText = '',
        paymentHold = '',
        cbackHoldText = '',
        escrowHoldText = '',
        refundStatus = '',
        cbackStatus = '',
        statusDesc = '';

      if (transaction) {
        if (transaction.settlestatus === 'SETTLE_APPROVED') {
          settleStatus = <div><Badge className="badge badge-info text-white" color="info" pill>S</Badge></div>;
        }
        if (parseFloat(transaction.other_charge || 0) > 0 || (transaction.emi_installment && transaction.emi_desc !== 'EMI CANCELLED')) {
          emiHoldText = <div><Badge className="badge badge-info text-white" color="info" pill>EMI-{parseInt(transaction.emi_installment).toFixed()}</Badge></div>;
        }
        if (transaction.settlestatus === 'SETTLE_HOLD') {
          paymentHold = <div><Badge className="badge badge-warning text-white" color="warning" pill>H</Badge></div>;
        }
        if (transaction.settlestatus === 'SETTLE_CHARGEBACK') {
          cbackHoldText = <div><Badge className="badge badge-warning text-white" color="warning" pill>CH</Badge></div>;
        }
        if (transaction.settlestatus === 'ESCROW_HOLD') {
          escrowHoldText = <div><Badge className="badge badge-warning text-white" color="warning" pill>EH</Badge></div>;
        }
        if (parseFloat(transaction.refundamount || 0) > 0) {
          if (parseFloat(transaction.mamount || 0) <= parseFloat(transaction.refundamount || 0)) {
            refundStatus = <div><Badge className="badge badge-warning text-white" color="warning" pill>R</Badge></div>;
          } else {
            refundStatus = <div><Badge className="badge badge-warning text-white" color="warning" pill>PR</Badge></div>;
          }
        }
        if (transaction.chargebackstatus === 'YES') {
          cbackStatus = <div><Badge className="badge badge-danger text-white" color="danger" pill>C</Badge></div>;
          if (transaction.refundstatus !== 'YES') {
            refundStatus = '';
          }
        }
        if (transaction.settlestatus === 'SETTLE_HOLD') {
          statusDesc = <>{paymentHold}{settleStatus}{refundStatus}{cbackStatus}{cbackHoldText}{escrowHoldText}</>;
        } else {
          statusDesc = <>{settleStatus}{refundStatus}{cbackStatus}{emiHoldText}{cbackHoldText}{escrowHoldText}</>;
        }
      }

      return <React.Fragment>
        <Badge className="badge badge-success text-white" color="success" pill>
          Success
        </Badge>
        {statusDesc}
      </React.Fragment>;
    case "initial":
      return (
        <Badge className="badge badge-primary text-white" color="primary" pill>
          Pending
        </Badge>
      );
    case "failed":
      return (
        <Badge className="badge badge-danger text-white" color="danger" pill>
          Failed
        </Badge>
      );
    case "cancelled":
      return (
        <Badge className="badge badge-warning text-white" color="warning" pill>
          Cancelled
        </Badge>
      );
    case "Timeout":
      return (
        <Badge className="badge badge-warning text-white" color="warning" pill>
          Timeout
        </Badge>
      );
    case "expired":
      return (
        <Badge className="badge badge-warning text-white" color="warning" pill>
          Expired
        </Badge>
      );
    case "unattempted":
      return (
        <Badge className="badge badge-warning text-white" color="warning" pill>
          Unattempted
        </Badge>
      );
    default:
      return (
        <Badge className="badge badge-warning text-white" color="warning" pill>
          Unknown
        </Badge>
      );
  }
};
export const getModalHeaderStatusColumnContent = (status) => {
  switch (status) {
    case "success":
      return (
        <Badge
          className="badge badge-success text-white py-1 px-2"
          color="success"
        >
          Success
        </Badge>
      );
    case "initial":
      return (
        <Badge
          className="badge badge-primary text-white py-1 px-2"
          color="primary"
        >
          Pending
        </Badge>
      );
    case "failed":
      return (
        <Badge
          className="badge badge-danger text-white py-1 px-2"
          color="danger"
        >
          Failed
        </Badge>
      );
    case "cancelled":
      return (
        <Badge
          className="badge badge-warning text-white py-1 px-2"
          color="warning"
        >
          Cancelled
        </Badge>
      );
    case "Timeout":
      return (
        <Badge
          className="badge badge-warning text-white py-1 px-2"
          color="warning"
        >
          Timeout
        </Badge>
      );
    case "expired":
      return (
        <Badge
          className="badge badge-warning text-white py-1 px-2"
          color="warning"
        >
          Expired
        </Badge>
      );
    case "unattempted":
      return (
        <Badge
          className="badge badge-warning text-white py-1 px-2"
          color="warning"
        >
          Unattempted
        </Badge>
      );
    default:
      return (
        <Badge
          className="badge badge-warning text-white py-1 px-2"
          color="warning"
        >
          Unknown
        </Badge>
      );
  }
};

export const getStatusColumnContentByNumber = (status, text = null) => {
  switch (status) {
    case 1:
      return (
        <Badge className="badge badge-success mb-1 mr-1" color="success">
          {text || "Yes"}
        </Badge>
      );
    case 0:
      return (
        <Badge className="badge badge-danger mb-1 mr-1" color="danger">
          {text || "No"}
        </Badge>
      );
    default:
      return (
        <Badge className="badge badge-warning mb-1 mr-1" color="warning">
          {text || "Unknown"}
        </Badge>
      );
  }
};

export const createImageFromInitials = (
  text = "",
  size = 40,
  subStart = 0,
  subEnd = text.length
) => {
  let color = getRandomProfileImageColor();
  let str = text.match(/\b(\w)/g) || "";
  if (str.length) {
    str = str.join("");
  }
  str = str.toUpperCase();
  str = str.substring(subStart, subEnd);

  let fontSize = "";
  let paddingTopBottom = "";

  if (str.length === 1) {
    fontSize = "20px";
    paddingTopBottom = "6px";
  } else if (str.length === 2) {
    fontSize = "17px";
    paddingTopBottom = "9px";
  } else if (str.length === 3) {
    fontSize = "14px";
    paddingTopBottom = "10px";
  } else if (str.length === 4) {
    fontSize = "11px";
    paddingTopBottom = "13px";
  } else {
    fontSize = "8px";
    paddingTopBottom = "14px";
  }

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: color,
        fontSize: fontSize,
        color: "#fff",
        textAlign: "center",
        // padding: '6px 12px',
        paddingTop: paddingTopBottom,
        paddingBottom: paddingTopBottom,
        display: "inline-block",
        verticalAlign: "middle",
      }}
    >
      {str}
    </div>
  );
};

export const getStoreInfo = (storeInfo) => {
 return storeInfo.map((store, idx) => {
    return (
      <div className="row" key={idx}>
        <div className="col-md-12">
          <h5><Badge color="info"  pill>{store?.strid} - {store?.store_name}</Badge></h5>
        </div>
      </div>
    );
  });
};
