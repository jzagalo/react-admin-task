import React from 'react';
import { Edit, SimpleForm, TextInput} from 'react-admin'

const AuthorEdit = (props) => {
    return (
        <Edit title='Create a Post' { ...props}>
            <SimpleForm>
                <TextInput disabled source='id' />
                <TextInput source='firstName' />
                <TextInput source='lastName' />
                <TextInput source='email' />
            </SimpleForm>            
        </Edit>
    );
}

export default AuthorEdit;