import React from "react";

import seventeenohone from "@/public/17o1-logo.png"
import hobbesAndSushiHover from "@/public/hobbes-and-sushi-gif.gif"
import mushroomForest from "@/public/mushroom-forest.jpg"
import council from "@/public/council.png"
import bac from "@/public/bac.gif"
import bacHover from "@/public/bac-hover.gif"
import allOfMeAllOfYou from "@/public/all-of-me-all-of-you.gif"
import roboticArm from "@/public/robotic-arm.png"
import questionMark from "@/public/questionmark.png"
import stemchests from "@/public/stemchests.png"
import sculptor from "@/public/sculptor.png"
import criterionCinemas from "@/public/criterion-cinemas.gif"
import criterionCinemasHover from "@/public/criterion-hover.png"

export const links = [
    {
      name: "About",
      href: "/about",
      newTab: false,
    },
    {
      name: "Email",
      href: "mailto:aditya.das@yale.edu",
      newTab: true,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/aditya-das-me/",
      newTab: true,
    }
  ] as const;

export const filters = ["work", "school", "me", "design", "ux/tech"] as string[];
export const categories = ["✮spotlight", "2023", "2022"] as string[];

export const projectsData = [
    {
      title: "STEMChests",
      displayImage: stemchests,
      hoverImage: stemchests,
      page: "",
      type: ["design", "work", "ux/tech"] as string[],
      description: ", designed products & branding",
      category: "✮spotlight",
    },
    {
      title: "All Of Me, All Of You",
      displayImage: allOfMeAllOfYou,
      hoverImage: allOfMeAllOfYou,
      page: "",
      type: ["design", "me"] as string[],
      description: ", a multimedia installation",
      category: "✮spotlight",
    },
    {
      title: "Sculptor",
      displayImage: sculptor,
      hoverImage: sculptor,
      page: "",
      type: ["design", "me"] as string[],
      description: ", a digital illustration.",
      category: "✮spotlight",
    },
    {
      title: "Council",
      displayImage: council,
      hoverImage: council,
      page: "",
      type: ["design", "me"] as string[],
      description: ", an oil painting I created on a 24x20 canvas",
      category: "✮spotlight",
    },
    {
      title: "Criterion Cinemas",
      displayImage: criterionCinemas,
      hoverImage: criterionCinemas,
      page: "",
      type: ["design", "school"] as string[],
      description: ", a rebranding project I made for my graphic design class",
      category: "✮spotlight",
    },


    {
      title: "Yale Law School",
      displayImage: questionMark,
      hoverImage: questionMark,
      page: "",
      type: ["design", "ux/tech", "work"] as string[],
      description: ", an internet exhibition (WIP)",
      category: "2023",
    },
    {
      title: "Hobbes & Sushi",
      displayImage: hobbesAndSushiHover,
      hoverImage: hobbesAndSushiHover,
      page: "",
      type: ["design", "me"] as string[],
      description: ", a shrine dedicated to my two cats",
      category: "2023",
    },
    {
      title: "17o1 Records",
      displayImage: questionMark,
      hoverImage: seventeenohone,
      page: "",
      type: ["design", "work"] as string[],
      description: ", oversaw creative direction for signed artists (WIP)",
      category: "2023",
    },
    {
      title: "Blair Album Club",
      displayImage: bac,
      hoverImage: bacHover,
      page: "",
      type: ["design", "school"] as string[],
      description: " instagram posts I made for club promotion and outreach",
      category: "2023",
    },
    {
      title: "Mushroom Forest",
      displayImage: mushroomForest,
      hoverImage: mushroomForest,
      page: "",
      type: ["design", "me"] as string[],
      description: ", a digital illustration I made in Procreate.",
      category: "2023",
    },

    
    {
      title: "Bluetooth-Controlled Robotic Arm",
      displayImage: roboticArm,
      hoverImage: roboticArm,
      page: "",
      type: ["school", "ux/tech"] as string[],
      description: ", a digital illustration I made in Procreate.",
      category: "2022",
    },
  ] as const;