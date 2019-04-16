import { INCREMENT, DECREMENT, INCREMENTASYNC, INCREMENTIFODD } from '../actions';

const initialState = {
  count: 0
}

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (state = initialState, action) => {
  console.log('reducer running', action)
  switch (action.type) {
    case INCREMENT:
      return {count: state.count +1};

    // Fill in the body of this case
    case DECREMENT:
      return Object.assign({}, state, {count: state.count-1});
    // Fill in the body of this case
    
    case INCREMENTIFODD:
      return Object.assign({}, state, {count: state.count+2});
    
    case INCREMENTASYNC:
      return {count: state.count +1};
    
    default:
      return state;
  }
};
