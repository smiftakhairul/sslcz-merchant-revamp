import React from "react";
import { useState } from "react";
import { ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

const ReactButtonDropdown = (props) => {
    const [isOpen, setIsOpen] = useState(props.isOpen || false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <React.Fragment>
            <ButtonDropdown isOpen={isOpen} toggle={toggle} {...props?.direction ? {direction: props.direction} : {}}>
                <DropdownToggle caret color={props.color || ''} className={props.className || ''}>
                    {props.title || 'Text'}
                </DropdownToggle>
                <DropdownMenu>
                    {
                        (props.items || []).map((item, index) => {
                            return <DropdownItem
                                key={index}
                                {...item.onClick ? {onClick: () => item.onClick()} : {}}
                                {...props.disableToggle ? {toggle: false} : {}}
                                disabled={item.disabled || false}
                            >
                                {item.title || ''}
                            </DropdownItem>;
                        })
                    }
                </DropdownMenu>
            </ButtonDropdown>
        </React.Fragment>
    );
}
 
export default ReactButtonDropdown;