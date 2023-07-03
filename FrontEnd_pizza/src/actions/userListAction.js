// export const addToUserList = (user = {}) => {
//     console.log(user);
//     return {
//         type: 'add-to-user-list',
//         payload: user,
//     }
// }

export const addToUserList = (user = {}) => {
    return {
        type: 'add-to-user-list',
        payload: user,
    }
}

export const removeFromUserList = (user = {}) => {
    return {
        type: 'remove-from-user-list',
        payload: user,
    }
}