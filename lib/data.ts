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
import blenderWorkhop from "@/public/blender-workshop.png"
import dayHover from "@/public/day.png"
import stockholmSyndrome from "@/public/stockholm-syndrome.png"
import youngAndBeautiful from "@/public/young-and-beautiful.jpeg"
import flowerBoy from "@/public/flower-boy.jpeg"
import stemToTheSky from "@/public/stem-to-the-sky.gif"
import stemToTheSkyDisplay from "@/public/stem-to-the-sky-display.png"
import traditionalSized from "@/public/traditional-sized.gif"

import popcornExterior from "@/public/popcorn/exterior-front.png"

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

export const filters = ["design", "tech", "art"] as string[];
export const categories = ["select", "bonus", "upcoming"] as string[];

export const projectsData = [
    {
      title: "STEMChests",
      displayImage: stemchests,
      hoverImage: stemchests,
      page: "/projects/stemchests",
      type: ["design"] as string[],
      description: ", product design, branding, identity, logo",
      category: "select",
      featured: true,
    },
    {
      title: "Popcorn* Magazine",
      displayImage: popcornExterior,
      hoverImage: popcornExterior,
      page: "/projects/popcorn",
      type: ["design"] as string[],
      description: ", product design, publication, graphic design",
      category: "select",
      featured: true,
    },
    {
      title: "Criterion Cinemas Rebrand",
      displayImage: criterionCinemas,
      hoverImage: criterionCinemas,
      page: "",
      type: ["design"] as string[],
      description: ", identity, logo",
      category: "select",
      featured: true,
    },
    {
      title: "All Of Me, All Of You",
      displayImage: allOfMeAllOfYou,
      hoverImage: allOfMeAllOfYou,
      page: "",
      type: ["art"] as string[],
      description: ", multimedia installation, traditional art, oil",
      category: "bonus",
      featured: false,
    },
    {
      title: "Bluetooth Robotic Arm",
      displayImage: roboticArm,
      hoverImage: roboticArm,
      page: "https://youtu.be/GPSEP8xgVMI",
      type: ["tech"] as string[],
      description: ", robotics, arduino, social robotics",
      category: "bonus",
      featured: false,
    },
    {
      title: "Art Portfolio",
      displayImage: council,
      hoverImage: council,
      page: "",
      type: ["art"] as string[],
      description: ", traditional art, digital art",
      category: "bonus",
      featured: true,
    },
    {
      title: "Poster Collection",
      displayImage: hobbesAndSushiHover,
      hoverImage: hobbesAndSushiHover,
      page: "",
      type: ["design"] as string[],
      description: ", graphic design",
      category: "bonus",
      featured: true,
    },

    {
      title: "Yale Law School",
      displayImage: questionMark,
      hoverImage: questionMark,
      page: "",
      type: ["design", "tech"] as string[],
      description: ", web, software, ui/ux, identity (WIP)",
      category: "upcoming",
      featured: false,
    },
    {
      title: "Design at Yale",
      displayImage: questionMark,
      hoverImage: dayHover,
      page: "",
      type: ["design"] as string[],
      description: ", graphic design (WIP)",
      category: "upcoming",
      featured: false,
    },
    {
      title: "17o1 Records",
      displayImage: questionMark,
      hoverImage: seventeenohone,
      page: "",
      type: ["design"] as string[],
      description: ", creative direction, identity, graphic design (WIP)",
      category: "upcoming",
      featured: true,
    },
    {
      title: "PulseVision",
      displayImage: questionMark,
      hoverImage: questionMark,
      page: "",
      type: ["tech"] as string[],
      description: ", ai, software",
      category: "upcoming",
      featured: false,
    },
  ] as const;