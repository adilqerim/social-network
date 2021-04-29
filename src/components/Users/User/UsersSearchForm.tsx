import {Field, Form, Formik} from "formik";
import React, {FC} from "react";
import {FilterType} from "../../../redux/usersReducer";

const searchUsersValidate = (values: any) => {
    const errors = {};
    return errors;
}

type FormType = {
    term: string
    friend: 'true' | 'false' | 'null'

}

type PropsType = {
    onFilterChanged: (filter: FilterType) => void
}

export const UsersSearchForm: FC<PropsType> = ({ onFilterChanged }) => {

    const submit = (values: FormType, {setSubmitting}: {setSubmitting: (isSubmitting: boolean) => void}) => {

        const filter: FilterType = {
            term: values.term,
            friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false
        }

        onFilterChanged(filter)
        setSubmitting(false)
    }

    return (
        <div>
            <Formik
                initialValues={{term: '', friend: 'null'}}
                onSubmit={submit}>
                {({isSubmitting}) => (
                    <Form>
                        <Field type="text" name="term"/>
                        <Field name='friend' as='select'>
                            <option value='null'>All</option>
                            <option value='true'>Only Followed</option>
                            <option value='false'>Only Unfollowed</option>
                        </Field>
                        <button type="submit" disabled={isSubmitting}>
                            Find
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}