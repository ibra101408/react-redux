import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload;
        }
    }
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;














/*import { createAction} from "@reduxjs/toolkit/src/createAction";
import {createReducer} from "@reduxjs/toolkit";

export const increment = createAction("increment/counter");
export const decrement = createAction("decrement/counter");
export const increaseAmount = createAction("increaseByAmount/counter");

//reducers
//1.using builder notation
const initialState ={
    value:0,
};

export const counterSlices = createReducer(initialState, builder => {
    builder.addCase(increment, (state, action) => {
        state.value++;
    });
    builder.addCase(decrement, (state, action) => {
        state.value--
    });
    builder.addCase(increaseAmount, (state, action) => {
        state.value = action.payload;
    });
})

*/




