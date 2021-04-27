import React, {FC} from "react";
import {createField,Textarea} from "../../../common/FormsControls/FormsControls";
import {InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";

const maxLength100 = maxLengthCreator(100)

const AddNewPostForm: FC<InjectedFormProps> = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Enter your post', 'newPostBody', [required, maxLength100], Textarea)}
            <button>Add post</button>
        </form>
    )
}

export default reduxForm({form: 'profileAddNewPostForm'})(AddNewPostForm)
