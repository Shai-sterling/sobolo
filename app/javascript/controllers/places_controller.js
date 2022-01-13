// Visit The Stimulus Handbook for more details 
// https://stimulusjs.org/handbook/introduction
// 
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>

// import { Controller } from "stimulus"

// export default class extends Controller {
//   static targets = [ "field", "map", "latitude", "longtitude", "output" ]

//   connect() {

//     if (typeof (google) != "undefined") {
//       //console.log("google is ready");
//       //console.log(google);
//       this.initializeMap()
//     }
//     //console.log("Places");
//     //this.outputTarget.textContent = 'Hello, Stimulus!'
//   }



//   initializeMap() {
    
//     this.Map()
//     this.Marker()
//     this.autocomplete()



//     //console.log("init");
//     //console.log(googe);
//   }



//   Map() {

//     if (this._map == undefined){
//       this._map = new google.maps.Map(this.mapTarget, {
//         center: new google.maps.LatLng(40.76, -73.983 ),
//         zoom: 15
//       })
//     }
//     return this._map
//   }



//   Marker(){
//     if (this._marker== undefined){
//       this._marker = new google.maps.Marker({
//         map: this.map(),
//         anchorPoint: new google.maps.point(0,8)
//       })

//       let mapLocation = {
//         lat: parseFloat(this.latitudeTarget.value),
//         lng: parseFloat(this.longtitudeTarget.value)

//       }

//       this._marker.setPosition(mapLocation)
//       this._marker.setVisible(true)
//     }
//     return this._marker
//   }



//   autocomplete(){

//     if (this._autocomplete == undefined){
//       this._autocomplete = new google.maps.places.Autocomplete(this.fieldTarget)
//       this._autocomplete.bindTo("bounds", this.map())
//       this.autocomplete.setFields(["address_components", "geometry", "icon", "name"])
//       this._autocomplete.addListener("place_chandged?", this.locationChanged.bind(this))

//     }

//     return this._autocomplete
//   }





//   locationChanged() {
//     let place = this.autocomplete().getPlace()


//     if (!place.geometry) {
//       console.log("nothin");
//       window.alert(`No details available for input: ${place.name}`)

//       return

//     }

//     this.map().fitBouds(place.geometry.viewport)
//     this.map().setCenter(place.geometry.location)
//     this.marker().setPosition(place.geometry.location)
//     this.marker().setVisible(true)

//     this.latitude.value = place.geometry.location.lat
//     this.longtitude.value = place.geometry.location.lng
//   }

//   preventSubmit(e) {
//     if (e.key == "Enter") { e.preventDefault() }

//   }


// }
