import React from "react";
import { MyNavbar } from "../components/navbar";
import CenterHero from "../components/center_hero";
import Hero from "../components/hero";
import { MyFooter } from "../components/myfooter";

export const HomePage = () => {
  return (
    <>
      <MyNavbar />
      <Hero
        title="Welcome to S1Media"
        content=" At S1Media, we specialize in showcasing your properties,
            restaurants, cooking tips, hotels, and agricultural ventures through
            high-quality videos. Our team of professional shooting editors is
            dedicated to capturing the essence of your business and sharing it
            with a wide audience on YouTube and various social media platforms.
            We offer two years of free marketing, and after that, our rates are
            incredibly affordable at just 50 RS per day."
        img="home.jpeg"
      />

      <Hero
        title="We get audiences"
        content="Welcome to the premium video platform for today's advertisers. This is your brand's chance to connect with hard-to-reach audiences at scale, align with powerful pop culture moments, and gain access to data and marketing support that deliver proven business outcomes - all in a brand safe environment tied to the world's best content. It's everything plus the popcorn."
        img="audience.jpeg"
      />

      <Hero
        title="Our Mission"
        content=" Our mission is to provide businesses with a platform to reach a
              larger audience through engaging video content, enhancing their
              visibility and growth without upfront costs."
              img="mission.jpeg"
      />
      <MyFooter />
    </>
  );
};
