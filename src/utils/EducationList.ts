import type { ImageMetadata } from "astro";

import {
    KVLogo, VITLogo
} from "../assets/Logos";

import {
    SchoolingShot, BachelorsShot
} from "../assets/Shots";

type EducationListType = {
    Degree: string,
    Institution: string,
    Timeline: string,
    Details: string[],
    Logo: ImageMetadata,
    Shot: ImageMetadata,
    Theme: string,
    Link: string,
    LogoSize: number
}[];

export const EducationList: EducationListType = [
    {
        Degree: "Bachelors Degree",
        Institution: "VIT Bhopal University",
        Timeline: "2023 - 2027",
        Details: [
            "B.Tech in Computer Science & Engineering",
            "Specialization in E-commerce and Technology",
            "CGPA: 8.02 / 10.0"
        ],
        Logo: VITLogo,
        Shot: BachelorsShot,
        Theme: "#3B82F6",
        Link: "https://vitbhopal.ac.in/",
        LogoSize: 45
    },
    {
        Degree: "Schooling",
        Institution: "Kendriya Vidyalaya No. 2 Jalahalli East, Bengaluru",
        Timeline: "2011 - 2023",
        Details: [
            "Class XII (High School): 75.7%",
            "Class X (Secondary School): 85.0%"
        ],
        Logo: KVLogo,
        Shot: SchoolingShot,
        Theme: "#D97706",
        Link: "https://no2jalahalli.kvs.ac.in/",
        LogoSize: 45
    }
];
