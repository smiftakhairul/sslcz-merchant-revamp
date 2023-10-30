import { minSettlementBalanceRequest } from "constants/default-values"

export const createSettlementReqFields = () => {
    return [
        {
            label: "Requested Balance",
            infoText: <>
                <ul className = "bg-info text-white py-2 pl-2">
                    * Minimum settlement request balance {minSettlementBalanceRequest}
                </ul>
            </> ,
            type: "number",
            id: "request_balance",
            name: "request_balance",
            placeholder: "Enter amount of request balance",
            min: minSettlementBalanceRequest,
            required: true,
            wrapperClass: 'col-md-12'
        }
    ]
}