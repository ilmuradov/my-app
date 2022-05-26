import classes from './Login.module.css'
import {Field, reduxForm} from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { maxLengthCreator, minLengthCreator, required } from '../../utils/validators';
import { Input } from '../Common/Forms/Input';

const minLength = minLengthCreator(8);
const maxLength = maxLengthCreator(20);

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <div className={props.night ? classes.container : classes.container__day}>
            <div className={classes.h_container}>
                <h1> Login </h1>
            </div>
        <div className={classes.formContainer}>
            <ReduxLoginForm nameTouched={props.nameTouched} onSubmit={onSubmit} />
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
    // console.log(props)
    return (
        <form onSubmit={props.handleSubmit} className={classes.form}>
            <h2> Please enter your accaunt data </h2>
            <Field component={Input} name="name" placeholder="name" validate={[required, maxLength]} />
            <Field component={Input} name={'password'} placeholder={'password'} type={'password'} validate={[required, minLength]} />
            <label className={classes.checkboxDiv}> <Field component={'input'} name={'checkbox'} type={'checkbox'} /> <p> Remember me </p> </label>
            <button className={classes.btn}> Submit </button>
        </form>
    )
}

const ReduxLoginForm = reduxForm({
    form: 'login'
})(LoginForm)


const mapStateToProps = (state) => ({
    night: state.settings.night
})

export default compose(
    connect(mapStateToProps)
)(Login);