import React from 'react'
import { List, Datagrid, TextField,  EditButton, DeleteButton, DateField } from 'react-admin'

const BookList = (props) => {
    return (
        <List {...props}>
            <Datagrid>   
                <TextField source="id" />         
                <TextField source="name" />
                <TextField source="genre"/>
                <DateField source="createdAt" />
                <EditButton basePath="/books" />
                <DeleteButton basePath="/books" />
            </Datagrid>            
        </List>
    );
}

export default BookList;