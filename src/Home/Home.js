import React, { useEffect, useState } from 'react';
import bgImg from '../images/Bg.png'
import './Home.css'
import FakeData from '../FakeData/FakeData.json'
import Transports from '../Transports/Transports';
import Header from '../Header/Header';


const Home = () => {

    const [transportation, setTransportation] = useState(FakeData)
    useEffect(()=>{
        setTransportation(FakeData)
    })
    return (
        <div>
            <Header></Header>
            <div>
                <div className='row transportation'>
                {
                   transportation.map(transport => <Transports transport={transport}></Transports>) 
                }
                </div>
                
                <div>
                    <img src={bgImg} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Home;