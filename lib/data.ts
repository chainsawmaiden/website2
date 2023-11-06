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
export const categories = ["2023", "2022", "misc"] as string[];

export const projectsData = [
    {
      title: "Yale Law School",
      displayImage: questionMark,
      hoverImage: questionMark,
      page: "",
      type: ["design", "tech", "work/freelance"] as string[],
      description: ", web, software, ui/ux, identity (WIP)",
      category: "2023",
      featured: false,
    },
    {
      title: "17o1 Records",
      displayImage: questionMark,
      hoverImage: seventeenohone,
      page: "",
      type: ["design", "work/freelance"] as string[],
      description: ", creative direction, identity, graphic design (WIP)",
      category: "2023",
      featured: false,
    },
    {
      title: "Design at Yale",
      displayImage: questionMark,
      hoverImage: dayHover,
      page: "",
      type: ["design"] as string[],
      description: ", graphic design (WIP)",
      category: "2023",
      featured: false,
    },
    {
      title: "STEMChests",
      displayImage: stemchests,
      hoverImage: stemchests,
      page: "",
      type: ["design", "work/freelance"] as string[],
      description: ", product design, branding, identity, logo",
      category: "2023",
      featured: true,
    },
    {
      title: "Popcorn* Magazine",
      displayImage: questionMark,
      hoverImage: questionMark,
      page: "",
      type: ["design"] as string[],
      description: ", product design, publication, graphic design",
      category: "2023",
      featured: true,
    },
    {
      title: "Criterion Cinemas Rebrand",
      displayImage: criterionCinemas,
      hoverImage: criterionCinemas,
      page: "",
      type: ["design"] as string[],
      description: ", identity, branding, logo",
      category: "2023",
      featured: true,
    },
    {
      title: "Hobbes & Sushi",
      displayImage: hobbesAndSushiHover,
      hoverImage: hobbesAndSushiHover,
      page: "",
      type: ["design"] as string[],
      description: ", graphic design",
      category: "2023",
      featured: false,
    },
    {
      title: "Blender Workshop",
      displayImage: blenderWorkhop,
      hoverImage: blenderWorkhop,
      page: "",
      type: ["design", "work/freelance"] as string[],
      description: ", graphic design",
      category: "2023",
      featured: false,
    },
    {
      title: "Sculptor",
      displayImage: sculptor,
      hoverImage: sculptor,
      page: "",
      type: ["art"] as string[],
      description: ", digital art",
      category: "2023",
      featured: false,
    },
    {
      title: "Blair Album Club",
      displayImage: bac,
      hoverImage: bacHover,
      page: "",
      type: ["design", "work/freelance"] as string[],
      description: ", graphic design, identity",
      category: "2023",
      featured: false,
    },
    {
      title: "Council",
      displayImage: council,
      hoverImage: council,
      page: "",
      type: ["art"] as string[],
      description: ", traditional art, oil painting, 24x20",
      category: "2023",
      featured: false,
    },
    {
      title: "STEM to the Sky",
      displayImage: stemToTheSkyDisplay,
      hoverImage: stemToTheSky,
      page: "",
      type: ["design", "work/freelance"] as string[],
      description: ", graphic design, identity",
      category: "2023",
      featured: false,
    },
    {
      title: "Mushroom Forest",
      displayImage: mushroomForest,
      hoverImage: mushroomForest,
      page: "",
      type: ["art"] as string[],
      description: ", digital art",
      category: "2023",
      featured: false,
    },

    {
      title: "All Of Me, All Of You",
      displayImage: allOfMeAllOfYou,
      hoverImage: allOfMeAllOfYou,
      page: "",
      type: ["art"] as string[],
      description: ", multimedia installation, traditional art, oil",
      category: "2022",
      featured: true,
    },
    {
      title: "Bluetooth Robotic Arm",
      displayImage: roboticArm,
      hoverImage: roboticArm,
      page: "https://youtu.be/GPSEP8xgVMI",
      type: ["tech"] as string[],
      description: ", robotics, arduino",
      category: "2022",
      featured: false,
    },
    {
      title: "Stockholm Syndrome",
      displayImage: stockholmSyndrome,
      hoverImage: stockholmSyndrome,
      page: "",
      type: ["art"] as string[],
      description: ", traditional art, acrylic (30x30)",
      category: "2022",
      featured: false,
    },
    {
      title: "Young And Beautiful",
      displayImage: youngAndBeautiful,
      hoverImage: youngAndBeautiful,
      page: "",
      type: ["art"] as string[],
      description: ", traditional art, oil, collage (12x12)",
      category: "2022",
      featured: false,
    },
    {
      title: "Flower Boy",
      displayImage: flowerBoy,
      hoverImage: flowerBoy,
      page: "",
      type: ["art"] as string[],
      description: ", traditional art, oil (24x20)",
      category: "2022",
      featured: false,
    },
    {
      title: "Art Portfolio",
      displayImage: traditionalSized,
      hoverImage: traditionalSized,
      page: "",
      type: ["art"] as string[],
      description: ", traditional art, digital art",
      category: "misc",
      featured: true,
    },
    {
      title: "Poster Collection",
      displayImage: hobbesAndSushiHover,
      hoverImage: hobbesAndSushiHover,
      page: "",
      type: ["design"] as string[],
      description: ", graphic design",
      category: "misc",
      featured: true,
    },
  ] as const;