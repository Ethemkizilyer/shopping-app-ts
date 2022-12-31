import * as React from "react";
import { useState } from "react";
import { FoodItems } from "../globalInterface";

interface IDataProps {
  topRated: FoodItems[];
  allCategories: FoodItems[];
  dishesNearYou: FoodItems[];
  cartItemCount: number;
  cartItems: FoodItems[];
}

interface AppContext extends IDataProps {
  addToCart: (item: FoodItems) => void;
  removeItem: (item: FoodItems) => void;
}

export const DataContext = React.createContext<AppContext>({} as AppContext);

export function Data(props: IDataProps) {
  const [state, setState] = useState<IDataProps>({
    topRated: [
      {
        id: 1,
        name: "Cake",
        price: 100,
        url: "/assets/cake.jpg",
        desc: "Very tasty",
        rate: 4.1
      },
      {
        id: 2,
        name: "Noodles",
        price: 200,
        url: "/assets/noodles.jpg",
        desc: "Chilly",
        rate: 4.1,
      },
      {
        id: 3,
        name: "Fries",
        price: 70,
        url: "/assets/fries.jpg",
        desc: "Crispy",
        rate: 4.2,
      },
    ],
    allCategories: [
      {
        id: 4,
        name: "Macroni",
        price: 150,
        url: "/assets/macroni.jpg",
        desc: "Yummy",
        rate: 4.5,
      },
      {
        id: 5,
        name: "Pizza",
        price: 400,
        url: "/assets/pizza.jpg",
        desc: "Very tasty",
        rate: 4.0,
      },
      {
        id: 6,
        name: "Salad",
        price: 60,
        url: "/assets/salad.jpg",
        desc: "Very tasty",
        rate: 4.2,
      },
    ],
    dishesNearYou: [
      {
        id: 7,
        name: "Samosa",
        price: 20,
        url: "/assets/samosa.jpg",
        desc: "Very tasty",
        rate: 4.2,
      },
      {
        id: 8,
        name: "Soup",
        price: 50,
        url: "/assets/soup.jpg",
        desc: "Delicious",
        rate: 4.2,
      },
      {
        id: 9,
        name: "Tacos",
        price: 110,
        url: "/assets/tacos.jpg",
        desc: "Awesome!!",
        rate: 4.4,
      },
    ],
    cartItemCount: 0,
    cartItems: [],
  });

  const { topRated, allCategories, dishesNearYou, cartItemCount, cartItems } =
    state;

const ekle = (item:FoodItems)=>{
    const data={...item,quantity:1};
    if(cartItems.length > 0){
        const bool =cartItems.some((el)=>el.id===item.id);
        if(bool){
            const itemIndex=cartItems.findIndex((el)=>el.id===item.id);
            const c=[...state.cartItems]
            // if(c[itemIndex]["quantity"]){
            //     c[itemIndex]["quantity"]! += 1
            // }
        }
    }
}

  return <div>

  </div>;
}
