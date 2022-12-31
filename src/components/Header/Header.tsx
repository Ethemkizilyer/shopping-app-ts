import * as React from 'react';
import { Data } from '../../context/Data';
import {useNavigate} from "react-router-dom"
import "./Header.css"

export interface IHeaderProps {
}

export function Header (props: IHeaderProps) {
    // const {cartItemCount}=React.useContext(Data)
    const navigate=useNavigate()

    const goHome=()=>{
        navigate("/")
    }

    const goCart=()=>{
        navigate("/card")
    }

  return (
  <header>
    <div className="header">
        <div className="logo" onClick={goHome}>
            <h4 className="sweet">BakarTat</h4>
            <img src="/assets/breakfast.png" width="45px" height="45px" style={{margin:10}} alt="icon" />
        </div>
        <div
        className='d-flex'
        style={{width:300,justifyContent:"space-evenly",paddingTop:3}}
        >
            <i onClick={goCart} className="fa fa-shopping-cart cart-icon"></i>
            <span className="cart-count">9</span>
            <h5 className='login'>Giriş</h5>
            <h5 className='register'>Kayıt</h5>
        </div>
    </div>
  </header>
  );
}
