ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={withRouter(AuthView)} />
                <Route path="/notes" exact component={withRouter(NotesView)} />
                <Redirect from="**" to="/" />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);