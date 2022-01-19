import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from "redux"
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from "@redux/reducers/index";

const persistConfig = {
    key: "application_key",
    version: 1,
    storage: AsyncStorage,
    timeOut: null,

    //add this line if you change redux store state in new versions release
    //migrate: createMigrate(migrations, {debug:false})
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export default {
    store, persistor
}