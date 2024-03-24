import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { TProduct } from "types/Product";
import { TOrderedProducts } from "types/OrderedProducts";

type TState = {
  orderedProducts: TProduct[];
  chosenProductsIds: TOrderedProducts[];
};

const initialState: TState = {
  orderedProducts: [],
  chosenProductsIds: [],
};

export const orderedProducts = createSlice({
  name: "orderedProducts",
  initialState: initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<TProduct>) => {
      const targetProduct = state.orderedProducts.find(
        (product) => product.id === action.payload.id
      );

      const isTargetProductExist = !!targetProduct;

      if (isTargetProductExist) {
        const targetChosenProduct = state.chosenProductsIds.find(
          (chosenProduct) => chosenProduct.id === action.payload.id
        );

        if (!targetChosenProduct) return;

        const filteredChosenProducts = state.chosenProductsIds.filter(
          (chosenProduct) => chosenProduct.id !== action.payload.id
        );

        state.chosenProductsIds = [
          ...filteredChosenProducts,
          { ...targetChosenProduct, count: (targetChosenProduct.count += 1) },
        ];
      } else {
        // Product doesn't exist
        state.orderedProducts = [
          ...state.orderedProducts,
          { ...action.payload },
        ];
        state.chosenProductsIds = [
          ...state.chosenProductsIds,
          { id: action.payload.id, count: 1 },
        ];
      }
    },

    removeProduct: (state, action) => {
      state.chosenProductsIds = state.chosenProductsIds.filter(
        (product) => product.id !== action.payload.id
      );
      state.orderedProducts = state.orderedProducts.filter(
        (product) => product.id !== action.payload.id
      );
    },
    increaseCount: (state, action) => {
      const targetChosenProduct = state.chosenProductsIds.find(
        (chosenProduct) => chosenProduct.id === action.payload.id
      );
      if (!targetChosenProduct) return;
      const filteredChosenProducts = state.chosenProductsIds.filter(
        (chosenProduct) => chosenProduct.id !== action.payload.id
      );
      state.chosenProductsIds = [
        ...filteredChosenProducts,
        { ...targetChosenProduct, count: (targetChosenProduct.count += 1) },
      ];
    },
    decreaseCount: (state, action) => {
      const targetChosenProduct = state.chosenProductsIds.find(
        (chosenProduct) => chosenProduct.id === action.payload.id
      );
      if (!targetChosenProduct) return;
      const filteredChosenProducts = state.chosenProductsIds.filter(
        (chosenProduct) => chosenProduct.id !== action.payload.id
      );
      state.chosenProductsIds = [
        ...filteredChosenProducts,
        { ...targetChosenProduct, count: (targetChosenProduct.count -= 1) },
      ];

      if (targetChosenProduct.count < 1) {
        state.chosenProductsIds = state.chosenProductsIds.filter(
          (product) => product.id !== action.payload.id
        );
        state.orderedProducts = state.orderedProducts.filter(
          (product) => product.id !== action.payload.id
        );
      }
    },
  },
});

export const { addProduct, removeProduct, increaseCount, decreaseCount } =
  orderedProducts.actions;

export default orderedProducts.reducer;
