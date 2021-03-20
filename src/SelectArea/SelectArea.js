import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import FakeData from '../FakeData/FakeData.json'

import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from 'react-router-dom';
import './SelectArea.css'


const SelectArea = () => {
    const {vehicleId} = useParams()
    const [transportation, setTransportation] = useState(FakeData) 
    const transport = transportation.filter(t => t.id == vehicleId)
    console.log(transport[0])
   
    useEffect(()=>{
        setTransportation(FakeData)
    })
    return (
       
    <div >
            <div className='search '>
                  
                <input type="text" placeholder='Mirpur 1'/>
                <br/>
                <br/>
                <input type="text" placeholder='Dhanmondi'/>
                <br/>
                <br/>
                <Link to="/login" ><input  type="button" value="Search Now"/> </Link> 
                 
            </div>
        <div>

        </div>
    </div>
    );
};

export default SelectArea;