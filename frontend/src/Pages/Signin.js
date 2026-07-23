import React, { useContext, useState } from 'react'
import './Signin.css'
import axios from 'axios'
import { AuthContext } from '../Context/AuthContext.js'
import Switch from '@material-ui/core/Switch';

function Signin() {
    const [isStudent, setIsStudent] = useState(true)
    const [admissionId, setAdmissionId] = useState("2023STUDENT01")
    const [employeeId, setEmployeeId] = useState("101STAFF")
    const [password, setPassword] = useState("123456")
    const [error, setError] = useState("")
    const { dispatch } = useContext(AuthContext)

    const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/";

    const fillDemoCredentials = (role) => {
        if (role === 'student') {
            setIsStudent(true);
            setAdmissionId("2023STUDENT01");
            setPassword("123456");
        } else if (role === 'staff') {
            setIsStudent(false);
            setEmployeeId("101STAFF");
            setPassword("123456");
        } else if (role === 'admin') {
            setIsStudent(false);
            setEmployeeId("ADMIN01");
            setPassword("admin123");
        }
        setError("");
    }

    const loginCall = async (userCredential, dispatch) => {
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post(API_URL + "api/auth/signin", userCredential);
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        }
        catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err })
            setError("Wrong Password Or Username")
        }
    }

    const handleForm = (e) => {
        e.preventDefault()
        isStudent
            ? loginCall({ admissionId, password }, dispatch)
            : loginCall({ employeeId, password }, dispatch)
    }

    return (
        <div className='signin-container'>
            <div className="signin-card">
                {/* Demo Credentials Picker */}
                <div className="demo-credentials-box">
                    <p className="demo-title">Fast Demo Access (Prefilled):</p>
                    <div className="demo-btn-group">
                        <button 
                            type="button" 
                            className={`demo-chip ${isStudent ? 'active-chip' : ''}`} 
                            onClick={() => fillDemoCredentials('student')}
                        >
                            Student Login
                        </button>
                        <button 
                            type="button" 
                            className={`demo-chip ${!isStudent && employeeId !== 'ADMIN01' ? 'active-chip' : ''}`} 
                            onClick={() => fillDemoCredentials('staff')}
                        >
                            Staff Login
                        </button>
                        <button 
                            type="button" 
                            className={`demo-chip ${employeeId === 'ADMIN01' ? 'active-chip' : ''}`} 
                            onClick={() => fillDemoCredentials('admin')}
                        >
                            Admin Login
                        </button>
                    </div>
                </div>

                <form onSubmit={handleForm}>
                    <h2 className="signin-title"> Log in</h2>
                    <p className="line"></p>
                    <div className="persontype-question">
                        <p>Are you a Staff member ?</p>
                        <Switch
                            checked={!isStudent}
                            onChange={() => {
                                const nextState = !isStudent;
                                setIsStudent(!nextState);
                                if (!nextState) {
                                    setAdmissionId("2023STUDENT01");
                                } else {
                                    setEmployeeId("101STAFF");
                                }
                                setPassword("123456");
                            }}
                            color="primary"
                        />
                    </div>
                    {error && <div className="error-message"><p>{error}</p></div>}
                    <div className="signin-fields">
                        <label htmlFor={isStudent ? "admissionId" : "employeeId"}>
                            <b>{isStudent ? "Admission ID" : "Employee ID"}</b>
                        </label>
                        <input 
                            className='signin-textbox' 
                            type="text" 
                            placeholder={isStudent ? "Enter Admission ID" : "Enter Employee ID"} 
                            name={isStudent ? "admissionId" : "employeeId"} 
                            value={isStudent ? admissionId || "" : employeeId || ""} 
                            required 
                            onChange={(e) => { isStudent ? setAdmissionId(e.target.value) : setEmployeeId(e.target.value) }}
                        />
                        <label htmlFor="password"><b>Password</b></label>
                        <input 
                            className='signin-textbox' 
                            type="password" 
                            minLength='6' 
                            placeholder="Enter Password" 
                            name="psw" 
                            value={password || ""} 
                            required 
                            onChange={(e) => { setPassword(e.target.value) }} 
                        />
                    </div>
                    <button className="signin-button">Log In</button>
                    <a className="forget-pass" href="#home">Forgot password?</a>
                </form>
                <div className='signup-option'>
                    <p className="signup-question">Don't have an account? Contact Librarian</p>
                </div>
            </div>
        </div>
    )
}

export default Signin