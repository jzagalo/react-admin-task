import React from 'react'
import { List, Datagrid, TextField,  EditButton, DeleteButton, EmailField } from 'react-admin'

const AuthorList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="firstName" />
                <TextField source="lastName" />
                <EmailField source="email" />
                <EditButton basePath="/authors" />
                <DeleteButton basePath="/authors" />
            </Datagrid>            
        </List>
    );
}

export default AuthorList;