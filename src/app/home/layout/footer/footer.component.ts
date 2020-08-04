import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  // @ViewChild(MapInfoWindow, { static: false }) infoWindow: MapInfoWindow;
   copyDate = new Date().getFullYear();
  // center = { lat: 24, lng: 12 };
  // markerOptions = { draggable: false };
  // markerPositions: google.maps.LatLngLiteral[] = [];
  // zoom = 4;
  // display?: google.maps.LatLngLiteral;

  faFacebookF = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;

  // addMarker(event: google.maps.MouseEvent) {
  //   this.markerPositions.push(event.latLng.toJSON());
  // }

  // move(event: google.maps.MouseEvent) {
  //   this.display = event.latLng.toJSON();
  // }

  // openInfoWindow(marker: MapMarker) {
  //   this.infoWindow.open(marker);
  // }

  // removeLastMarker() {
  //   this.markerPositions.pop();
  // }

  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow;

  zoom = 17;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: false,
    disableDoubleClickZoom: true
  };
  markers = [];
  infoContent = '';

  ngOnInit() {
      this.center = {
        lat: 41.322725,
        lng: 19.808269
      };
      this.markers.push({
        position: {
          lat: 41.322425,
          lng: 19.808269
        },
        label: {
          color: '#31394d',
          text: 'Ajafirstchoice'
        },
        title: 'Marker Title',
        info: 'Marker info',
        options: {
          animation: google.maps.Animation.BOUNCE
        }
      });
  }

  openInfo(marker: MapMarker, content) {
    this.infoContent = content;
    this.info.open(marker);
  }
}
