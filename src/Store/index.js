import { createSlice, configureStore } from "@reduxjs/toolkit";
const appState = { selectedItems: [], TotalPrice: 0 };
const SelectedFoods = createSlice({
  name: "selectedFoods",
  initialState: appState,
  reducers: {
    TotalPrice(state) {
      const total = state.selectedItems.reduce((current, item) => {
        return current + item.totalPrice;
      }, 0);
      state.TotalPrice = total;
    },
    TotalItemPrice(state, action) {
      const newItems = state.selectedItems.map((item) => {
        if (item.id === action.payload.id) {
          let sizePrice = 0;
          if (item.size == "1") {
            sizePrice = 5;
          } else if (item.size == "2") {
            sizePrice = 15;
          } else if (item.size == "3") {
            sizePrice = 25;
          }
          let addion1Price =
            item.addion1.state !== "0" ? item.addion1.content.price : 0;
          const addion2Price =
            item.addion2.state !== "0" ? item.addion2.content.price : 0;
          const addion3Price =
            item.addion3.state !== "0" ? item.addion3.content.price : 0;
          const addion4Price =
            item.addion4.state !== "0" ? item.addion4.content.price : 0;
          const ItemPrice =
            (sizePrice +
              addion1Price +
              addion2Price +
              addion3Price +
              addion4Price) *
            item.amount;
          return { ...item, totalPrice: ItemPrice };
        } else {
          return { ...item };
        }
      });
      state.selectedItems = newItems;
    },
    addItem(state, action) {
      state.selectedItems.push(action.payload);
    },
    deleteItem(state, action) {
      const newList = state.selectedItems.filter((item) => {
        return item.id !== action.payload;
      });
      state.selectedItems = newList;
    },
    ChangeAmount(state, action) {
      const newItems = state.selectedItems.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, amount: action.payload.amount };
        } else {
          return { ...item };
        }
      });
      state.selectedItems = [...newItems];
    },
    increaseAmount(state, action) {
      const newItems = state.selectedItems.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, amount: item.amount + 1 };
        } else {
          return { ...item };
        }
      });
      state.selectedItems = [...newItems];
    },
    decreaseAmount(state, action) {
      const newItems = state.selectedItems.map((item) => {
        if (item.id === action.payload.id && item.amount > 1) {
          return { ...item, amount: item.amount - 1 };
        } else {
          return { ...item };
        }
      });
      state.selectedItems = [...newItems];
    },
    AddAdions(state, action) {
      state.selectedItems = state.selectedItems.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            addion1: {
              state: action.payload.addion1.state,
              content: action.payload.addion1.content,
            },
            addion2: {
              state: action.payload.addion2.state,
              content: action.payload.addion2.content,
            },
            addion3: {
              state: action.payload.addion3.state,
              content: action.payload.addion3.content,
            },
            addion4: {
              state: action.payload.addion4.state,
              content: action.payload.addion4.content,
            },
            comment: action.payload.comment,
            size: action.payload.sizeAddion.value,
            price:
              action.payload.sizeAddion.value == "1"
                ? 5
                : action.payload.sizeAddion.value == "2"
                ? 15
                : action.payload.sizeAddion.value == "3"
                ? 25
                : 0,
          };
        } else {
          return { ...item };
        }
      });
    },
    removeaddion(state, action) {
      state.selectedItems = state.selectedItems.map((item) => {
        if (item.id === action.payload.id) {
          if (action.payload.addionName === "addion1") {
            return {
              ...item,
              addion1: {
                state: "0",
                content: {},
              },
            };
          } else if (action.payload.addionName === "addion2") {
            return {
              ...item,
              addion2: {
                state: "0",
                content: {},
              },
            };
          } else if (action.payload.addionName === "addion3") {
            return {
              ...item,
              addion3: {
                state: "0",
                content: {},
              },
            };
          } else if (action.payload.addionName === "addion4") {
            return {
              ...item,
              addion4: {
                state: "0",
                content: {},
              },
            };
          }
        } else {
          return { ...item };
        }
      });
    },
  },
});
const Store = configureStore({
  reducer: SelectedFoods.reducer,
});
export const ActionsSelected = SelectedFoods.actions;
export default Store;
