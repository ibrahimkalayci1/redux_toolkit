import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const initialState = {
    tasks:(
        {
            title: "Navbar Yapılacak",
            author: "Ali",
            assigned_to:"veli",
            end_date: "2024-07-06", 
            id:"1",
        }
    )
}


const crudSlice = createSlice({
    name:"crud",
    initialState,
    reducers: {
    addTask: (state,action)=> {
        //oluşturdgnz task e id ekledik
        action.payload.id= v4()
        //gelen veriyi task dizisine ekle
        state.tasks.push(action.payload);
    },
},
});
// store a tanıtmak için reducer ı export et
export default crudSlice.reducer;
export const {addTask} = crudSlice.actions;