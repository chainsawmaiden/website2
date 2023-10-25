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

export const filters = ["design", "tech", "art", "work/freelance",] as string[];
export const categories = ["2023", "2022"] as string[];

export const projectsData = [
    {
      title: "STEMChests",
      displayImage: stemchests,
      hoverImage: stemchests,
      page: "",
      type: ["design", "work/freelance", "tech"] as string[],
      description: ", designed products & branding",
      category: "2023",
      featured: true,
    },
    {
      title: "Yale Law School",
      displayImage: questionMark,
      hoverImage: questionMark,
      page: "",
      type: ["design", "tech", "work/freelance"] as string[],
      description: ", an internet exhibition (WIP)",
      category: "2023",
      featured: false,
    },
    {
      title: "17o1 Records",
      displayImage: questionMark,
      hoverImage: seventeenohone,
      page: "",
      type: ["design", "work/freelance"] as string[],
      description: ", oversaw creative direction for signed artists (WIP)",
      category: "2023",
      featured: false,
    },
    {
      title: "Design at Yale",
      displayImage: questionMark,
      hoverImage: dayHover,
      page: "",
      type: ["design", "tech", "work/freelance"] as string[],
      description: ", worked with undergraduate design & technology collective that worked with Yale organizations and startups.",
      category: "2023",
      featured: false,
    },
    {
      title: "Hobbes & Sushi",
      displayImage: hobbesAndSushiHover,
      hoverImage: hobbesAndSushiHover,
      page: "",
      type: ["design"] as string[],
      description: ", a poster shrine dedicated to my two cats",
      category: "2023",
      featured: true,
    },
    {
      title: "Criterion Cinemas",
      displayImage: criterionCinemas,
      hoverImage: criterionCinemas,
      page: "",
      type: ["design"] as string[],
      description: ", a rebranding project I made for my graphic design class",
      category: "2023",
      featured: true,
    },
    {
      title: "Blender Workshop",
      displayImage: blenderWorkhop,
      hoverImage: blenderWorkhop,
      page: "",
      type: ["design", "work/freelance"] as string[],
      description: ", instagram post I made to advertise a blender workshop",
      category: "2023",
      featured: false,
    },
    {
      title: "Sculptor",
      displayImage: sculptor,
      hoverImage: sculptor,
      page: "",
      type: ["art"] as string[],
      description: ", a digital illustration.",
      category: "2023",
      featured: true,
    },
    {
      title: "Blair Album Club",
      displayImage: bac,
      hoverImage: bacHover,
      page: "",
      type: ["design", "work/freelance"] as string[],
      description: " instagram posts I made for club promotion and outreach",
      category: "2023",
      featured: false,
    },
    {
      title: "Council",
      displayImage: council,
      hoverImage: council,
      page: "",
      type: ["art"] as string[],
      description: ", oil on canvas, 24x20",
      category: "2023",
      featured: true,
    },
    {
      title: "STEM to the Sky",
      displayImage: stemToTheSkyDisplay,
      hoverImage: stemToTheSky,
      page: "",
      type: ["design", "work/freelance"] as string[],
      description: " weekly educational science instagram posts I designed, reached 6000+ users",
      category: "2023",
      featured: false,
    },
    {
      title: "Mushroom Forest",
      displayImage: mushroomForest,
      hoverImage: mushroomForest,
      page: "",
      type: ["art"] as string[],
      description: ", a digital illustration I made in Procreate",
      category: "2023",
      featured: false,
    },

    {
      title: "All Of Me, All Of You",
      displayImage: allOfMeAllOfYou,
      hoverImage: allOfMeAllOfYou,
      page: "",
      type: ["art"] as string[],
      description: ", a multimedia art installation",
      category: "2022",
      featured: true,
    },
    {
      title: "Bluetooth Robotic Arm",
      displayImage: roboticArm,
      hoverImage: roboticArm,
      page: "https://youtu.be/GPSEP8xgVMI",
      type: ["tech"] as string[],
      description: ", a glove-controlled robotic arm I designed and programmed with Arduino",
      category: "2022",
      featured: true,
    },
    {
      title: "Stockholm Syndrome",
      displayImage: stockholmSyndrome,
      hoverImage: stockholmSyndrome,
      page: "",
      type: ["art"] as string[],
      description: ", acrylic on canvas, 30x30",
      category: "2022",
      featured: false,
    },
    {
      title: "Young And Beautiful",
      displayImage: youngAndBeautiful,
      hoverImage: youngAndBeautiful,
      page: "",
      type: ["art"] as string[],
      description: ", oil and magazine collage on canvas, 12x12",
      category: "2022",
      featured: false,
    },
    {
      title: "Flower Boy",
      displayImage: flowerBoy,
      hoverImage: flowerBoy,
      page: "",
      type: ["art"] as string[],
      description: ", oil on canvas, 24x20",
      category: "2022",
      featured: false,
    },
  ] as const;