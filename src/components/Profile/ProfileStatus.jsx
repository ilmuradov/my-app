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

    componentDidUpdate(prevProps) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })            
        }
        // console.log(prevProps, prevState)
    }

    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div className={classes.status}>
                        <span onDoubleClick={this.activateEditMode}>
                            {this.state.status ? this.state.status : 'No status, please set your status.'} 
                        </span>
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