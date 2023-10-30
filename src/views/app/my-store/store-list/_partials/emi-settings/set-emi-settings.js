import { Colxx } from "components/bootstrap/custom-bootstrap";
import FormGroupField from "components/bootstrap/custom-form-groups";
import notificationManager from "components/notifications/notification-manager";
import { ReactTableWithPaginationCard } from "components/table/table";
import emiSettingsColumns from "containers/column-definition/my-store/emi-settings-def";
import { emiFields } from "containers/form-fields/my-store/emi-settings-form-fields";
import FormWrapper from "containers/wrapper/form-wrapper";
import { getDefaultEmiTenureRates, stringToJson } from "helpers/common";
import { prepareFormFields } from "helpers/form";
import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Form, FormGroup, Row } from "reactstrap";
import apiClient from "services/axios";
import CardWrapper from "../../../../../../containers/wrapper/card-wrapper";

const emiStatusOptions = [
    {label: "Disable", value: 0},
    {label: "Enable (EMI with parameters)", value: 1},
    {label: "AUTO EMI (EMI with specific amount & charges will bear by MERCHANT)", value: 3},
    {label: "Global EMI (EMI with specific amount & charges will bear by CUSTOMER/USER)", value: 4},
];

const SetEmiSettings = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [emiBanks, setEmiBanks] = useState([]);
  const [store, setStore] = useState({});

  useEffect(() => {
    getData();
  }, [props.searchData]);

  const getData = async () => {
    setIsLoading(true);
    let params = {};
    let body = {...props.searchData,...{stid: props.stid}};

    try {
      await apiClient("emiSettings", params, body).then((response) => {
        if (response.data.code === 200 || response.data.status === "SUCCESS") {
            setEmiBanks(response.data.data.emi_bank_list || []);
            setStore(response.data.data.store || {});
        }
      });
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

    const onFormSubmit = async (e) => {
        e.preventDefault();
        let form = document.getElementById('updateEmiSettingsForm');
        let formData = prepareFormFields(form);
        formData.stid = props.stid;
        // console.log(formData);

        try {
            await apiClient("updateEmiSettings", {}, formData).then((response) => {
                if (response.data.code === 200 || response.data.status === "SUCCESS") {
                    if (response.data.data.store) {
                        notificationManager.success(
                            response.data.message || "Store emi settings successfully updated.",
                            "Success!"
                        );
                    }
                }
            });
        } catch (error) {
            console.log(error);
        }
    };

    const setAllCheckedOrUnchecked = (check = true) => {
        // console.log(check);
        let checkboxes = document.getElementById('updateEmiSettingsForm').querySelectorAll('input[type="checkbox"]:not(#agree_emi)');
        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = check;
        }
    };

  const emiBankBodyContent = (emi, index) => {
    let emiStore = store?.emi_bank_stores?.find(item => item.bank_id === emi?.bank_id);
    let emiStoreRate = stringToJson(emiStore?.emi_inst);

    let emiRates = [];
    for (const [tenure, percentage] of Object.entries(emi?.rate)) {
        let defaultTenureRates = Object.keys(emiStoreRate).length
            ? getDefaultEmiTenureRates()
            : getDefaultEmiTenureRates(emi?.bank_id);

        let calcPerc = emiStoreRate.hasOwnProperty(tenure) 
            ? emiStoreRate[tenure] 
            : (defaultTenureRates.hasOwnProperty(tenure) ? defaultTenureRates[tenure] : percentage)

        let row = {
            index: index,
            bank_id: emi?.bank_id, 
            emi_store_rate: emiStoreRate,
            tenure: tenure,
            percentage: calcPerc * 100,
            status_checked: emiStoreRate.hasOwnProperty(tenure) ? true : false,
        };
        emiRates.push(row);
    }

    return <React.Fragment>
        <FormGroupField
            checkboxLabel="Whether the bank is enabled"
            type="checkbox"
            id={"bank_enable_" + index}
            name={"bank_enable[" + emi?.bank_id + "]"}
            placeholder="Checkbox"
            defaultValue={emiStore?.status ? true : false}
            required={false}
        />
        <ReactTableWithPaginationCard 
            data={emiRates} 
            columnDefinition={emiSettingsColumns}
            defaultPageSize={emiRates.length} 
            serverSide={false}
            showPagination={false}
        />
    </React.Fragment>
  };

  const bodyContent = () => {
    return <React.Fragment>
        <Row>
            <Colxx md="12" className="text-right mb-2">
                <ButtonGroup>
                    <Button color="success" className="btn btn-xs mr-1" onClick={() => setAllCheckedOrUnchecked(true)}>
                        <span className="align-middle d-flex align-items-center"><i className="glyph-icon simple-icon-check"></i>&nbsp;Check All</span>
                    </Button>
                    <Button color="warning" className="btn btn-xs" onClick={() => setAllCheckedOrUnchecked(false)}>
                        <span className="align-middle d-flex align-items-center"><i className="glyph-icon simple-icon-close"></i>&nbsp;Uncheck All</span>
                    </Button>
                </ButtonGroup>
            </Colxx>
        </Row>
        <Form onSubmit={onFormSubmit} id="updateEmiSettingsForm">
        <Row className="emi_settings">
            {
                emiBanks.map((emi, index) => {
                    return <Colxx md="4" className="" key={index}>
                        <CardWrapper
                            headerTitle={emi?.bank_name || 'Not Mentioned'}
                            headerBackground="bg-info"
                            toggleOn={true}
                            isOpen={true}
                            isDefaultHeader={true}
                            footerEnabled={false}
                            isLoading={false}
                            bodyContent={() => emiBankBodyContent(emi, index)}
                        />
                    </Colxx>
                })
            }
        </Row>

        <FormWrapper fields = {emiFields(store || null)}/>
        
        <Row>
            <div className="col-md-12 pt-4">
                <FormGroup className="mb-0">
                    <Button type="submit" color="primary" className="with_icon_btn mb-2 mr-2">
                        <span>Update EMI Configuration</span>
                    </Button>
                </FormGroup>
            </div>
        </Row>
        </Form>
    </React.Fragment>;
  };

  return (
    <div className="">
      <CardWrapper
        headerTitle="EMI Settings"
        toggleOn={true}
        isOpen={true}
        isDefaultHeader={true}
        footerEnabled={false}
        isLoading={isLoading}
        bodyContent={bodyContent}
        // totalRows={0}
      />
    </div>
  );
};

export default SetEmiSettings;
