import React, { useState } from  'react';


const Form = (props) => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});
    /* const [fnameError, setFnameError] = useState("");
    const [lnameError, setlnameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [CpasswordError, setCPasswordError] = useState(""); */
    


    const createUser = (e) => {
        e.preventDefault();
        //const newUser = { fname, lname, email, password, confirmPassword };
        //console.log("Welcome", newUser);

    // Validation rules
    const newErrors = {};
    if (fname.length < 2) {
        newErrors.fname = 'First Name must be at least 2 characters';
    }
    if (lname.length < 2) {
        newErrors.lname = 'Last Name must be at least 2 characters';
    }
    if (email.length < 5) {
        newErrors.email = 'Email must be at least 5 characters';
    }
    if (password.length < 8) {
        newErrors.password = 'Password must be at least 8 characters';
    }
    if (password !== confirmPassword) {
        newErrors.confirmPassword = 'Passwords must match';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
        // Form is valid, submit the data or perform further actions
        console.log('Form submitted:', {
        fname,
        lname,
        email,
        password,
        confirmPassword
        });
        }
}


    return (
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => setFname(e.target.value) } value={fname} />
                {errors.fname && <p>{errors.fname}</p>}
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setLname(e.target.value) } value={lname} />
                {errors.lname && <p>{errors.lname}</p>}
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } value={email} />
                {errors.email && <p>{errors.email}</p>}
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } value={password} />
                {errors.password && <p>{errors.password}</p>}
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ (e) => setConfirmPassword(e.target.value) } value={confirmPassword} />
                {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
            </div>
            <input type="submit" value="Create User" />
        </form>
    );

};




export default Form;