import React from 'react'
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin'

const AuthorCreate = (props) => {
    return (
        <Create title='Create a Book' { ...props}>
            <SimpleForm>
                <TextInput source='name' label="Name"/>
                <TextInput source='genre' label="Genre"/>
                <DateInput source='createdAt' label="Created At"  />
            </SimpleForm>            
        </Create>
    );
}

export default AuthorCreate;