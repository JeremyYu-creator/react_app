import React from "react";
import {BrowserRouter as Route, Router} from "react-router-dom";
import Table from "../view/table";
import Form from "../view/form/form";

const AppRouter = () => {
    return (
        <Router>
            <Route path={'/table'} element={<Table/>}></Route>
            <Route path={'/form'} element={<Form/>}></Route>
        </Router>
    )
}
export default AppRouter
