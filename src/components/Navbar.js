import Styles from "./NavbarStyles.css";
import { Component } from 'react';
import { MenuItems } from './MenuItems.js';
import { Link } from "react-router-dom";

export default class Navbar extends Component{
    constructor(){
        super();
        this.state = {
            clicked: false
        }
    }
    handleClick = () =>{
        this.setState({
            clicked: !this.state.clicked,
        })
    }
    render(){
        return (<>
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Trippy</h1>
                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times"
                    : "fas fa-bars"}></i>
                    
                </div>
                <ul className={this.state.clicked ? 
                "nav-menu active" : "nav-menu"}>
                    {
                        MenuItems.map( (item, index) => {
                            return (
                                <li key={index}>
                                    <Link className={item.className} to={item.url}>
                                        <i className={item.icon}></i>
                                        {item.title}
                                    </Link>
                                </li>
                            );
                        })
                    }
                    <button>Sign Up</button>
                </ul>
            </nav>    
        </>);
    }
}