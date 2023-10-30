import "chartjs-plugin-streaming";
import BreadcrumbWrapper from "containers/wrapper/breadcrumb-wrapper";
import { ThemeColors } from 'helpers/theme-colors';
import moment from "moment";
import { Fragment, useEffect, useState } from 'react';
import {
    Row
} from "reactstrap";
import apiClient from 'services/axios';
import { Colxx } from "../../../components/bootstrap/custom-bootstrap";
import Channel30Days from './_partials/30-days-channel';
import Summary30Days from './_partials/30-days-summary';
import ChannelTransactions from './_partials/channel-transactions';
import ComparisonSummary from './_partials/comparison-summary';
import LatestTransactions from "./_partials/latest-transactions";
// import HourlyGraph from "./partials/hourly-graph";
import SuccessGraph from './_partials/success-graph';
import Summary from './_partials/summary';

const colors = ThemeColors();

const JumbotronUi = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [activeFirstTab, setActiveFirstTab] = useState(['1','1']);
    const [dashboard, setDashboard] = useState([]);
    const [comparisonSummary, setComparisonSummary] = useState({});
    const [last30DaysSummary, setLast30DaysSummary] = useState({});
    const [summary, setSummary] = useState({});
    const [channelTransactionData, setChannelTransactionData] = useState({});
    const [channelAmountData, setChannelAmountData] = useState({});
    const [channelShareData, setChannelShareData] = useState({});
    const [successAmountData, setSuccessAmountData] = useState({});
    const [successTransactionData, setSuccessTransactionData] = useState({});
    const [latestTransactions, setLatestTransactions] = useState([]);
    const [paymentQR, setPaymentQR] = useState({});
    
    useEffect(() => {
        getDashboardData();
    }, []);

    const getDashboardData = async () => {
        setIsLoading(true);

        let params = {};
        try {
            await apiClient('getMerchantDashboard', params).then((response) => {
                if (response.data.code === 200 || response.data.status === "SUCCESS") {
                    setDashboard(response.data.data.dashboard || []);
                    setSummary(response.data.data.dashboard?.store_summary || {});
                    setComparisonSummary(response.data.data.dashboard?.today_vs_yesterday_transaction_summary || {});
                    setLast30DaysSummary(response.data.data.dashboard?.last_30_days_transaction_summary || {});
                    setLatestTransactions(response.data.data.dashboard?.latest_transactions || []);
                    setPaymentQR(response.data.data.dashboard?.payment_qr || {});
              
                    if (response.data.data.dashboard['30_days_transactions_by_channel']) {
                        mapChannelTransactionsData(response);
                        mapChannelTransactionsData(response, 'amount');
                    }
                    if (response.data.data.dashboard['30_days_channel_share']) {
                        mapChannelShareData(response);
                    }
                    if (response.data.data.dashboard['30_days_successful_transactions']) {
                        mapSuccessTransactionsData(response);
                    }
                }
            });
        } catch (error) {
            console.log(error);
        }
        
        setIsLoading(false);
    };

    const mapChannelTransactionsData = (response, type = 'count') => {
        let ctData = response.data.data.dashboard['30_days_transactions_by_channel'];
        let ctLabels = [];
        let ctDataSetList = [];
        let colorList = response.data.data.dashboard?.chart_or_graph_colors || [];

        for (let key in ctData) {
            for (let i = 0; i < ctData[key].length; i++) {
                if (ctData[key][i].t_date && !ctLabels.includes(ctData[key][i].t_date)) {
                    ctLabels.push(ctData[key][i].t_date);
                }
            }
        }

        let i = 0;
        for (let key in ctData) {
            i++;
            let ctDataSet = {};
            ctDataSet.label = key;
            ctDataSet.data = [];

            ctDataSet = {...ctDataSet, ...{
                borderColor: colorList.hasOwnProperty(i) ? colorList[i] : '#badc58',
                pointBackgroundColor: colors.foregroundColor,
                pointBorderColor: colorList.hasOwnProperty(i) ? colorList[i] : '#badc58',
                pointHoverBackgroundColor: colorList.hasOwnProperty(i) ? colorList[i] : '#badc58',
                pointHoverBorderColor: colors.foregroundColor,
                pointRadius: 4,
                pointBorderWidth: 2,
                pointHoverRadius: 5,
                fill: false,
                borderWidth: 2
            }};

            for (let j = 0; j < ctLabels.length; j++) {
                let value = 0;
                for (let i = 0; i < ctData[key].length; i++) {
                    if (ctData[key][i].t_date && ctData[key][i].t_date === ctLabels[j]) {
                        if (type === 'count') {
                            value = ctData[key][i].total_transaction || 0;
                        } else {
                            value = ctData[key][i].total_amount || 0;
                        }
                        break;
                    }
                }
                ctDataSet.data.push(value);
            }

            ctDataSetList.push(ctDataSet);
        }

        for (let j = 0; j < ctLabels.length; j++) {
            ctLabels[j] = moment(ctLabels[j], 'YYYY-MM-DD').format('DD-MM-YYYY').toString();
        }

        if (type === 'count') {
            setChannelTransactionData({labels: ctLabels, datasets: ctDataSetList});
        } else {
            setChannelAmountData({labels: ctLabels, datasets: ctDataSetList});
        }
    };

    const mapChannelShareData = (response) => {
        let csData = response.data.data.dashboard['30_days_channel_share'];
        let csLabels = [];
        let csDataList = [];
        let csBorderColors = [];
        let csBgColors = [];
        let colorList = response.data.data.dashboard?.chart_or_graph_colors || [];

        for (let i = 0; i < csData.length; i++) {
            csLabels.push(csData[i].channel);
            csDataList.push(csData[i].total_transaction);
            csBorderColors.push(colorList.hasOwnProperty(i) ? colorList[i] : '#badc58');
            csBgColors.push(colorList.hasOwnProperty(i) ? colorList[i] : '#badc58');
        }

        let csDataSet = {
            labels: csLabels,
            datasets: [
              {
                label: '',
                borderColor: csBorderColors,
                backgroundColor: csBgColors,
                borderWidth: 2,
                data: csDataList,
              }
            ]
        }

        setChannelShareData(csDataSet);
    };

    const mapSuccessTransactionsData = (response) => {
        let sData = response.data.data.dashboard['30_days_successful_transactions'];
        let sLabels = [];
        let amountList = [];
        let trxList = [];

        for (let i = 0; i < sData.length; i++) {
            sLabels.push(sData[i].t_date);
            amountList.push(sData[i].total_amount);
            trxList.push(sData[i].total_transaction);
        }

        for (let i = 0; i < sLabels.length; i++) {
            sLabels[i] = moment(sLabels[i], 'YYYY-MM-DD').format('DD-MM-YYYY').toString();
        }

        let barChartData = {
            labels: sLabels,
            datasets: [
              {
                label: 'Transaction',
                data: trxList,
                borderColor: colors.themeColor1,
                pointBackgroundColor: colors.foregroundColor,
                pointBorderColor: colors.themeColor1,
                pointHoverBackgroundColor: colors.themeColor1,
                pointHoverBorderColor: colors.foregroundColor,
                pointRadius: 4,
                pointBorderWidth: 2,
                pointHoverRadius: 5,
                fill: false,
                borderWidth: 2
              }
            ]
        }
        let barChartData2 = {
            labels: sLabels,
            datasets: [
              {
                label: 'Amount',
                data: amountList,
                borderColor: 'rgb(255, 99, 132)',
                pointBackgroundColor: 'rgba(255, 99, 132, 0.10)',
                pointBorderColor: 'rgb(255, 99, 132)',
                pointHoverBackgroundColor: 'rgb(255, 99, 132)',
                pointHoverBorderColor: 'rgba(255, 99, 132, 0.10)',
                pointRadius: 4,
                pointBorderWidth: 2,
                pointHoverRadius: 5,
                fill: false,
                borderWidth: 2
              }
            ]
        }

        setSuccessTransactionData(barChartData);
        setSuccessAmountData(barChartData2);
    };

    return (
        <Fragment>
            <Row>
                <BreadcrumbWrapper
                    heading="menu.dashboard"
                    match={props.match}
                />
            </Row>
            <Row className="">
                <Colxx md="6" xxs="12">
                    <Summary
                        summary={summary}
                        isLoading={isLoading}
                    />
                </Colxx>
                <Colxx md="6" xxs="12">
                    <ComparisonSummary
                        transaction={comparisonSummary}
                        isLoading={isLoading}
                    />
                </Colxx>
            </Row>
            {/* <Row className="mb-4">
                <Colxx md="8" xxs="12">
                    <HourlyGraph
                        activeFirstTab={activeFirstTab[0]}
                        toggleFirstTab={setActiveFirstTab[0]}
                    />
                </Colxx>
            </Row> */}
            <Row className="">
                <Colxx md="6" xxs="12">
                    <Summary30Days
                        transaction={last30DaysSummary}
                        isLoading={isLoading}
                    />
                </Colxx>
                <Colxx md="6" xxs="12">
                    <Channel30Days
                        channelShareData={channelShareData}
                        isLoading={isLoading}
                    />
                </Colxx>
                {/* <Colxx md="4" xxs="12">
                    <PaymentQR
                        qrData={paymentQR}
                        isLoading={isLoading}
                    />
                </Colxx> */}
            </Row>
            <Row className="">
                <Colxx md="12" xxs="12">
                    <ChannelTransactions
                        isLoading={isLoading}
                        activeFirstTab={activeFirstTab}
                        toggleFirstTab={setActiveFirstTab}
                        successTransactionData={channelTransactionData}
                        successAmountData={channelAmountData}
                    />
                </Colxx>
            </Row>
            <Row className="">
                <Colxx md="12" xxx="12">
                    <SuccessGraph
                        activeFirstTab={activeFirstTab}
                        toggleFirstTab={setActiveFirstTab}
                        successTransactionData={successTransactionData}
                        successAmountData={successAmountData}
                        isLoading={isLoading}
                    />
                </Colxx>
            </Row>
            <Row className="">
                <Colxx md="12" xxs="12">
                    <LatestTransactions
                        transactions={latestTransactions}
                        isLoading={isLoading}
                    />
                </Colxx>
            </Row>
        </Fragment>
    );
}

export default JumbotronUi;
