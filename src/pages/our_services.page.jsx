import React from "react";
import { MyNavbar } from "../components/navbar";
import { MyFooter } from "../components/myfooter";
import { ServiceCard } from "../components/service_card";

export const OurServicesPage = () => {
  return (
    <>
      <MyNavbar />
      
      <ServiceCard/>

      <MyFooter />
    </>
  );
};
