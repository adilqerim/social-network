import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import React, {FC} from "react";
import Element from "../../common/FormsControls/FormsControls";

const Textarea = Element("textarea");
const maxLength100 = maxLengthCreator(100)


const AddMessageForm: FC<InjectedFormProps> = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field component={Textarea}
                   name='newMessageBody'
                   placeholder='Enter your message'
                   validate={[required, maxLength100]}/>
            <button>Send message</button>
        </form>
    )
}

export default reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)
