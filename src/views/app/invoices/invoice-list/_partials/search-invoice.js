import ReactAsyncSelect from "components/bootstrap/custom-async-select";
import FormGroupField from "components/bootstrap/custom-form-groups";
import { getAsyncFieldNames } from "helpers/common";
import { getSearchParams, prepareFormFields } from "helpers/form";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { FormGroup } from "reactstrap";
import apiClient from "services/axios";
import CardWrapper from "../../../../../containers/wrapper/card-wrapper";

const SearchInvoice = (props) => {
  const history = useHistory();
  const location = useLocation();

  const [isLoading, setIsLoading] = useState(false);
  const [fields, setFields] = useState([]);
  const [urlParams, setUrlParams] = useState({});
  const [isCsvPreparing, setIsCsvPreparing] = useState(false);

  useEffect(() => {
    setUrlParams(getSearchParams());
    getFields();
  }, []);

  const getFields = async () => {
    setIsLoading(true);
    try {
      await apiClient("invoiceSearchFields", {}, {}).then((response) => {
        if (response.data.code === 200 || response.data.status === "SUCCESS") {
          setFields(response.data.data.fields || []);
        }
      });
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const updateSearchParams = async (formData = {}, action = 'submit') => {
    let params = new URLSearchParams(formData);
    history.replace({ pathname: location.pathname, search: params.toString() });
    let searchParams = getSearchParams();
    setUrlParams(searchParams);
    props.onSubmitHandler(searchParams);
    if (action === 'clear') {
      getFields();
    }
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    let form = document.getElementById("searchForm");
    let formData = prepareFormFields(form);
    updateSearchParams(formData);
  };

  const downloadCsvHandler = (e) => {
    e.preventDefault();
    let form = document.getElementById("searchForm");
    let formData = prepareFormFields(form);
    downloadCsv(formData);
  };

  const downloadCsv = async (formData = {}) => {
    setIsCsvPreparing(true);
    let params = {};
    let body = formData;

    try {
      await apiClient("invoiceListCSVDownload", params, body).then(
        (response) => {
          if (
            response.data.code === 200 ||
            response.data.status === "SUCCESS"
          ) {
            let url = response.data.data.download_path || "#.";
            window.location.href = url;
          }
        }
      );
    } catch (error) {
      console.log(error);
    }

    setIsCsvPreparing(false);
  };

  const fieldContent = () => {
    return (
      <React.Fragment>
        <div className="row">
          {fields.map((field, index) => {
            return (
              <div className={field.class || "col-md-3"} key={index}>
                {getAsyncFieldNames().hasOwnProperty(field.field_name) ? (
                  <FormGroup>
                    <label htmlFor="exampleEmail">
                      <span>{field.en_level || ""}</span>
                    </label>
                    <ReactAsyncSelect
                      name={field.field_name || ""}
                      placeholder={field.en_level || ""}
                      action={getAsyncFieldNames()[field.field_name]}
                      required={field.is_required || false}
                    />
                  </FormGroup>
                ) : (
                  <FormGroupField
                    label={field.en_level || ""}
                    type={field.type}
                    name={field.field_name || ""}
                    className={""}
                    id={""}
                    placeholder={field.en_level || ""}
                    options={field.options || []}
                    defaultValue={
                      (urlParams.hasOwnProperty(field.field_name)
                        ? urlParams[field.field_name]
                        : "") ||
                      field.default ||
                      ""
                    }
                    required={field.is_required || false}
                    isClearable={field.type === "date" ? false : true}
                  ></FormGroupField>
                )}
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  };

  return (
    <div className="">
      <CardWrapper
        toggleOn={true}
        isDefaultHeader={true}
        footerEnabled={true}
        isDefaultFooter={true}
        footerIconOn={true}
        csvEnabled={true}
        isCsvPreparing={isCsvPreparing}
        onCsvDownload={downloadCsvHandler}
        isForm={true}
        onFormSubmit={onFormSubmit}
        isLoading={isLoading}
        bodyContent={fieldContent}
        clearSearchFields={() => updateSearchParams({}, 'clear')}
      />
    </div>
  );
};

export default SearchInvoice;
