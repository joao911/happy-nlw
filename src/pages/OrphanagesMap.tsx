import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { FiPlus, FiArrowDownRight } from 'react-icons/fi';
import api from '../services/api'
import logo from '../img/map.svg';

import '../styles/pages/orphanages-map.css';
import mapIcon from '../Util/mapIcon';
import Orphanage from './Orphanage';
import { getJSDocReturnTag } from 'typescript';


interface orphanage {
    id: number;
    latitude: number;
    longitude: number;
    name: string;
}


function OphanagesMap() {
    const [orphanages, setOrphanage] = useState<orphanage[]>([]);
   
    useEffect(() => {

        api.get('orphanages').then(response => {
            setOrphanage(response.data);
        });
    }, [])
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


                {orphanages.map(orphanage => {
                    return (
                        <Marker
                            key={orphanage.id}
                            icon={mapIcon}
                            position={[orphanage.latitude, orphanage.longitude]}
                        >
                            <Popup closeButton={false} minWidth={240} maxWidth={240} className="map">
                                {orphanage.name}
                                <Link to={`/orphanages/${orphanage.id}`} className="create-orphanage">
                                    <FiArrowDownRight size={20} color="#fff" />
                                </Link>

                            </Popup>
                        </Marker>
                    )
                })}



            </Map>
            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#fff" />
            </Link>
        </div>
    )
}
export default OphanagesMap;