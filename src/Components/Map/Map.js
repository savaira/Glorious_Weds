// import React, { Component } from 'react';
// import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
// import PlacesAutocomplete, {
//   geocodeByAddress,
//   getLatLng,
// } from 'react-places-autocomplete';

// export class MapContainer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       // for google map places autocomplete
//       address: '',

//       showingInfoWindow: false,
//       activeMarker: {},
//       selectedPlace: {},
  
//       mapCenter: {
//         lat: 49.2827291,
//         lng: -123.1207375
//       }
//     };
//   }

//   handleChange = address => {
//     this.setState({ address });
//   };
 
//   handleSelect = address => {
//     this.setState({ address });
//     geocodeByAddress(address)
//       .then(results => getLatLng(results[0]))
//       .then(latLng => {
//         console.log('Success', latLng);

//         // update center state
//         this.setState({ mapCenter: latLng });
//       })
//       .catch(error => console.error('Error', error));
//   };
 
//   render() {
//     return (
//       <div id='googleMaps'>
//         <PlacesAutocomplete
//           value={this.state.address}
//           onChange={this.handleChange}
//           onSelect={this.handleSelect}
//         >
//           {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
//             <div>
//               <input
//                 {...getInputProps({
//                   placeholder: 'Search Places ...',
//                   className: 'location-search-input',
//                 })}
//               />
//               <div className="autocomplete-dropdown-container">
//                 {loading && <div>Loading...</div>}
//                 {suggestions.map(suggestion => {
//                   const className = suggestion.active
//                     ? 'suggestion-item--active'
//                     : 'suggestion-item';
//                   // inline style for demonstration purpose
//                   const style = suggestion.active
//                     ? { backgroundColor: '#fafafa', cursor: 'pointer' }
//                     : { backgroundColor: '#ffffff', cursor: 'pointer' };
//                   return (
//                     <div
//                       {...getSuggestionItemProps(suggestion, {
//                         className,
//                         style,
//                       })}
//                     >
//                       <span>{suggestion.description}</span>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           )}
//         </PlacesAutocomplete>

//         <Map 
//           google={this.props.google}
//           initialCenter={{
//             lat: this.state.mapCenter.lat,
//             lng: this.state.mapCenter.lng
//           }}
//           center={{
//             lat: this.state.mapCenter.lat,
//             lng: this.state.mapCenter.lng
//           }}
//         >
//           <Marker 
//             position={{
//               lat: this.state.mapCenter.lat,
//               lng: this.state.mapCenter.lng
//             }} />
//         </Map>
//       </div>
//     )
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: ('AIzaSyBLVHqBpK4pTUHkxRLctTj6a3nHrt1d-uI')
// })(MapContainer)














// import * as React from 'react';
// import ReactMapGL from 'react-map-gl';
// import MapGL from 'react-map-gl'
// const Map=()=> {
//   const [viewport, setViewport] = React.useState({
//     latitude: 37.7577,
//     longitude: -122.4376,
//     zoom: 8
//   });

//   return (
//     <ReactMapGL
//       {...viewport}
//       width="100%"
//       height="100%"
//       onViewportChange={(viewport) => setViewport(viewport)}
//     />
//   );
// }
// export default Map;