const tweetReducer = (state = {
    loaded: false,
    tweets: []
}, action) => {

    switch (action.type) {
        case "FETCH_TWEETS":
            { 
                return {
                    ...state,
                    loaded: false
                }
            }
        case "TWEETS_RECIEVED": 
            {
                return {
                    ...state,
                    loaded: true,
                    tweets: action.payload
                }
            }
    }

    return state
}

export default tweetReducer;
