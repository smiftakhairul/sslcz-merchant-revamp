import FormGroupField from "components/bootstrap/custom-form-groups";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { getSearchParams, prepareFormFields } from "../../../../helpers/form";
import CardWrapper from "../../../../containers/wrapper/card-wrapper";

const TrackTransaction = (props) => {
  const history = useHistory();
  const location = useLocation();

  const [isLoading, setIsLoading] = useState(false);
  const [fields, setFields] = useState([]);
  const [urlParams, setUrlParams] = useState({});

  useEffect(() => {
    setUrlParams(getSearchParams());
    getFields();
  }, []);

  const getFields = async () => {
    setIsLoading(true);
    await setFields([
      {
        bn_level: "",
        class: "col-md-3",
        date_format: null,
        default: null,
        en_level: "Merchant Transaction ID",
        field_name: "transaction_id",
        is_required: true,
        options: null,
        placeholder: null,
        sequence: 2,
        show_time: false,
        type: "text",
      },
    ]);
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

  const bodyContent = () => {
    return (
      <>
        <div className="row">
          {fields.map((field, index) => {
            return (
              <div className="col-md-8" key={index}>
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
              </div>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <div className="">
      <CardWrapper
        headerTitle="Track Merchants"
        toggleOn={true}
        isDefaultHeader={true}
        footerEnabled={true}
        isDefaultFooter={true}
        footerIconOn={true}
        csvEnabled={false}
        isForm={true}
        onFormSubmit={onFormSubmit}
        isLoading={isLoading}
        bodyContent={bodyContent}
        clearSearchFields={() => updateSearchParams({}, 'clear')}
      />
    </div>
  );
};

export default TrackTransaction;
