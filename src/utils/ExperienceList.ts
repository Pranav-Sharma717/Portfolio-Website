import type { ImageMetadata } from "astro";
import {
    HtmlIcon, CssIcon, JsIcon, ReactIcon, NodeIcon, RestApiIcon, TailwindIcon, PythonIcon
} from "../assets/Icons";

import {
    DevmonkLogo, DreamSoft4uLogo
} from "../assets/Logos";

import {
    DevmonkShot, DreamSoft4uShot
} from "../assets/Shots";

type ExperienceListType = {
    Name: string,
    Company: string,
    ShortDesc: string,
    Desc: string,
    Logo: ImageMetadata,
    Shot: ImageMetadata,
    Theme: string,
    Status: string,
    Link: string,
    Source?: string,
    Tech: {
        title: string,
        description: string,
        icon: ImageMetadata
    }[],
    features: {
        title: string,
        description: string
    }[],
    hideExperience?: boolean,
    LogoSize: number
}[];

const TechInfo = {
    HTML: {
        title: "HTML",
        description: "HyperText Markup Language for creating the structure of web pages.",
        icon: HtmlIcon
    },
    CSS: {
        title: "CSS",
        description: "Cascading Style Sheets for styling the presentation of HTML documents.",
        icon: CssIcon
    },
    JavaScript: {
        title: "JavaScript",
        description: "High-level scripting language for adding interactivity to web pages.",
        icon: JsIcon
    },
    React: {
        title: "React",
        description: "JavaScript library for building user interfaces with reusable components.",
        icon: ReactIcon
    },
    Node: {
        title: "Node.js",
        description: "JavaScript runtime for server-side applications.",
        icon: NodeIcon
    },
    TailwindCSS: {
        title: "Tailwind CSS",
        description: "A utility-first CSS framework providing pre-designed, atomic-level utility classes.",
        icon: TailwindIcon
    },
    Python: {
        title: "Python",
        description: "High-level programming language used for web development, scripting, and automation.",
        icon: PythonIcon
    },
    RestApi: {
        title: "REST API",
        description: "Representational State Transfer Application Programming Interface.",
        icon: RestApiIcon
    }
};

export const ExperienceList: ExperienceListType = [
    {
        Name: "Technical Growth Operations Intern",
        Company: "Devmonk",
        ShortDesc: "Optimized technical operations, automated growth loops, and analyzed user analytics.",
        Desc: "Contributed to Devmonk as a Technical Growth Operations Intern, where I focused on scaling platform reach. Built and optimized automated workflows, integrated tracking analytics to monitor growth, and collaborated on web enhancements to maximize user acquisition and retention.",
        Logo: DevmonkLogo,
        Shot: DevmonkShot,
        Theme: "#8B5CF6",
        Status: "completed",
        Link: "https://devmonk.tech/",
        Source: "#",
        Tech: [TechInfo.HTML, TechInfo.CSS, TechInfo.JavaScript, TechInfo.React, TechInfo.Node],
        features: [
            {
                title: "Workflow Automation",
                description: "Automated user onboarding and engagement growth loops."
            },
            {
                title: "Analytics Integration",
                description: "Implemented custom user tracking metrics to identify platform growth blockers."
            }
        ],
        hideExperience: false,
        LogoSize: 45
    },
    {
        Name: "Web Content Developer & Digital Marketing Intern",
        Company: "DreamSoft4u",
        ShortDesc: "Designed web campaigns, managed SEO, and developed interactive digital web content.",
        Desc: "Served as a Web Content Developer & Digital Marketing Intern at DreamSoft4u. Designed, developed, and maintained marketing web pages and portals. Built interactive landing pages, implemented search engine optimization (SEO/SEM) best practices, and managed digital campaigns that significantly boosted corporate site visibility.",
        Logo: DreamSoft4uLogo,
        Shot: DreamSoft4uShot,
        Theme: "#3B82F6",
        Status: "completed",
        Link: "https://www.dreamsoft4u.com",
        Source: "#",
        Tech: [TechInfo.HTML, TechInfo.CSS, TechInfo.JavaScript, TechInfo.Python, TechInfo.RestApi],
        features: [
            {
                title: "SEO Optimization",
                description: "Improved search rankings and traffic metrics via SEO/SEM enhancements."
            },
            {
                title: "Landing Page Development",
                description: "Built high-converting promotional pages to capture organic traffic."
            }
        ],
        hideExperience: false,
        LogoSize: 45
    }
];
