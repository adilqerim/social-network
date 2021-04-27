import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import React, {FC} from "react";
import {createField, Textarea} from "../../common/FormsControls/FormsControls";

const maxLength100 = maxLengthCreator(100)

const AddMessageForm: FC<InjectedFormProps> = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Enter your message', 'newMessageBody', [required, maxLength100], Textarea)}
            <button>Send message</button>
        </form>
    )
}

export default reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)
