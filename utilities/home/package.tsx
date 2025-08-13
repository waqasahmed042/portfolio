import { PricingPlanProps } from "../type";

export const pricingPlans: PricingPlanProps[] = [
    {
        name: "Starter",
        price: "$120",
        period: "per add-in",
        description:
            "Launch your first Office 365 add-in quickly with all the core essentials for individuals or small teams.",
        features: [
            "Office 365 Add-in (Outlook, Excel, Word & PowerPoint)",
            "React or JavaScript",
            "Tailwind or Bootstrap UI",
            "Login with Microsoft",
            "Basic REST API integration",
            "Office.js APIs integration",
            "Deployment on Microsoft AppSource",
        ],
        notIncluded: [
            "TypeScript support",
            "Material UI, Fluent UI, Chakra UI",
            "SSO, Azure AD & OAuth security",
            "Graph API, GPT-4o & custom DB",
            "Priority support & weekend delivery",
        ],
        popular: false,
    },
    {
        name: "Professional",
        price: "$250",
        period: "per add-in",
        description:
            "Comprehensive Office Add-in solutions with advanced integrations for medium to large projects.",
        features: [
            "All Pro features",
            "React & TypeScript",
            "Tailwind or Material UI",
            "SSO & Firebase integration",
            "Microsoft Graph API integration",
            "GPT-4o, OpenAI integration",
            "Test deployment via GitHub",
            "Priority support",
        ],
        notIncluded: [
            "Fluent UI & Chakra UI",
            "Custom enterprise databases",
            "Deployment on Microsoft AppSource",
            "Full weekend delivery",
        ],
        popular: true,
    },
    {
        name: "Enterprise",
        price: "$500",
        period: "per add-in",
        description:
            "Full-stack enterprise-grade Office Add-in development with premium support and maximum security.",
        features: [
            "All Professional features",
            "React & TypeScript",
            "Material UI, Fluent UI & Chakra UI",
            "Advanced security (Azure AD, OAuth)",
            "REST APIs & database integration",
            "Full Microsoft Graph API coverage",
            "Multi-framework support (React, Angular, Vue)",
            "Test deployment via GitHub",
            "Priority support",
            "Full weekend delivery",
        ],
        notIncluded: [
            "Deployment on Microsoft AppSource"
        ],
        popular: false,
    },
];