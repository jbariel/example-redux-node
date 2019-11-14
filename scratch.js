const combineReducers = import('redux').combineReducers;

const model = {
    todos : [
        {
            text: 'This is my TODO',
            complete: false
        }
    ],
    visibility : 'VIS_ALL'
}

const todos = (state, action) => {
    switch(action.type) {
        case 'ADD':
            return [
                ...state, 
                {
                    text: action.text,
                    complete: false
                }
            ];
        default :
            return state;
    }
};

const visibility = (state, action) => {
    return action.type;
};

const appReducers = combineReducers({todos,visibility});

const store = createStore(appReducers);

const addTodo = (text) => {
    dispatch({
        type: 'ADD',
        text
    });
}

store.subscribe(() => console.log(store.getState()));
addTodo('Learn about Redux Actions');
addTodo('Learn about Redux Reducers');
addTodo('Learn React-Redux');