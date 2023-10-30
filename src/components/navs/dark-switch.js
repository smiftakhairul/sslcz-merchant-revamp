import React, { useEffect } from "react";
import Switch from "rc-switch";
import "rc-switch/assets/index.css";
import { defaultColor, themeColorStorageKey } from "constants/default-values";
import { useState } from "react";

const TopnavDarkSwitch = (props) => {
    const [switchChecked, setSwitchChecked] = useState(false);

    useEffect(() => {
        const color = getColor();
        const checked = color.indexOf('dark') > -1;
        setSwitchChecked(checked);
    }, []);

    const getColor = () => {
        return localStorage.getItem(themeColorStorageKey)
            ? localStorage.getItem(themeColorStorageKey)
            : defaultColor;
    };

    const changeMode = () => {
        let color = getColor();

        if (color.indexOf('dark') > -1) {
            color = color.replace('dark', 'light')
        } else if (color.indexOf('light') > -1) {
            color = color.replace('light', 'dark')
        }

        const checked = color.indexOf('dark') > -1;
        setSwitchChecked(checked);
        localStorage.setItem(themeColorStorageKey, color);
        setTimeout(() => { window.location.reload();}, 500);
    };

    return (
        <div className="d-inline-block align-middle">
            <div className="d-md-inline-block align-middle">
                <Switch
                    id="Tooltip-Switch"
                    className="custom-switch custom-switch-primary custom-switch-small"
                    checked={switchChecked}
                    onChange={changeMode}
                />
            </div>
        </div>
    );
}

export default TopnavDarkSwitch;