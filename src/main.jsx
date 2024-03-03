import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import Tasbiih from "./components/Tasbiih";
// import Header from "./components/Header";
import Pratic from "./newcomponents/pratic";

const root = document.getElementById("root");

createRoot(root).render(
  <div>
    <Header />
    <Tasbiih />
    <Pratic />
    // {/* <Light /> */}
    {/* //{" "} */}
    {/* <div className=" mt-3 grid grid-cols-[400px_400px] gap-3 justify-around">
  //     <Menu
  //       image="https://img.freepik.com/free-photo/baked-chicken-wings-with-teriyaki-sauce_2829-19754.jpg?t=st=1708950510~exp=1708954110~hmac=15e16d6f5a07b6d6aa00ebd8203f83e1edc2bf0382c7f9500551ad114751bc69&w=1060"
  //       name="somali meal"
  //       price="20"
  //       desc="paid delivery"
  //     />
  //     <Menu
  //       image="https://img.freepik.com/free-photo/baked-chicken-wings-with-teriyaki-sauce_2829-19754.jpg?t=st=1708950510~exp=1708954110~hmac=15e16d6f5a07b6d6aa00ebd8203f83e1edc2bf0382c7f9500551ad114751bc69&w=1060"
  //       name="kenyan meal"
  //       price="30"
  //       desc="paid delivery"
  //     />
  //     <Menu
  //       image="https://img.freepik.com/free-photo/baked-chicken-wings-with-teriyaki-sauce_2829-19754.jpg?t=st=1708950510~exp=1708954110~hmac=15e16d6f5a07b6d6aa00ebd8203f83e1edc2bf0382c7f9500551ad114751bc69&w=1060"
  //       name="asian meal"
  //       price="23"
  //       desc="paid delivery"
  //     />
  //     <Menu
  //       image="https://img.freepik.com/free-photo/baked-chicken-wings-with-teriyaki-sauce_2829-19754.jpg?t=st=1708950510~exp=1708954110~hmac=15e16d6f5a07b6d6aa00ebd8203f83e1edc2bf0382c7f9500551ad114751bc69&w=1060"
  //       name="biritish meal"
  //       price="25"
  //       desc="paid delivery"
  //     />
  //     <Menu
  //       image="https://img.freepik.com/free-photo/baked-chicken-wings-with-teriyaki-sauce_2829-19754.jpg?t=st=1708950510~exp=1708954110~hmac=15e16d6f5a07b6d6aa00ebd8203f83e1edc2bf0382c7f9500551ad114751bc69&w=1060"
  //       name="germany meal"
  //       price="9"
  //       desc="paid delivery"
  //     />
  //     <Menu
  //       image="https://img.freepik.com/free-photo/baked-chicken-wings-with-teriyaki-sauce_2829-19754.jpg?t=st=1708950510~exp=1708954110~hmac=15e16d6f5a07b6d6aa00ebd8203f83e1edc2bf0382c7f9500551ad114751bc69&w=1060"
  //       name="ethobian meal"
  //       price="10"
  //       desc="paid delivery"
  //     />
  //   </div> */}
    {/* // <Footer /> */}
  </div>

  /* // <div>
  //   <div className="bg-blue-500">
  //     <h1>nooty</h1>
  //   </div>

  //   <div className="bg-red-500">
  //     <p>Built with react</p>
  //   </div>
  // </div> */
);
