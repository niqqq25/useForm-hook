import React from "react";

const noop = () => {};

function Input({ label, onChange, name, value, error, onBlur = noop }) {
    const kebabCaseLabel = label.toLowerCase().replace(" ", "-");

    function handleChange(event) {
        const { name, value } = event.target;
        onChange({ name, value });
    }

    function handleBlur(event) {
        const { name } = event.target;
        onBlur(name);
    }

    return (
        <div>
            <label htmlFor={kebabCaseLabel}>{label + " "}</label>
            <input
                type="text"
                id={kebabCaseLabel}
                name={name || label}
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
            ></input>
            {error && <span style={{ color: "red" }}>{error}</span>}
        </div>
    );
}

export default Input;
