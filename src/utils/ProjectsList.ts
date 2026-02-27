import type { ImageMetadata } from "astro";
import {
    HtmlIcon, CssIcon, JsIcon, ReactIcon, NodeIcon, TsIcon, NextIcon, MysqlIcon, MongoIcon, RestApiIcon, TailwindIcon, PythonIcon
} from "../assets/Icons"

import {
    NextmartLogo, ArmsLogo, VortexaLogo
} from "../assets/Logos"

import {
    NextmartShots, Armsv3Shots, VortexaShots
} from "../assets/Shots"

import {
    ARMSv3Mockup, VortexaMockup
} from "../assets/Mockup"


type ProjectsListType = {
    Name: string,
    ShortDesc: string,
    Desc: string,
    Logo: ImageMetadata,
    Shot: ImageMetadata,
    Mockup?: ImageMetadata,
    Theme: string,
    Status: string,
    Link: string,
    Source: string,
    Demo?: {
        email: string,
        password: string
    },
    Tech: {
        title: string,
        description: string,
        icon: ImageMetadata
    }[],
    features: {
        title: string,
        description: string
    }[],
    hideProject: boolean,
    LogoSize: number,
    versions: {
        title: string,
        version: string
    }[]
}[]

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
        description: "JavaScript runtime for server-side applications, enabling scalable and event-driven architecture.",
        icon: NodeIcon
    },
    TypeScript: {
        title: "TypeScript",
        description: "A superset of JavaScript adding static typing for building large-scale applications with enhanced maintainability and tooling support.",
        icon: TsIcon
    },
    Next: {
        title: "Next.js",
        description: "A React framework for server-side rendering, static site generation, and routing, offering improved performance and SEO optimization.",
        icon: NextIcon
    },
    MySQL: {
        title: "MySQL",
        description: "Open-source relational database management system for storing and managing structured data.",
        icon: MysqlIcon
    },
    MongoDB: {
        title: "MongoDB",
        description: "NoSQL database offering flexibility and scalability for storing and managing data efficiently.",
        icon: MongoIcon
    },
    Python: {
        title: "Python",
        description: "High-level programming language known for its readability and versatility, widely used in web development, data science, and more.",
        icon: PythonIcon
    },
    Flask: {
        title: "Flask",
        description: "A lightweight WSGI web application framework in Python.",
        icon: PythonIcon
    },
    TailwindCSS: {
        title: "Tailwind CSS",
        description: "A utility-first CSS framework providing pre-designed, atomic-level utility classes for rapid UI development.",
        icon: TailwindIcon
    },
    RestApi: {
        title: "REST API",
        description: "Representational State Transfer Application Programming Interface.",
        icon: RestApiIcon
    }
};

// Common Features List
const FeatureList = {
    Responsive: {
        title: "Responsive Design",
        description: "Enjoy a seamless experience across devices with a responsive design that adapts to various screen sizes and orientations."
    },
    SEO: {
        title: "SEO Optimization",
        description: "Crafted with SEO best practices, ensuring optimal visibility on search engines."
    }
}

export const ProjectsList: ProjectsListType = [
    {
        Name: "Product Rec. System",
        ShortDesc: "Boosted user engagement and sales by creating a machine learning product recommendation system that delivered personalized suggestions.",
        Desc: "Developed a Product Recommendation System for an E-commerce website. This system boosted user engagement and sales by leveraging machine learning algorithms to deliver personalized product suggestions to users based on their behavior and preferences.",
        Logo: NextmartLogo, // Placeholder
        Shot: NextmartShots, // Placeholder
        Mockup: ARMSv3Mockup, // Placeholder
        Theme: "#090b0b",
        Status: "completed",
        Link: "#",
        Source: "https://github.com/Pranav-Sharma717/E-commerce_Recommendation_System",
        Tech: [TechInfo.HTML, TechInfo.CSS, TechInfo.JavaScript, TechInfo.Python, TechInfo.Flask],
        features: [
            {
                title: "Personalized Suggestions",
                description: "Delivers tailored product recommendations to each user."
            },
            {
                title: "Machine Learning Integration",
                description: "Uses ML algorithms to analyze user data and predict preferences."
            },
            FeatureList.Responsive
        ],
        hideProject: false,
        LogoSize: 40,
        versions: []
    },
    {
        Name: "FinSage",
        ShortDesc: "A web platform that leverages LLMs and financial models to summarize government budgets and provide personalized financial guidance.",
        Desc: "FinSage is a web platform that leverages Large Language Models (LLMs) and financial models to summarize government budgets and provide personalized financial guidance. It helps users understand tax slabs, optimize asset allocation, and develop effective savings strategies for enhanced financial inclusion.",
        Logo: ArmsLogo, // Placeholder
        Shot: Armsv3Shots, // Placeholder
        Mockup: ARMSv3Mockup, // Placeholder
        Theme: "#FFF",
        Status: "completed",
        Link: "#",
        Source: "https://github.com/Pranav-Sharma717/finsage",
        Tech: [TechInfo.Python, TechInfo.Flask, TechInfo.RestApi], // Approximating NLP/LLM
        features: [
            {
                title: "Budget Summarization",
                description: "Summarizes complex government budgets into easy-to-understand insights using LLMs."
            },
            {
                title: "Personalized Guidance",
                description: "Provides tailored financial advice, including tax planning and asset allocation."
            },
            FeatureList.Responsive
        ],
        hideProject: false,
        LogoSize: 50,
        versions: []
    },
    {
        Name: "Traffic Sign Recognition",
        ShortDesc: "Built a Convolutional Neural Network for traffic sign classification using the GTSRB dataset (43 classes, 50k+ images). Achieved 98% test accuracy.",
        Desc: "Built a Convolutional Neural Network (CNN) for traffic sign classification using the GTSRB dataset (43 classes, 50,000+ images).  The model achieved 98% test accuracy, outperforming baseline models, demonstrating proficiency in Deep Learning and Computer Vision.",
        Logo: VortexaLogo, // Placeholder
        Shot: VortexaShots, // Placeholder
        Mockup: VortexaMockup, // Placeholder
        Theme: "#fff",
        Status: "completed",
        Link: "#",
        Source: "https://github.com/Pranav-Sharma717/Traffic-sign-classifier",
        Tech: [TechInfo.Python, TechInfo.RestApi], // Using available icons, approximating CNN/PyTorch with Python
        features: [
            {
                title: "High Accuracy",
                description: "Achieved 98% test accuracy on the GTSRB dataset."
            },
            {
                title: "Deep Learning",
                description: "Implemented using Convolutional Neural Networks (CNNs) for robust image classification."
            },
            FeatureList.Responsive
        ],
        hideProject: false,
        LogoSize: 50,
        versions: []
    },
    {
        Name: "Smartupcycle",
        ShortDesc: "A full-stack web platform for upcycling ideas, analyzing carbon footprint, and sharing DIY creations.",
        Desc: "smartUpCycle is a full-stack web platform that:\n\nSuggests upcycling ideas from common waste items.\nAnalyzes your personal carbon footprint.\nLets users post and showcase their DIY upcycled creations.\nEncourages sustainable behavior through community and gamification.",
        Logo: NextmartLogo, // Placeholder
        Shot: NextmartShots, // Placeholder
        Mockup: ARMSv3Mockup, // Placeholder
        Theme: "#22c55e",
        Status: "completed",
        Link: "#",
        Source: "https://github.com/Pranav-Sharma717/smartUpCycle1",
        Tech: [TechInfo.React, TechInfo.Node, TechInfo.MongoDB, TechInfo.TailwindCSS],
        features: [
            {
                title: "Upcycling Ideas",
                description: "Suggests upcycling ideas from common waste items."
            },
            {
                title: "Carbon Footprint",
                description: "Analyzes your personal carbon footprint."
            },
            {
                title: "Showcase DIY",
                description: "Lets users post and showcase their DIY upcycled creations."
            },
            {
                title: "Gamification",
                description: "Encourages sustainable behavior through community and gamification."
            },
            FeatureList.Responsive
        ],
        hideProject: false,
        LogoSize: 45,
        versions: []
    },
    {
        Name: "Coding Puzzles",
        ShortDesc: "A revolutionary platform for coding enthusiasts, offering interactive visualizations and beginner-friendly articles.",
        Desc: "A revolutionary platform for coding enthusiasts, problem solvers, and anyone eager to unlock the mysteries of efficient programming. Coding Puzzles isn’t just a tool; it’s a teacher. With every feature, we aim to remove intimidation from coding and replace it with confidence.",
        Logo: ArmsLogo, // Placeholder
        Shot: Armsv3Shots, // Placeholder
        Mockup: ARMSv3Mockup, // Placeholder
        Theme: "#3b82f6",
        Status: "completed",
        Link: "#",
        Source: "https://github.com/Pranav-Sharma717/HackathonProject",
        Tech: [TechInfo.Next, TechInfo.TypeScript, TechInfo.TailwindCSS],
        features: [
            {
                title: "Interactive Visualizations",
                description: "Simplifies complex algorithms with interactive visualizations."
            },
            {
                title: "Beginner-friendly Articles",
                description: "Breaks down coding puzzles into easy-to-understand concepts."
            },
            {
                title: "Example Codes",
                description: "Bridges the gap between theory and application."
            },
            FeatureList.Responsive
        ],
        hideProject: false,
        LogoSize: 45,
        versions: []
    },
    {
        Name: "Text to Handwritten",
        ShortDesc: "A Python tool that converts typed text into a handwritten document.",
        Desc: "A simple yet powerful tool built using Python to convert digital text into a handwritten format. It makes creating assignments and creative documents easier by producing a natural handwriting aesthetic from any provided text.",
        Logo: VortexaLogo, // Placeholder
        Shot: VortexaShots, // Placeholder
        Mockup: VortexaMockup, // Placeholder
        Theme: "#f59e0b",
        Status: "completed",
        Link: "#",
        Source: "https://github.com/Pranav-Sharma717/Text-To-Handwritten",
        Tech: [TechInfo.Python],
        features: [
            {
                title: "Handwriting Generation",
                description: "Accurately maps digital text formats to a realistic handwriting representation."
            },
            {
                title: "Python Powered",
                description: "Utilizes Python libraries for fast and seamless conversion."
            },
            FeatureList.Responsive
        ],
        hideProject: false,
        LogoSize: 50,
        versions: []
    }
]