import React from "react";
import Element from "../../../common/FormsControls/FormsControls";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";

const Textarea = Element("textarea");

const maxLength10 = maxLengthCreator(10)

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea}
                   name='newPostBody'
                   placeholder={'post message'}
                   validate={[required, maxLength10]}/>
            <button>Add post</button>
        </form>
    )
}

export default reduxForm({form: 'profileAddNewPostForm'})(AddNewPostForm)
