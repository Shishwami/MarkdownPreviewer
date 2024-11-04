import { useState } from "react";

function ToggleButton({ id, name }) {

    const [enabled, setEnabled] = useState(true);

    const toggle = () => {
        if (enabled) {
            setEnabled(false);
            document.getElementById(id).style.display = "none";

        } else {
            setEnabled(true);
            document.getElementById(id).style.display = "block";
        }

    }

    return (
        <button onClick={toggle}>{name}</button>
    );
}
export default ToggleButton;