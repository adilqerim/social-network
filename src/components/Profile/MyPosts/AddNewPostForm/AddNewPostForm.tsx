import React, {FC} from "react";
import {createField, GetStringKeys, Textarea} from "../../../common/FormsControls/FormsControls";
import {InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {AddNewPostFormValuesType} from "../MyPosts";

const maxLength100 = maxLengthCreator(100)

type AddNewPostFormValuesKeysType = GetStringKeys<AddNewPostFormValuesType>

type OwnPropsType = {}

const AddNewPostForm: FC<InjectedFormProps<AddNewPostFormValuesType, OwnPropsType> & OwnPropsType> = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField<AddNewPostFormValuesKeysType>('Enter your post', 'newPostBody', [required, maxLength100], Textarea)}
            <button>Add post</button>
        </form>
    )
}

export default reduxForm<AddNewPostFormValuesType, OwnPropsType>({form: 'profileAddNewPostForm'})(AddNewPostForm)
