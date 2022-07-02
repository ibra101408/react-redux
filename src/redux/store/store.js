import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counter";

export default configureStore({
    reducer: {
        counter: counterReducer
    }
});



/*import { configureStore} from "@reduxjs/toolkit";
import { counterSlices} from "../slices/counterSlices";

const store = configureStore({
    reducer: {
        counter: counterSlices,
    },
});

export default store;*/








