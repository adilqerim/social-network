import React, {ChangeEvent, useEffect, useState} from 'react';

type PropsType = {
    status: string
    updateStatus:(status: string) => void
}

type StateType = {
    editMode: boolean
    status: string
}


const ProfileStatus: React.FC<PropsType & StateType> = (props) => {

    const [status, setStatus] = useState<string>(props.status)
    const [editMode, setEditMode] = useState<boolean>(false)

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

    const onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
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

export default ProfileStatus;