import React, {Component} from "react";
import logo from "../../assets/img/nflix.png";

export default class Navbar extends Component{
    render(){
        return(
            <>
                <img src={logo} width={60} alt="logo"></img>
            </>
        );
    }
}