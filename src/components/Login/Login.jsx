import classes from './Login.module.css'

const Login = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.h_container}>
                <h1> Login </h1>
            </div>

            <div className={classes.subContainer}>
                <div className={classes.loginForm}>
                    <label className={classes.loginLabel} htmlFor='username'> Username: </label>
                    <input className={classes.loginInput} type='text' placeholder='Username...' name='username'/>
                </div>
            </div>
        </div>
    )
}

export default Login;