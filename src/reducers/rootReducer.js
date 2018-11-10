const  initState = {
    posts: [
        { id: '1', title: 'Title', body: 'Body goes here' },
        { id: '2', title: 'Title', body: 'Body goes herdqwhjdqwhjde' },
        { id: '3', title: 'Third Title', body: 'Third Body goes herdqwhjdqwhjde' }
    ]
};

const rootReducer = (state = initState, action) => {
    if(action.type === 'DELETE_POST'){
        let newPosts = state.posts.filter(post => {
            return post.id !== action.id;
        });
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
};

export default rootReducer;