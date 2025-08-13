import { StaticImageData } from "next/image";

export interface ToastProps {
    errorMessage: string;
    successMessage: string;
    infoMessage: string;
}

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

export interface QuoteModelProps {
    isModalOpen: boolean;
    setIsModalOpen: (isOpen: boolean) => void;
}

export interface PricingPlanProps {
    name: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    notIncluded: string[];
    popular?: boolean;
}

export interface ContactProps {
    titlePre: string;
    highlight: string;
    titlePost: string;
}

export interface ContactPageProps {
    name: string;
    email: string;
    subject: string;
    project_type: string;
    message: string;
}

export interface projectProps {
    mtitle: string;
    mdescription: string;
    techstack: string[];
    githubUrl: string;
    url: string;
}

export interface ServiceItem {
    title: string;
    description: string;
    img: StaticImageData | string;
    dataIcon: React.ComponentType;
}

export interface IconTool {
    type: 'icon';
    id: number;
    component: React.ElementType;
    color?: string;
}

export interface ImageTool {
    type: 'image';
    id: number;
    src: StaticImageData;
    alt: string;
}

export type ToolAndTechnology = IconTool | ImageTool;

export interface PortfolioItem {
    addin_type: string;
    addin_name: string;
    img: StaticImageData[];
    addin_purpose: string;
    addin_description_1: string;
    addin_description_2: string;
    skills_and_deliverables: string;
    tags: string[];
}

export interface PortfolioDialogProps {
    addin_name: string;
    addin_images: StaticImageData[];
    addin_title: string;
    addin_description_1: string;
    addin_description_2: string;
    skills_and_deliverables: string;
    tags: string[];
    closeDialog: () => void;
}

export interface CustomArrowProps {
    className: string;
    style: React.CSSProperties;
    onClick: () => void;
}

export interface NoDataFoundProps {
    category?: string;
    showContactButton?: boolean;
}