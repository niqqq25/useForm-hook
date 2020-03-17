import React from "react";

import Input from "./Input";
import useForm from "./useForm";

import validationSchema from "./validationSchema";

function Form() {
    const [inputs, { setValue, validateInputs, validateInput }] = useForm(
        { username: "", password: "", passwordRepeat: "" },
        validationSchema
    );

    const { username, password, passwordRepeat } = inputs;

    async function handleSubmit(event) {
        event.preventDefault();

        const isValid = await validateInputs();
        if (!isValid) {
            return;
        }

        //do stuff here
    }

    return (
        <form onSubmit={handleSubmit}>
            Form
            <Input
                label="Username"
                onChange={setValue}
                value={username.value}
                name={"username"}
                onBlur={validateInput}
                error={username.error}
            />
            <Input
                label="Password"
                onChange={setValue}
                value={password.value}
                name={"password"}
                onBlur={name => {
                    validateInput(name);
                    validateInput("passwordRepeat");
                }}
                error={password.error}
            />
            <Input
                label="Repeat password"
                onChange={setValue}
                value={passwordRepeat.value}
                name={"passwordRepeat"}
                onBlur={validateInput}
                error={passwordRepeat.error}
            />
            <input type="submit" value="Submit" />
        </form>
    );
}

export default Form;
