const postReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_POST':
            return state.concat([action.data]);
        case 'DELETE_POST':
            return state.filter((p) => (
                p.id !== action.id
            ))
        case 'UPDATE_POST':
            return state.map((p) => {
                if (p.id === action.data.id) {
                    return {
                        ...p,
                        title: action.data.title,
                        content: action.data.content
                    };
                } else {
                    return p;
                }
            })
        default:
            return state;
    }

}

export default postReducer;