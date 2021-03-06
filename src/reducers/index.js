import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'; // since reducer is too common a name we are giving it an alias - formReducer
import PostsReducer from './reducer_posts.js';
import zipReducer from './reducer_zip.js';
import cityReducer from './reducer_city.js';
import stateReducer from './reducer_state.js';
import userIdReducer from './reducer_userId.js';
import userNameReducer from './reducer_userName.js';
import lastNameReducer from './reducer_lastName.js';

const rootReducer = combineReducers({
  posts : PostsReducer,
  comments : PostsReducer,
  form  : formReducer,
  zip : zipReducer,
  city: cityReducer,
  userState:stateReducer,
  userId : userIdReducer,
  fulfillerId : userIdReducer,
  userName : userNameReducer,
  lastName : lastNameReducer,
  value : 0
});

export default rootReducer;
