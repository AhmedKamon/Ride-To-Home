import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import FakeData from '../FakeData/FakeData.json'
import './Destination.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie, faUserFriends, faUsers } from '@fortawesome/free-solid-svg-icons'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import GoogleMap from '../GoogleMap/GoogleMap';
import GoogleMapImg from '../images/Map.png'

const Destination = () => {
    const { vehicleId } = useParams()
    const [transportation, setTransportation] = useState(FakeData)
    const transport = transportation.filter(t => t.id == vehicleId)
    console.log(transport[0])
    const { name, price, image } = transport[0];
    useEffect(() => {
        setTransportation(FakeData)
    })
    return (

        <div className='fullBody'>
            <div className='container  '>
                <div className='row justify-content-md-between bodyPart'>
                    <div>
                        <div className="location">
                            <h2 style={{ fontWeight: 'bold', color: 'orange' }}>Mirpur 1</h2>
                            <h2 style={{ fontWeight: 'bold', color: 'orange' }}>Dhanmondi</h2>
                        </div>
                        <div className='row mt-5'>
                            <img className='way' src={image} alt="" /> <h5><span style={{ fontWeight: 'bold', color: 'orange' }}>{name}</span> <FontAwesomeIcon icon={faUserTie} />  $15</h5>
                        </div>
                        <br />
                        <div className='row'>
                            <img className='way' src={image} alt="" /><h5> <span style={{ fontWeight: 'bold', color: 'orange' }}>{name}</span> <FontAwesomeIcon icon={faUserFriends} /> $25</h5>
                        </div>
                        <br />
                        <div className='row'>
                            <img className='way' src={image} alt="" /><h5> <span style={{ fontWeight: 'bold', color: 'orange' }}>{name}</span> <FontAwesomeIcon icon={faUsers} /> $55</h5>
                        </div>
                    </div>
                    <div className='GoogleMapImg'>
                        {/* <img className='GoogleMapImg' src={} alt=""/> */}
                        <GoogleMap></GoogleMap>
                    </div>

                </div>

            </div>
        </div>
    );
};


export default GoogleApiWrapper({
    apiKey: ('AIzaSyC-v-co4y9pTQi6MG7_d2Vx_f5yjgOmEgE')
})(Destination)