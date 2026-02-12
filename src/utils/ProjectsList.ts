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
        Name: "Traffic Sign Recognition",
        ShortDesc: "Built a Convolutional Neural Network for traffic sign classification using the GTSRB dataset (43 classes, 50k+ images). Achieved 98% test accuracy.",
        Desc: "Built a Convolutional Neural Network (CNN) for traffic sign classification using the GTSRB dataset (43 classes, 50,000+ images).  The model achieved 98% test accuracy, outperforming baseline models, demonstrating proficiency in Deep Learning and Computer Vision.",
        Logo: VortexaLogo, // Placeholder
        Shot: VortexaShots, // Placeholder
        Mockup: VortexaMockup, // Placeholder
        Theme: "#fff",
        Status: "completed",
        Link: "#",
        Source: "#",
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
        Name: "Product Rec. System",
        ShortDesc: "Boosted user engagement and sales by creating a machine learning product recommendation system that delivered personalized suggestions.",
        Desc: "Developed a Product Recommendation System for an E-commerce website. This system boosted user engagement and sales by leveraging machine learning algorithms to deliver personalized product suggestions to users based on their behavior and preferences.",
        Logo: NextmartLogo, // Placeholder
        Shot: NextmartShots, // Placeholder
        Mockup: ARMSv3Mockup, // Placeholder
        Theme: "#090b0b",
        Status: "completed",
        Link: "#",
        Source: "#",
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
        Source: "#",
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
    }
]