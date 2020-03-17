import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    username: Yup.string().required('"Username" is required'),
    password: Yup.string().required('"Password" is required'),
    passwordRepeat: Yup.string().test(
        "password-match",
        "Passwords do not match",
        function(value) {
            const password = this.resolve(Yup.ref("password"));
            if (password) {
                return password === value;
            } else {
                return true;
            }
        }
    )
});

export default validationSchema;
