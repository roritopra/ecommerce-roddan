import "./ContactUsPage.css";
import { Footer } from "../../components/Footer/Footer";
import { Layout } from "../../../layout/Layout";

import { EmailLibrary } from "../../components/EmailLibrary/EmailLibrary";
import { useMemo, useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export function ContactUsPage() {
  const [position, setPosition] = useState([51.505, -0.09]);
  const map = useMemo(
    () => (
      <MapContainer center={position} zoom={12} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
        <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
        </Marker>
      </MapContainer>
    ),
    [position]
  );

  return (
    <Layout>
      <section className="mb-3">{map}</section>
      <section className="flex">
        <section className="contenedor w-1/2">
          <div className="phone-hand flex flex-col justify-end">
            <img src="/imgs/phone-hand.png" alt="Image" />
          </div>
          <div className="vr-men flex flex-col justify-end">
            <img className="" src="imgs/vr-men.png" alt="Image" />
          </div>
          <div className="head-girl flex flex-col justify-end items-center">
            <img className="" src="/imgs/contact-us girl.png" alt="Image" />
          </div>
          <div className="mac-gray flex flex-col justify-end">
            <img src="/imgs/macgray.png" alt="Image" />
          </div>
          <div className="jbl-yellow flex flex-col justify-center items-center">
            <img src="/imgs/jbl-yellow.png" alt="Image" />
          </div>
          <div className="watch-hand flex flex-col justify-center items-center w-full h-full">
            <img
              className="w-full h-full"
              src="/imgs/watch-hand.png"
              alt="Image"
            />
          </div>
        </section>

        <EmailLibrary />
      </section>
      <Footer />
    </Layout>
  );
}
