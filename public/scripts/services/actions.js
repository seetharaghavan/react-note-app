const httpClient = axios.create({
    baseURL: BASE_URL,
});

httpClient.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    config.headers.Authorization =  token ? `Bearer ${token}` : '';
    return config;
});

const login = (loginInfo) => async dispatch => {
    try{
        let res = await httpClient.post('/auth', loginInfo); 
        localStorage.setItem('token', res.data.token); 
        dispatch({
            type: LOG_IN,
            payload: res.data
        }); 
    }catch(e){
        dispatch({
            type: LOG_IN_FAILED,
            payload: e.message
        }); 
    }
}

const me = ()  => async dispatch => {
    try{
        let res = await httpClient.get('/me'); 
        dispatch({
            type: LOG_IN,
            payload: res.data
        });
    }catch(e){
        dispatch({
            type: LOG_IN_FAILED,
            payload: e.message
        }); 
    }
}

const logOut = () => dispatch => {
    localStorage.removeItem('token'); 
    dispatch({
        type: LOG_OUT
    })
}

const getAllNotes = () => async dispatch =>  {
    try{
        let res = await httpClient.get('/api/notes'); 
        dispatch({
            type: GET_NOTES,
            payload: res.data
        });
    }catch(e){
        dispatch({
            type: ERROR_NOTE,
            payload: e.message
        });
    }
}

const addNewNote = (note) => async dispatch =>  {
    try{
        let res = await httpClient.post('/api/notes', note); 
        dispatch({
            type: ADD_NOTE,
            payload: res.data
        });
    }catch(e){
        console.log(e);
        dispatch({
            type: ERROR_NOTE,
            payload: e.message
        });
    }
}

const updateNote = (note) => async dispatch =>  {
    try{
        let res = await httpClient.put('/api/notes', note); 
        dispatch({
            type: EDIT_NOTE,
            payload: res.data
        });
    }catch(e){
        dispatch({
            type: ERROR_NOTE,
            payload: e.message
        });
    }
}


const deleteNote = (note) => async dispatch =>  {
    try{
        let res = await httpClient.delete('/api/notes', note); 
        dispatch({
            type: REMOVE_NOTE,
            payload: res.data
        });
    }catch(e){
        dispatch({
            type: ERROR_NOTE,
            payload: e.message
        });
    }
}