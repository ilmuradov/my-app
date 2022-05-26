import React from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { maxLengthCreator } from '../../../../utils/validators';
import classes from './SendMessage.module.css'

const maxLength = maxLengthCreator(5);

const SendMessage = (props) => {
    const onSubmit = (values) => {
        props.sendMessage(values.message)
    }

    return (
            <div className={props.night ? classes.container : classes.container__day}>
                <ReduxSendMessage onSubmit={onSubmit} night={props.night} />
            </div>
    )
}

const SendMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={props.night ? classes.subcontainer : classes.subcontainer__day}>
            <Field className={classes.input} validate={[maxLength]} component={'input'} name={'message'} placeholder={'Message...'} />
            <button className={props.night ? classes.button : classes.button__day}> Send </button>
        </form>
    )
}

const ReduxSendMessage = reduxForm({
    form: 'typeMessage'
})(SendMessageForm)

const mapDispatchToProps = (state) => ({
    night: state.settings.night
})

export default compose(
    connect(mapDispatchToProps)
)(SendMessage);