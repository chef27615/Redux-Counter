export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const INCREMENTIFODD = 'INCREMENTIFODD';
export const INCREMENTASYNC = 'INCREMENTASYNC';
// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).

export const increment = () => {
  // Fill in this function
  console.log('fired')
  
  return {type: INCREMENT}
};

export const decrement = () => {
  // Fill in this function
  console.log('decrease')
  
  return {type: DECREMENT}
};

export const incrementIfOdd = () => {
  return {type: INCREMENTIFODD}
};

export const incrementAsync = () => {
  return {type: INCREMENTASYNC}
}