import React from 'react'
import { Create, SimpleForm, TextInput} from 'react-admin'

const AuthorCreate = (props) => {
    return (
        <Create title='Create a Post' { ...props}>
            <SimpleForm>
                <TextInput source='firstName' />
                <TextInput source='lastName' />
                <TextInput source='email' />
            </SimpleForm>            
        </Create>
    );
}

export default AuthorCreate;