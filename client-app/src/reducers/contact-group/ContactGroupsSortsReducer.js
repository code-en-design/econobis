export default (state = [], action) => {
    switch(action.type) {
        case 'SET_CONTACT_GROUPS_SORTS':
            if(state.length === 3) state.shift();

            return [
                ...state,
                {
                    field: action.field,
                    order: action.order,
                },
            ];
        default:
            return state;
    }
};
