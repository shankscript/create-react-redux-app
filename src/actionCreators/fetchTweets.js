const FETCH_TWEETS = {type: 'FETCH_TWEETS', payload: null};
const TWEETS_RECIEVED = {type: 'TWEETS_RECIEVED', payload:[]};
const TWEETS_ERROR = {type: 'TWEETS_ERROR', payload:'oops!'};

export default function fetchTweets() {
    
    return function(dispatch) {

    	dispatch(FETCH_TWEETS);
        
        fetch("/tweets.json")
            .then((response) => {
            	
                response.text().then(data => {
                	dispatch({...TWEETS_RECIEVED, payload: JSON.parse(data) })
                });
            
            })
            .catch((err) => {
                
                dispatch({...TWEETS_ERROR, payload: err })
            
            });
    }
};