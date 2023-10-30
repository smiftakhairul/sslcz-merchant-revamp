import React, { useEffect, useState } from "react";
import FormGroupField from "components/bootstrap/custom-form-groups";
import { prepareFormFields } from "helpers/form";
import { Button, Form, FormGroup } from "reactstrap";
import CardWrapper from "../../../../containers/wrapper/card-wrapper";

const PreviousPnr = (props) => {
  // const [isLoading, setIsLoading] = useState(false);
  const [type] = useState('OLD_PNR');
  const [fields, setFields] = useState([]);

  useEffect(() => {
    getFields();
  }, []);

  const getFields = () => {
    let fields = [
        {
            bn_level: '',
            class: 'col-md-3',
            date_format: null,
            default: null,
            en_level: 'Old PNR',
            field_name: 'ssl_id',
            is_required: true,
            options: null,
            placeholder: null,
            sequence: 2,
            show_time: false,
            type: 'text',
        }
    ];

    setFields(fields);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    let form = document.getElementById("prevPnrForm");
    let formData = prepareFormFields(form);
    props.setType(type);
    props.onSubmitHandler(formData);
  };

  const fieldContent = () => {
    return <React.Fragment>
        <Form onSubmit={onFormSubmit} id="prevPnrForm">
            <div className="row">
                {fields.map(
                    (field, index) => {
                        return (
                        <div className="col-md-8" key={index}>
                            <FormGroupField
                                label={field.en_level || ""}
                                type={field.type}
                                name={field.field_name || ""}
                                class={""}
                                id={""}
                                placeholder={field.en_level || ""}
                                options={field.options || []}
                                required={field.is_required || false}
                                defaultValue={field.default || ''}
                                showTime={field.show_time || false}
                                format={field.date_format || null}
                                isClearable={field.type === 'date' ? false : true}
                            ></FormGroupField>
                        </div>
                        );
                    }
                )}

                <div className="col-md-4">
                    <FormGroup className="mb-0 mt-4 search-action-group">
                        <Button type="submit" color="primary" className="with_icon_btn btn-sm mb-2 mr-2">
                            <span><span className="align-middle"><i className="glyph-icon simple-icon-magnifier"></i></span> Search</span>
                        </Button>
                    </FormGroup>
                </div>
            </div>
        </Form>
    </React.Fragment>
  };

  return (
    <div className="">
      <CardWrapper
        toggleOn={true}
        isOpen={true}
        isDefaultHeader={true}
        headerTitle="Previous PNR"
        footerEnabled={false}
        isLoading={false}
        bodyContent={fieldContent}
      />
    </div>
  );
}

export default PreviousPnr;
