import blob1 from '@/public/assets/images/blob1.png';
import blob2 from '@/public/assets/images/blob2.png';
import blob3 from '@/public/assets/images/blob3.png';
import blob4 from '@/public/assets/images/blob4.png';
import blob5 from '@/public/assets/images/blob5.png';
import blob6 from '@/public/assets/images/blob6.png';
import { FaLaptopCode, FaMicrosoft, FaGoogle, FaBrain, FaAngular, FaBootstrap, FaCss3Alt, FaGithub, FaHtml5, FaNodeJs, FaPython, FaReact, FaSass, FaStackOverflow } from "react-icons/fa";
import { IoBusinessOutline } from "react-icons/io5";
import { TbBrandJavascript, TbSettingsCode } from "react-icons/tb";
import { ServiceItem, ToolAndTechnology } from "@/utilities/type";
import { AiOutlineOpenAI } from 'react-icons/ai';
import { DiJqueryLogo } from 'react-icons/di';
import { RiNextjsFill, RiFirebaseFill } from 'react-icons/ri';
import { SiTailwindcss, SiTypescript, SiChakraui, SiExpress, SiMongodb } from 'react-icons/si';
import viewJS from '@/public/assets/technologies/view-js.png';
import MUI from '@/public/assets/technologies/material-ui.png';
import dotNetCore from '@/public/assets/technologies/dot-net-core.png';
import aspDotNetCore from '@/public/assets/technologies/asp-dot-net-mvc.png';
import cSharp from '@/public/assets/technologies/c-sharp.png';
import sqlServer from '@/public/assets/technologies/sql-server.png';
import officeJS from '@/public/assets/technologies/office-js.png';
import azure from '@/public/assets/technologies/azure.png';
import chartJS from '@/public/assets/technologies/chart-js.png';

export const services: ServiceItem[] = [{
    title: "Web Development",
    description: "I build high-performance, full-stack web applications with modern technologies, ensuring seamless user experiences across all devices.",
    img: blob1,
    dataIcon: FaLaptopCode,
}, {
    title: "Office Add-ins Development",
    description: "I develop custom Office Add-ins for Word, Excel, Outlook, and PowerPoint to enhance productivity and streamline workflows.",
    img: blob2,
    dataIcon: FaMicrosoft,
}, {
    title: "Google Add-ons Development",
    description: "I create powerfull Google Add-ons for Google Sheets, Goggle Docs, and Gmail to extend functionality and automate tasks.",
    img: blob3,
    dataIcon: FaGoogle,
}, {
    title: "API Development & Integration",
    description: "I develop and integrate REST APIs, including Office.js and Microsoft Graph API, to enhance web and enterprise solutions.",
    img: blob4,
    dataIcon: TbSettingsCode,
}, {
    title: "OpenAI & AI Integration",
    description: "I integrate OpenAI and AI-powered solutions into web applications and Office Add-ins for intelligent automation and insights.",
    img: blob5,
    dataIcon: FaBrain,
}, {
    title: "Enterprise Productivity Solutions",
    description: "I build enterprise-grade solutions that improve efficiency, security, and collaboration within Microsoft 365 and Google Workspace.",
    img: blob6,
    dataIcon: IoBusinessOutline,
}];

export const toolsAndTechnologies: ToolAndTechnology[] = [
    { id: 1, type: 'icon', component: FaHtml5, color: '#e34c26' },
    { id: 2, type: 'icon', component: FaCss3Alt, color: '#264de4' },
    { id: 3, type: 'icon', component: FaSass, color: '#cc6699' },
    { id: 4, type: 'icon', component: FaBootstrap, color: '#563d7c' },
    { id: 5, type: 'icon', component: SiTailwindcss, color: '#38BDF8' },
    { id: 6, type: 'icon', component: TbBrandJavascript, color: '#f0db4f' },
    { id: 7, type: 'icon', component: DiJqueryLogo, color: '#0868AC' },
    { id: 8, type: 'icon', component: SiTypescript, color: '#007acc' },
    { id: 9, type: 'icon', component: FaReact, color: '#61DBFB' },
    { id: 10, type: 'icon', component: FaAngular, color: '#DD1B16' },
    { id: 11, type: 'image', src: viewJS, alt: 'Vue.js' },
    { id: 12, type: 'icon', component: RiNextjsFill },
    { id: 13, type: 'image', src: MUI, alt: 'Material UI' },
    { id: 14, type: 'icon', component: SiChakraui, color: '#4BB0A7' },
    { id: 15, type: 'icon', component: FaNodeJs, color: '#3C873A' },
    { id: 16, type: 'icon', component: SiExpress },
    { id: 17, type: 'icon', component: FaPython, color: '#4584B6' },
    { id: 18, type: 'image', src: dotNetCore, alt: '.Net Core' },
    { id: 19, type: 'image', src: aspDotNetCore, alt: 'ASP .Net Core' },
    { id: 20, type: 'image', src: cSharp, alt: 'C#' },
    { id: 21, type: 'icon', component: SiMongodb, color: '#3FA037' },
    { id: 22, type: 'image', src: sqlServer, alt: 'SQL Server' },
    { id: 23, type: 'icon', component: AiOutlineOpenAI },
    { id: 24, type: 'image', src: officeJS, alt: 'Office.js' },
    { id: 25, type: 'icon', component: RiFirebaseFill, color: '#FFC400' },
    { id: 26, type: 'image', src: azure, alt: 'Azure' },
    { id: 27, type: 'image', src: chartJS, alt: 'Chart.js' },
    { id: 28, type: 'icon', component: FaStackOverflow, color: '#F47F24' },
    { id: 29, type: 'icon', component: FaGithub },
];