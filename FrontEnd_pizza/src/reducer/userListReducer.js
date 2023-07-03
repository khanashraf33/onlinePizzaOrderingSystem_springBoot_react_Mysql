const userListReducer = (state = [], action) => {
    switch (action.type) {
        case 'add-to-user-list':
            return [...state, action.payload]
        case 'remove-from-user-list':
            return state.filter((item) => item.id != action.payload.id)
        default:
            return state
    }
}


export default userListReducer