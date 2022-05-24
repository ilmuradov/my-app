import classes from './UsersProfile.module.css'

const UsersProfile = (props) => {
    console.log(props)
    return (
        <div className={classes.profile}>
            <div className={classes.container}>
                
                if (props.profile === null) {
                    <div className={classes.photoNull}></div>
                } else {
                    <img alt='' className={classes.avatarPhoto} src={props.profile.photos.large}/>
                }
                
                <div className={classes.info}>
                    <h2 className={classes.fullName}> {props.profile.fullName} </h2>

                    <div>
                        {props.profile.lookingForAJob ?
                            <div className={classes.looking}>
                                <h4> Looking for job </h4>
                                <div className={classes.description}>
                                    <p>
                                        <b> Job description: </b> {props.profile.lookingForAJobDescription}
                                    </p>
                                </div>
                            </div>
                            :
                            <p> Not looking for a job </p>
                        }
                    </div>

                    <div>
                        <p> {props.profile.aboutMe} </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UsersProfile