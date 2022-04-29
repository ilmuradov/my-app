import classes from './Data.module.css';

const Data = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.logo}> <img src={props.profile.photos.large}/> </div>
            <div className={classes.name}> <h2> {props.profile.fullName} </h2> </div>
        </div>
    )
}

export default Data;