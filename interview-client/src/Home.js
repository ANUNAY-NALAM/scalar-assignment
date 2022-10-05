import React, { useState , useEffect } from "react";
import Interviewcard from "./components/interviewcard";
import Navbar from './components/Navbar/Navbar';
import Popup from "./components/Popup";
import Sidebar from "./components/Sidebar/Sidebar";
import axios from "axios"
import "./Home.css"
const Home = () => {
    const [pop, setPop] = useState(false);
    const [users , setUsers] = useState([]);
    const [interviews,setInterviews] = useState([]);
    var key=1;
    useEffect(async ()=>{
        let {data} = await axios.get("http://localhost:8080/getinterviews");
        console.log(data);
        setInterviews(data.interviews)
    },[])


    return (
        <section className="home">

            <Navbar />
            <div className="main-home">
                <div>
                    <Sidebar pop={pop} setPop={setPop}  />
                </div>
                <div>
                    <div className="wrapper">
                    {
                        interviews && interviews.map((interview)=>
                            <Interviewcard {...interview}/>)
                    }
                    </div>
                </div>
            </div>
            <Popup pop={pop} setPop={setPop} />




        </section>
    );
};
export default Home;