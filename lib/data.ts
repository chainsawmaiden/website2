import React from "react";

import seventeenohone from "@/public/17o1-logo.png"
import hobbesAndSushiHover from "@/public/hobbes-and-sushi-gif.gif"
import council from "@/public/council.png"
import allOfMeAllOfYou from "@/public/all-of-me-all-of-you.gif"
import roboticArm from "@/public/robotic-arm.png"
import questionMark from "@/public/questionmark.png"
import stemchests from "@/public/stemchests.png"
import criterionCinemas from "@/public/criterion-cinemas.gif"
import cimuHover from "@/public/cimu/welcome-schedule-hovering-mockup.png"
import cimuDisplay from "@/public/cimu/welcome-schedule-hovering-mockup-cropped.png"

import popcornExterior from "@/public/popcorn/exterior-front.png"
import { StaticImageData } from "next/image";

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

export const filters = ["corporate", "creative", "other"];
export const categories = ["select", "bonus", "upcoming"];

type projectType = {
  title: string,
  displayImage: StaticImageData,
  hoverImage: StaticImageData,
  page: string,
  type: string[],
  description: string,
  category: string,
  featured: boolean,
}

export const projectsData = [
    {
      title: "Cimu Onboarding",
      displayImage: cimuHover,
      hoverImage: cimuHover,
      page: "/projects/cimu",
      type: ["corporate"],
      description: ", product design, ui/ux, case study",
      category: "select",
      featured: false,
    },
    {
      title: "STEMChests",
      displayImage: stemchests,
      hoverImage: stemchests,
      page: "/projects/stemchests",
      type: ["corporate"],
      description: ", product design, branding, identity, logo",
      category: "select",
      featured: true,
    },
    {
      title: "Popcorn* Magazine",
      displayImage: popcornExterior,
      hoverImage: popcornExterior,
      page: "/projects/popcorn",
      type: ["creative"],
      description: ", product design, publication, graphic design",
      category: "select",
      featured: true,
    },
    {
      title: "Criterion Cinemas Rebrand",
      displayImage: criterionCinemas,
      hoverImage: criterionCinemas,
      page: "/projects/criterion",
      type: ["creative"],
      description: ", identity, logo",
      category: "select",
      featured: true,
    },
    {
      title: "Bluetooth-Controlled Arm",
      displayImage: roboticArm,
      hoverImage: roboticArm,
      page: "/projects/roboticarm",
      type: ["other"],
      description: ", robotics, arduino, social robotics",
      category: "bonus",
      featured: false,
    },
    {
      title: "All Of Me, All Of You",
      displayImage: allOfMeAllOfYou,
      hoverImage: allOfMeAllOfYou,
      page: "/projects/allofme",
      type: ["creative"],
      description: ", multimedia installation, traditional art, oil",
      category: "bonus",
      featured: false,
    },
    {
      title: "Art Portfolio",
      displayImage: council,
      hoverImage: council,
      page: "/projects/art",
      type: ["creative"],
      description: ", traditional art, digital art",
      category: "bonus",
      featured: true,
    },
    {
      title: "Misc. Design",
      displayImage: hobbesAndSushiHover,
      hoverImage: hobbesAndSushiHover,
      page: "/projects/design",
      type: ["creative"],
      description: ", graphic design",
      category: "bonus",
      featured: true,
    },

    {
      title: "Yale Law School",
      displayImage: questionMark,
      hoverImage: questionMark,
      page: "",
      type: ["creative"],
      description: ", ui/ux, case study, fullstack, identity (WIP)",
      category: "upcoming",
      featured: false,
    },
    {
      title: "17o1 Records",
      displayImage: questionMark,
      hoverImage: seventeenohone,
      page: "",
      type: ["creative"],
      description: ", ui/ux, creative direction, identity, graphic design (WIP)",
      category: "upcoming",
      featured: true,
    },
    {
      title: "PulseVision",
      displayImage: questionMark,
      hoverImage: questionMark,
      page: "",
      type: ["other"],
      description: ", ai, software",
      category: "upcoming",
      featured: false,
    },
  ] as projectType[];