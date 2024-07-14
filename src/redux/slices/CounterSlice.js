//! createSlace
// hem reducer hem reducer ın aksiyonları createslice metodu ile beraber tek seferde tanımlanır
//todo slice oluşturma
//. 1.adım iimport { createSlice } from "@reduxjs/toolkit"; import edilir
//içinde name ve initial state değerleri belirtilir

import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice ({
    name:"counter",
    initialState: { count: 0, isDarkTheme: true},
    reducers: { 
        increase: (state) => {  
            state.count++;      
        },

        decrease: (state) => {
            state.count--;
        },
        setCount:(state,action) => {
            
            state.count = action.payload;
        },

        toggleTheme: (state) => {
         state.isDarkTheme = !state.isDarkTheme  }

    },
});
// slice ın oluşturdugu reducer fonksiyonunu store a tanıtmak için export ettik 
export default counterSlice.reducer;

export const {increase,decrease,setCount,toggleTheme} = counterSlice.actions;