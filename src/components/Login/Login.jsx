import classes from './Login.module.css'
import {Field, reduxForm} from "redux-form";

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <div className={classes.container}>
            <div className={classes.h_container}>
                <h1> Login </h1>
            </div>
        <div className={classes.formContainer}>
            <ReduxLoginForm onSubmit={onSubmit} />
            <Welcome />
        </div>

        </div>
    )
}

const Welcome = () => {
    return (
        <div className={classes.welcomeContainer}>
            <h2> Welcome! </h2>
            <p> We are glad to see you here. </p>
            <p> Please enter your accaunt data to acces your accaunt. </p>
        </div>
    )
}

const LoginForm = (props) => {
    console.log(props)
    return (
        <form onSubmit={props.handleSubmit} className={classes.form}>
            <h2> Please enter your accaunt data </h2>
            <div className={classes.inputDiv}> <Field component={'input'} name={'name'} placeholder={'name'} type={'text'} /> </div>
            <div className={classes.inputDiv}> <Field component={'input'} name={'password'} placeholder={'password'} type={'password'} /> </div>
            <label className={classes.checkboxDiv}> <Field component={'input'} name={'checkbox'} type={'checkbox'} /> <p> Remember me </p> </label>
            <button className={classes.btn}> Submit </button>
        </form>
    )
}

const ReduxLoginForm = reduxForm({
    form: 'login'
})(LoginForm)


export default Login;