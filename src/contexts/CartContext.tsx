//Provider Context

import { createContext, ReactNode, useEffect, useState } from "react";
import { Pet } from "../pages/Home/components/PetCard";
import { produce } from "immer";

export interface CartItem extends Pet {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  cartQuantity: number;
  cartItemsTotal: number;
  addPetToCart: (pet: CartItem) => void;
  changeCartItemQuantity: (
    cartItemId: number,
    type: "increase" | "decrease"
  ) => void;
  removeCartItem: (cartItemId: number) => void;
  cleanCart: () => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

//Save ID Storage KEY
const PET_ITEMS_STORAGE_KEY = "petDelivery:cartItems";

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem(PET_ITEMS_STORAGE_KEY);
    if (storedCartItems) {
      return JSON.parse(storedCartItems);
    }
    return [];
  });

  const cartQuantity = cartItems.length;

  //Function Tot Project

  const cartItemsTotal = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity;
  }, 0);

  function addPetToCart(pet: CartItem) {
    const petAlreadyExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === pet.id
    );
    const newCart = produce(cartItems, (draft) => {
      if (petAlreadyExistsInCart < 0) {
        draft.push(pet);
      } else {
        draft[petAlreadyExistsInCart].quantity += pet.quantity;
      }
    });

    setCartItems(newCart);
  }

  // console.log(cartItems);

  function changeCartItemQuantity(
    cartItemId: number,
    type: "increase" | "decrease"
  ) {
    const newCart = produce(cartItems, (draft) => {
      const petExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId
      );

      if (petExistsInCart >= 0) {
        const item = draft[petExistsInCart];
        draft[petExistsInCart].quantity =
          type === "increase" ? item.quantity + 1 : item.quantity - 1;
      }
    });

    setCartItems(newCart);
  }

  //Function Remove, Pets the Project
  function removeCartItem(cartItemId: number) {
    const newCart = produce(cartItems, (draft) => {
      const petExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId
      );

      if (petExistsInCart >= 0) {
        draft.splice(petExistsInCart, 1);
      }
    });
    setCartItems(newCart);
  }

  function cleanCart() {
    setCartItems([]);
  }

  useEffect(() => {
    localStorage.setItem(PET_ITEMS_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        cartItemsTotal,
        addPetToCart,
        changeCartItemQuantity,
        removeCartItem,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
