import React from 'react';
import { Edit, SimpleForm, TextInput, DateInput} from 'react-admin'

const BookEdit = (props) => {
    return (
        <Edit title='Edit a Book' { ...props}>
            <SimpleForm>          
                <TextInput source='name' />
                <TextInput source='genre' />
                <DateInput source='createdAt' />
            </SimpleForm>            
        </Edit>
    );
}

export default BookEdit;