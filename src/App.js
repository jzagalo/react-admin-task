import * as React from "react"
import { Admin, Resource, fetchUtils } from 'react-admin'
import simpleRestProvider from 'ra-data-simple-rest'
import AuthorList  from './components/AuthorList'
import AuthorCreate from "./components/AuthorCreate"
import AuthorEdit from "./components/AuthorEdit"
import BookList  from './components/BookList'
import BookCreate from "./components/BookCreate"
import BookEdit from "./components/BookEdit"

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }   
    options.headers.set('Access-Control-Expose-Headers','Content-Range') 
    return fetchUtils.fetchJson(url, options);
};
const dataProvider = simpleRestProvider('http://localhost:3000', httpClient);


const App = () => (
    <Admin dataProvider={dataProvider} >
        <Resource name="authors"  list={AuthorList}  create={AuthorCreate} edit={AuthorEdit} />
        <Resource name="books"  list={BookList}  create={BookCreate} edit={BookEdit} />
    </Admin>
);

export default App;
