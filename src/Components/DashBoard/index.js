import Sidebar from "../Sidebar"
import './index.css';

const DashBoard = () =>{
    return(
        <div>
            <div className="uber-home-page">
                <h1 className="heading">Uber DashBoard</h1>
                <p>This app is available in thousands of cities worldwide, so you can request a ride even when you’re far from home. Search cities.</p>
            </div>
            <Sidebar/>
        </div>
    )
}

export default DashBoard