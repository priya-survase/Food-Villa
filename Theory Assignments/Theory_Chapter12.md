**1. useContext vs Redux**

UseContext is a hook whereas Redux is a state management library.

**2. Advantage of using Redux Toolkit over Redux**

In Redux you must configure Devtools but in the Redux toolkit, you don't have to configure. Because it already has.

In Redux for asynchronous performance you need to add Redux Thunk, But in the Redux toolkit, it's already built-in.

Redux requires too much boilerplate code but the Redux toolkit doesn't.

[Read more](https://dev.to/azadulkabir455/redux-vs-redux-toolkit-472b)

**3. Explain Dispatcher**

Dispatcher is used when we have to call a reducer function to update data in store.
It comes from useDispatch() hook which comes from 'react-redux' library.

`const dispatch = useDispatch();`
`dispatch(action)`;

**4. Explain Reducer**

A reducer is a pure function that determines changes to an application’s state. Reducer is one of the building blocks of Redux.These functions accept the initial state of the state being used and the action type. It updates the state and responds with the new state. This updated state is sent back to the view components of the react to make the necessary changes.

**5. Explain Slice**

A "slice" is a collection of Redux reducer logic and actions for a single feature in your app, typically defined together in a single file. The name comes from splitting up the root Redux state object into multiple "slices" of state.

**6. Explain Selector**

useSelector() takes in a function argument that returns the part of the state that you want.
`const cart = useSelector((store) => store.cart.items);`

**7. Explain createSlice and the configuration it takes**

createSlice takes an object with three main options fields:

**name**: a string that will be used as the prefix for generated action types
**initialState**: the initial state of the reducer
**reducers**: an object where the keys are strings, and the values are "case reducer" functions that will handle specific actions

```
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
  },
});

export const { addItem, clearCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
```
