import Leaflet from "leaflet";
import map from "../img/map.svg";

const mapIcon = Leaflet.icon({
  iconUrl: map,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60],
});
export default mapIcon;
