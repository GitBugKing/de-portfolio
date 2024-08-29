import React from 'react';
import { TypewriterEffectSmooth } from "@/components/ui/typewrter-effect";
import { ThreeDCardDemo } from "@/components/ThreeDCard";

const ProjectCard = () => {
    const words = [{ text: "Project" }]
    const bank = {
        title: "Bike Sales BI Dashboard",
        desc: "The Bike Sales Dashboard is a comprehensive Business Intelligence project designed to showcase North American bike sales data from 2016 to 2024. This dashboard centralizes data from multiple sources through a data warehouse, enabling efficient analysis and reporting. It visualizes key sales metrics and performance trends, supporting business users in making informed decisions.",
        git: "#",
        link: "https://public.tableau.com/app/profile/vincent.lau6085/viz/dev-bike-store-dashboard/BikeSalesDashboard"
    }
    const bms = {
        title: "Car Sales Dashboard",
        desc: "The Car Sales Dashboard is a Business Intelligence project aimed at providing detailed insights into car sales data. This project centralizes and visualizes sales data for interactive analysis and reporting, supporting decision-making by offering a comprehensive view of sales KPIs and performance metrics.",
        git: "#",
        link: "https://app.powerbi.com/view?r=eyJrIjoiZWI3NDhlYzItZGM1Yy00YThiLTg0M2QtM2Y5ZWZiNTM2NjgwIiwidCI6IjI2Y2NmYmI0LTc4MTYtNGY0My1hMjM2LWI2ZmZmYjg0Y2ZjMSIsImMiOjEwfQ%3D%3D"
    }
    const mac = {
        title: "AI: Topic Modeling",
        desc: "This project includes a RESTful API that allows users to submit text data and receive topic modeling results. Users can input text data, and the API returns the identified topics along with their associated keywords. This system processes extensive text data to uncover latent themes, providing valuable insights in fields such as news classification, social media analysis, and academic research.",
        git: "https://github.com/GitBugKing/GitBugKing-Topic-Modelling-on-Google-Retrieval-History-for-Enhancing-User-Experience",
        link: "#"
    }

    return (
        <div
            className="relative w-full mt-16 flex flex-col items-center"
            id={"project"}
        >
            <TypewriterEffectSmooth words={words} />
            <div className="flex w-full items-center gap-8 justify-center">
                <div className="w-1/3">
                    <ThreeDCardDemo img={"/Bike Sales Dashboard.png"} pro={bank} />
                </div>
                <div className="w-1/3">
                    <ThreeDCardDemo img={"/Car_Sales_Dashboard.png"} pro={bms} />
                </div>
                <div className="w-1/3">
                    <ThreeDCardDemo img={"/LDA.png"} pro={mac} />
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;


