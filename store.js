import { configureStore } from "@reduxjs/toolkit";

const store= configureStore({
   reducer: { 
       paintings: null,
   }
})

export default store;