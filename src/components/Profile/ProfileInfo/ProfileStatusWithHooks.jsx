import React, {useEffect, useState} from 'react';


const ProfileStatusWithHooks = (props) => {

    const [status, setStatus] = useState(props.status)
    const [editMode, setEditMode] = useState(false)

    useEffect( () => {
        setStatus(props.status)
    } , [props.status])

    const activateMode = () => {
        setEditMode(true)
    }

    const deactivateMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (event) => {
        setStatus(event.target.value)
    }

    return (
        <div>
            {!editMode && <div>
                <b>Status: </b>  <span onDoubleClick={activateMode}>{props.status || '––––––'}</span>
            </div>
            }
            {editMode && <div>
                <b>Status: </b> <input onBlur={deactivateMode} value={status} autoFocus={true} onChange={onStatusChange}/>
            </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;