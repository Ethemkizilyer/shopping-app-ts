import * as React from "react";
import { useState, createContext } from "react";
import { FoodItems } from "../globalInterface";

interface AppState {
  topRated: FoodItems[];
  allCategories: FoodItems[];
  dishesNearYou: FoodItems[];
  cartItemCount: number;
  cartItems: FoodItems[];
}

interface AppContext extends AppState {
  ekle: (item: FoodItems) => void;
  sil: (item: FoodItems) => void;
}

export const DataContext = React.createContext<AppContext>({} as AppContext);

function DataProvider({ children }: { children: JSX.Element }) {
  const [state, setState] = useState<AppState>({
    topRated: [
      {
        id: 1,
        name: "Kek",
        price: 100,
        url: "/assets/cake.jpg",
        desc: "Çok lezzetli",
        rate: 4.1,
      },
      {
        id: 2,
        name: "Noodles",
        price: 100,
        url: "/assets/noodles.jpg",
        desc: "Chilly",
        rate: 4.1,
      },
      {
        id: 3,
        name: "Kızartma",
        price: 40,
        url: "/assets/fries.jpg",
        desc: "Çıtır çıtır",
        rate: 4.2,
      },
    ],
    allCategories: [
      {
        id: 4,
        name: "Macroni",
        price: 80,
        url: "/assets/macroni.jpg",
        desc: "Lezzetli",
        rate: 4.5,
      },
      {
        id: 5,
        name: "Pizza",
        price: 100,
        url: "/assets/pizza.jpg",
        desc: "Çok lezzetli",
        rate: 4.0,
      },
      {
        id: 6,
        name: "Salata",
        price: 50,
        url: "/assets/salad.jpg",
        desc: "Çok lezzetli",
        rate: 4.2,
      },
    ],
    dishesNearYou: [
      {
        id: 7,
        name: "Tost",
        price: 20,
        url: "/assets/samosa.jpg",
        desc: "Çok lezzetli",
        rate: 4.2,
      },
      {
        id: 8,
        name: "Çorba",
        price: 50,
        url: "/assets/soup.jpg",
        desc: "Lezzetli",
        rate: 4.2,
      },
      {
        id: 9,
        name: "Dürüm",
        price: 50,
        url: "/assets/tacos.jpg",
        desc: "Mükemmel",
        rate: 4.4,
      },
    ],
    cartItemCount: 0,
    cartItems: [],
  });

  const { topRated, allCategories, dishesNearYou, cartItemCount, cartItems } =
    state;

  const ekle = (item: FoodItems) => {
    const data = { ...item, quantity: 1 };
    if (cartItems.length > 0) {
      //  2 cases
      const bool = cartItems.some((el) => el.id === item.id);
      if (bool) {
        const itemIndex = cartItems.findIndex((el) => el.id === item.id);
        const c = [...state.cartItems];
        if (c[itemIndex]["quantity"]) {
          c[itemIndex]["quantity"]! += 1;
        }
        setState((prevState) => {
          return { ...prevState, cartItems: c };
        });
      } else {
        setState((prevState) => {
          return { ...prevState, cartItems: [...state.cartItems, data] };
        });
      }
    } else {
      setState((prevState) => {
        return { ...prevState, cartItems: [...state.cartItems, data] };
      });
    }
    setState((prevState) => {
      return { ...prevState, cartItemCount: state.cartItemCount + 1 };
    });
  };

  const sil = (item: FoodItems) => {
    if (cartItems.length > 0) {
      let bool = state.cartItems.some((i) => i.id === item.id);
      if (bool) {
        let itemIndex = state.cartItems.findIndex((el) => el.id === item.id);
        const c = [...state.cartItems];
        // if qty > 1 then reduce by 1 else we will be splicing
        if (cartItems[itemIndex]["quantity"] === 1) {
          c.splice(itemIndex, 1);
          setState((prevState) => {
            return { ...prevState, cartItems: c };
          });
        } else {
          c[itemIndex]["quantity"]! -= 1;
          setState((prevState) => {
            return { ...prevState, cartItems: c };
          });
        }
        if (cartItemCount !== 0) {
          setState((prevState) => {
            return { ...prevState, cartItemCount: state.cartItemCount - 1 };
          });
        }
      }
    }
  };

  return (
    <DataContext.Provider
      value={{
        topRated,
        allCategories,
        dishesNearYou,
        cartItemCount,
        cartItems,
        ekle,
        sil,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
