import React from 'react';
import { Link } from 'react-router-dom';
import { Map, TileLayer } from 'react-leaflet'
import { FiPlus } from 'react-icons/fi'
import logo from '../img/map.svg';
import 'leaflet/dist/leaflet.css'
import '../styles/pages/orphanages-map.css';

function OphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={logo} alt="Happy" />
                    <h2>Escolha um orfanato do mapa</h2>
                    <p>Muitas crianças estão esperando sua visita</p>
                </header>
                <footer>
                    <strong>São Paulo</strong>
                    <span>São Paulo</span>
                </footer>
            </aside>

            <Map
                center={[-23.7728287, -46.7170326]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> 
               
            </Map>
            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#fff" />
            </Link>
        </div>
    )
}
export default OphanagesMap;