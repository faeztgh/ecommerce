import { auth } from "../../../Firebase/firebaseConfig";

export const AuthFuncs = () => {
    // Signup function
    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
    }
};
