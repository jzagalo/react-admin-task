import * as React from "react"
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import AuthorList  from './components/AuthorList'
import AuthorCreate from "./components/AuthorCreate"
import AuthorEdit from "./components/AuthorEdit"
import BookList  from './components/BookList'
import BookCreate from "./components/BookCreate"
import BookEdit from "./components/BookEdit"

const App = () => (
    <Admin dataProvider={ restProvider('http://localhost:3000/') }>
        <Resource name="authors"  list={AuthorList}  create={AuthorCreate} edit={AuthorEdit} />
        <Resource name="books"  list={BookList}  create={BookCreate} edit={BookEdit} />
    </Admin>
);

export default App;
