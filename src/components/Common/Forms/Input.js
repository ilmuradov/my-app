import classes from './Input.module.css'

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={classes.item}>
            <div className={classes.input + " " + (hasError ? classes.error : "")}>
                <input {...input} {...props} />
            </div>
            {hasError && <span> {meta.error} </span>}
        </div>
    )
}