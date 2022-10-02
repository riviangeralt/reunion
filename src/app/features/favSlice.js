import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favProp: [],
};

const favSlice = createSlice({
  name: "favSlice",
  initialState,
  reducers: {
    toggleFavourite: (state, action) => {
      switch (action.payload.type) {
        case "add":
          let newData = [...state.favProp, action.payload.data];
          state.favProp = newData;
          break;
        case "remove":
          let filteredData = state.favProp.filter(
            (prevData) => prevData.id !== action.payload.data.id
          );
          state.favProp = filteredData;
          break;
        default:
          break;
      }
    },
  },
});

export const { toggleFavourite } = favSlice.actions;
export default favSlice.reducer;
