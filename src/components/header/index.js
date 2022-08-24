import Logo from "./logo";
import './style.css';
import Menu from "./menu";
import Search from "./serach";
import Buy from "./buy";
import Signup from "./signUp";

export default function Header(){
    return(
        <div className="container-header">
            <div className="header">
                <div className="right">
                    <Logo/>
                    <Menu/>
                </div>
                <div className="left">
                    <Search/>
                    <Buy/>
                    <Signup/>
                </div>
            </div>
        </div>
    )
}