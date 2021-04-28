import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import React, {FC} from "react";
import {createField, Textarea} from "../../common/FormsControls/FormsControls";
import {NewMessageFormValuesType} from "../Dialogs";

type MessageFormValuesKeysType = Extract<keyof NewMessageFormValuesType, string>
type PropsType = {}

const AddMessageForm: FC<InjectedFormProps<NewMessageFormValuesType, PropsType> & PropsType> = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField<MessageFormValuesKeysType>('Enter your message', 'newMessageBody', [required], Textarea)}
            <button>Send message</button>
        </form>
    )
}

export default reduxForm<NewMessageFormValuesType>({form: 'dialogAddMessageForm'})(AddMessageForm)
