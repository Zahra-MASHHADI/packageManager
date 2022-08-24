import Bottomheader from "./bottomHeader";
import App from "./app";
import Aboutus from "./aboutUs";
import Lastpart from "./lastPart";

export default function Footer(){
    return(
    <div className="footer">
        <Bottomheader/>
        <App></App>
        <Aboutus/>
        <Lastpart/>
    </div>
    )
}