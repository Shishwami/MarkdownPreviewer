import { useState } from "react";

function ToggleButton({ id, name }) {

    const [enabled, setEnabled] = useState(true);

    const toggle = () => {
        if (enabled) {
            setEnabled(false);
            document.getElementById(id).style.display = "none";

        } else {
            setEnabled(true);
            document.getElementById(id).style.display = "flex";
        }

    }

    return (
        <button
            onClick={toggle}
            className={`btn-${enabled ? "enabled" : "disabled"}`}
        >{name}</button>
    );
}
export default ToggleButton;