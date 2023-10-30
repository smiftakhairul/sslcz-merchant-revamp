import {
  getBinInfo,
  getParseFloat,
  getStatusColumnContent,
  getTableSerialIndex,
} from "helpers/common";
import moment from "moment";
import React from "react";
import { Badge, Button, ButtonGroup } from "reactstrap";

const transactionDetailsColumns = (currentPage, pageSize, modal, markRead) => [
  {
    Header: "#",
    Cell: (row) => (
      <p className="text-muted mb-0">
        {getTableSerialIndex(row, currentPage, pageSize)}
      </p>
    ),
  },
  {
    Header: "Date",
    accessor: "incommingtime",
    Cell: (props) => (
      <p className="">
        {props.value
          ? moment(props.value, "YYYY-MM-DD hh:mm:ss")
              .format("DD-MM-YYYY hh:mm A")
              .toString()
          : ""}
      </p>
    ),
  },
  {
    Header: "Transaction ID/Other info",
    accessor: "mtxnid",
    Cell: (props) => {
      return (
        <div>
          <p className="mb-2">
            <span className={props.row.original.diff_create <= 1000 ? 'text-info' : ''}>{props.value}</span>{" "}
            {/* {props.row.original.diff_create <= 1000 ? (
              <span className="badge badge-info badge-pill">New</span>
            ) : (
              ""
            )} */}
          </p>
          <p className="mb-0 font-weight-bold">{props.row.original.cus_name}</p>
          <p className="mb-0 font-weight-bold">
            {props.row.original.cus_email}
          </p>
          <p className="mb-0 font-weight-bold">
            {props.row.original.cus_phone}
          </p>
          {props.row.original.value_a ? (
            <p className="mb-0">
              VAl A:{" "}
              <span className="font-weight-bold">
                {props.row.original.value_a}
              </span>
            </p>
          ) : (
            ""
          )}
          {props.row.original.value_b ? (
            <p className="mb-0">
              VAl B:{" "}
              <span className="font-weight-bold">
                {props.row.original.value_b}
              </span>
            </p>
          ) : (
            ""
          )}
          {props.row.original.value_c ? (
            <p className="mb-0">
              VAl C:{" "}
              <span className="font-weight-bold">
                {props.row.original.value_c}
              </span>
            </p>
          ) : (
            ""
          )}
          {props.row.original.value_d ? (
            <p className="mb-0">
              VAl D:{" "}
              <span className="font-weight-bold">
                {props.row.original.value_d}
              </span>
            </p>
          ) : (
            ""
          )}
        </div>
      );
    },
  },
  {
    Header: "Card/Ref No",
    accessor: "scredit_card_num",
    Cell: (props) => {
      return (
        <div>
          <p className="mb-2">{(props.value || '').slice(0, 30)}</p>
          <p className="mb-0 font-weight-bold">{getCardType(props)}</p>
          <p className="mb-0">{props.row.original.cardholdername}</p>
          <p className="mb-0 font-weight-bold">
            {getBinInfo(props.row.original.issuerbank).bin_info_bank}
          </p>
          <p className="mb-0 font-weight-bold">
            {getBinInfo(props.row.original.issuerbank).bin_info_country_code !==
            "BD" ? (
              <span className="text-danger">
                {getBinInfo(props.row.original.issuerbank).bin_info_country}
              </span>
            ) : (
              <span className="">
                {getBinInfo(props.row.original.issuerbank).bin_info_country}
              </span>
            )}
          </p>
        </div>
      );
    },
  },
  {
    Header: "Store",
    accessor: "strid",
    Cell: (props) => <p className="">{props.value}</p>,
  },
  {
    Header: "Amount",
    accessor: "mamount",
    Cell: (props) => {
      return (
        <div>
          <p className="mb-0">
            {getParseFloat(props.value || 0)} {props.row.original?.t_currency}
          </p>
          {props.row.original.sslportion &&
          props.row.original.sslportion.length &&
          props.row.original.bankportion &&
          props.row.original.bankportion.length ? (
            <React.Fragment>
              {/* <hr className="my-1" /> */}
              <p className="mb-0 mt-3">
                Charge:{" "}
                <span className="font-weight-bold">
                  {getParseFloat(
                    parseFloat(props.row.original?.sslportion || 0) +
                      parseFloat(props.row.original?.bankportion || 0)
                  )}{" "}
                  {props.row.original?.t_currency}
                </span>
              </p>
            </React.Fragment>
          ) : (
            ""
          )}
          {props.row.original.storeportion &&
          props.row.original.storeportion.length ? (
            <p className="mb-0">
              Receivable:{" "}
              <span className="font-weight-bold">
                {getParseFloat(props.row.original?.storeportion || 0)}{" "}
                {props.row.original?.t_currency}
              </span>
            </p>
          ) : (
            ""
          )}
          {props.row.original.other_charge &&
          props.row.original.other_charge.length &&
          parseFloat(props.row.original.other_charge) > 0 ? (
            <p className="mb-0">
              EMI Charge:{" "}
              <span className="font-weight-bold">
                {getParseFloat(props.row.original?.other_charge || 0)}{" "}
                {props.row.original?.t_currency}
              </span>
            </p>
          ) : (
            ""
          )}
          {props.row.original.currency_conv_BDT &&
          props.row.original.currency_conv_BDT.length &&
          parseFloat(props.row.original.currency_conv_BDT) > 0 &&
          parseFloat(props.value) !==
            parseFloat(props.row.original.currency_conv_BDT) &&
          parseFloat(props.row.original.currency_conv_BDT) -
            parseFloat(props.value) >
            0 ? (
            <React.Fragment>
              <p className="mb-0">
                Requested Amount:{" "}
                <span className="font-weight-bold">
                  {getParseFloat(props.row.original?.currency_conv_BDT || 0)}{" "}
                  {props.row.original?.t_currency}
                </span>
              </p>
              <p className="mb-0">
                Discounted Amount:{" "}
                <span className="font-weight-bold">
                  {getParseFloat(
                    parseFloat(props.row.original?.currency_conv_BDT || 0) -
                      parseFloat(props.value || 0)
                  )}{" "}
                  {props.row.original?.t_currency}
                </span>
              </p>
            </React.Fragment>
          ) : (
            ""
          )}
        </div>
      );
    },
  },

  {
    Header: "Status",
    accessor: "notice",
    cellClass: "text-center",
    Cell: (props) => {
      return (
        <div>
          <React.Fragment>{getStatusColumnContent(props.value, props.row.original)}</React.Fragment>
        </div>
      );
    },
  },
  {
    Header: "Action",
    accessor: "action",
    // cellClass: "align-middle",
    Cell: (props) => {
      return (
        <div>
          <ButtonGroup>
          <Button
            className="btn btn-xs btn-primary mr-1"
            title="Details"
            color=""
            onClick={() => modal(props.row.original, "TransactionDetail")}
          >
            <span className="align-middle d-flex align-items-center"><i className="glyph-icon simple-icon-eye"></i></span>
          </Button>
          {props.row.original.notice === "success" &&
          !props.row.original.is_viewed ? (
            <Button
              className="btn btn-xs btn-info"
              title="Mark as Read"
              color=""
              onClick={() => markRead(props.row.original)}
            >
              <span className="align-middle d-flex align-items-center"><i className="glyph-icon simple-icon-eyeglass"></i></span>
            </Button>
          ) : (
            ""
          )}
          </ButtonGroup>
        </div>
      );
    },
  },
];

const getCardType = (props) => {
  let cardType = "";
  if (props.row.original.notice === "success") {
    let cardTypeParse = props.row.original.cardtype
      ? props.row.original.cardtype.split("-")
      : [];
    cardType = cardTypeParse[0] !== undefined ? cardTypeParse[0] : "";
  } else {
    cardType = props.row.original.sel_card;
  }

  return cardType;
};

export default transactionDetailsColumns;
