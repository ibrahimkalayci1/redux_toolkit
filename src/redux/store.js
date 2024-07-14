import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/CounterSlice"
import crudReducer from "./slices/crudSlice"
// confıgurstere ve createstore farkları
// verilen reducer ı otomatik birleştirir
// thunk kurulu gelecek
//devtools kurulu gelir

export default configureStore({
    reducer: {counterReducer, crudReducer}
})