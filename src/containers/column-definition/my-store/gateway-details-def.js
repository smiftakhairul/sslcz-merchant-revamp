import { getTableSerialIndex } from "helpers/common";
import { Badge } from "reactstrap";

const GatewayListColumns = (currentPage, pageSize, gateways) => [
  {
    Header: "#",
    Cell: (row) => (
      <p className="text-muted mb-0">
        {getTableSerialIndex(row, currentPage, pageSize)}
      </p>
    ),
  },
  {
    Header: "Store ID",
    accessor: "strid",
    Cell: (props) => <p className="">{props.value}</p>,
  },
  {
    Header: "Store Name",
    accessor: "store_name",
    Cell: (props) => <p className="">{props.value}</p>,
  },
  {
    Header: "Gateway",
    accessor: "ffff",
    Cell: (props) =>
      gateways.map((gw,idx) => {
        if (
          props.row.original.str_ebl_id === "" &&
          props.row.original.str_ebl_ag_id === "" &&
          (gw === "ebl_visa" || gw === "ebl_master")
        ) {
          return (
            <Badge key={idx} className='m-1'  color="light" style={{ color: "red" }}>
              {`(${gw.replace("_", " ").toUpperCase()})`}
            </Badge>
          );
        } else if (
          props.row.original.str_city_id === "" &&
          (gw === "city_visa" || gw === "city_master" || gw === "city_amex")
        ) {
          return (
            <Badge key={idx} className='m-1' color="light" style={{ color: "red" }}>
              {`(${gw.replace("_", " ").toUpperCase()})`}
            </Badge>
          );
        } else if (
          props.row.original.str_sbl_id === "" &&
          (gw === "sbl_visa" || gw === "sbl_master")
        ) {
          return (
            <Badge key={idx} className='m-1' color="light" style={{ color: "red" }}>
              {`(${gw.replace("_", " ").toUpperCase()})`}
            </Badge>
          );
        } else if (
          props.row.original.str_ucbl_id === "" &&
          (gw === "ucbl_visa" || gw === "ucbl_master")
        ) {
          return (
            <Badge key={idx} className='m-1' color="light" style={{ color: "red" }}>
              {`(${gw.replace("_", " ").toUpperCase()})`}
            </Badge>
          );
        } else if (
          props.row.original.str_brc_id === "" &&
          (gw === "visa_brac" || gw === "master_brac")
        ) {
          return (
            <Badge key={idx} className='m-1' color="light" style={{ color: "red"}}>
              {`(${gw.replace("_", " ").toUpperCase()})`}
            </Badge>
          );
        } else if (
          props.row.original.dbb_s_merchant_id === "" &&
          props.row.original.dbbl_s_terminal_id === "" &&
          (gw === "visa_dbbl" || gw === "master_dbbl" || gw === "nexus_dbbl")
        ) {
          return (
            <Badge key={idx} className='m-1' color="light" style={{ color: "red" }}>
              {`(${gw.replace("_", " ").toUpperCase()})`}
            </Badge>
          );
        } else {
          return props.row.original[gw] === 1 ? (
            <Badge key={idx} className='m-1'  color="light"><span className="align-middle d-flex align-items-center"><i style={{ color:'green' }} className="glyph-icon simple-icon-check"></i>&nbsp;{gw.replace("_", " ").toUpperCase()}</span></Badge>
          ) : (
            <Badge key={idx} className='m-1'  color="light"><span className="align-middle d-flex align-items-center"><i style={{ color:'red' }} className="glyph-icon simple-icon-close"></i>&nbsp;{gw.replace("_", " ").toUpperCase()}</span></Badge>
          );
        }
      }),
  },
];

export default GatewayListColumns;
