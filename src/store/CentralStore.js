import rootReducer from "../reducers/RootReducer";
import { createStore } from 'redux';

const finalStore = createStore(rootReducer);

export default finalStore;