"use client";
/*global google*/

import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "./components/ui/button";
import { InputForm } from "./components/InputForm";
// import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import GoogleMapReact from "google-map-react";
import { useState } from "react";
const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

const inter = Inter({ subsets: ["latin"] });
const center = { lat: 40.728899561324454, lng: -73.99569061868435 };
export default function Home() {
  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  // });
  const handleApiLoaded = (map: any, maps: any) => {
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);
    const origin = { lat: 40.756795, lng: -73.954298 };
    const destination = { lat: 41.756795, lng: -78.954298 };

    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          directionsRenderer.setDirections(result);
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  };
  return (
    <main className="h-full w-full ">
      <div className="grid grid-cols-8 max-w-5xl mx-auto">
        {/* TITLE */}
        <div className="col-span-3 mx-auto text-6xl place-self-center">
          <p>Find Routes.</p>
          <p>Be Safe.</p>
        </div>
        {/* INPUT */}
        <div className="col-span-5 ml-10">
          <InputForm />
        </div>
      </div>
      <div className="border w-full max-w-5xl mx-auto mt-8 p-2 rounded-lg">
        <p className="font-bold text-lg ">Current Condition</p>
        <p>temp: </p>
        <p>dist: </p>
      </div>
      {/* MAP */}
      {/* global google */}
      {/* <GoogleMap
        center={center}
        zoom={15}
        mapContainerStyle={{ width: "100%", height: "100%" }}
      ></GoogleMap> */}
      <div className="h-screen w-full mt-10 ">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
          }}
          defaultCenter={center}
          defaultZoom={15}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </div>
    </main>
  );
}
