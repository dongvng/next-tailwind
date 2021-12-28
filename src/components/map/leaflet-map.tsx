import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  // useMapEvent,
} from 'react-leaflet';
import L from 'leaflet';

// import icon from 'leaflet/dist/images/marker-icon.png';
// import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// let DefaultIcon = L.icon({
//   iconUrl: icon as any,
//   shadowUrl: iconShadow as any,
// });

// L.Marker.prototype.options.icon = DefaultIcon;

const icon = L.icon({ iconUrl: '/images/marker-icon.png' });

const MapImpl = () => {
  // workaround to fix 3rd party issues
  // useEffect(() => {
  //   delete (L.Icon.Default.prototype as any)._getIconUrl;

  //   L.Icon.Default.mergeOptions({
  //     iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  //     iconUrl: require('leaflet/dist/images/marker-icon.png'),
  //     shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  //     // iconRetinaUrl: require('../../public/images/marker-icon-2x.png'),
  //     // iconUrl: require('../../public/images/marker-icon.png'),
  //     // shadowUrl: require('../../public/images/marker-shadow.png'),
  //   });
  // }, []);

  const DEFAULT_CENTER: [number, number] = [38.907132, -77.036546];

  return (
    <MapContainer
      center={DEFAULT_CENTER}
      zoom={13}
      scrollWheelZoom={false}
      className="w-full h-[700px]"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={DEFAULT_CENTER} icon={icon}>
        <Popup>
          A pretty popup. <br /> Easily customizable for user.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapImpl;

//////
// function SetViewOnClick() {
//   const map = useMapEvent('click', (e) => {
//     map.setView(e.latlng, map.getZoom(), {
//       animate: true,
//     });
//   });

//   return null;
// }
