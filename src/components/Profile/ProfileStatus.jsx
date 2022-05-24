import React, { setState } from 'react';
import classes from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    } 

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    } 

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div className={classes.status}>
                        <span onDoubleClick={this.activateEditMode}> {this.state.status} </span>
                    </div>
                }         

                {this.state.editMode &&
                    <div className={classes.statusEdit}>
                        <input className={classes.statusInput} autoFocus={true} onBlur={this.deactivateEditMode} onChange={this.onStatusChange} type="text" value={this.state.status} />
                    </div>
                }
            </>
        )
   }
}

export default ProfileStatus;