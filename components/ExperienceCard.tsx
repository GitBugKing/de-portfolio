"use client";
import React from 'react';
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { TypewriterEffectSmooth } from "@/components/ui/typewrter-effect";

const testimonials = [
    {
        quote:
            ['● Led a volunteering dashboard project aimed at highlighting the scale and impact of the volunteer network, showcasing key demographics and metrics to attract more volunteers and secure additional funding and support. '],
        name: "Data Engineer, Glocal, Vancouver",
        title: "May, 2024 - Present",
    },
    {
        quote:
            ['● Designed and managed the database architecture for a dating app, creating 30+ well-structured table schemas, achieving high query efficiency and system performance.'],
        name: "Data Engineer, Defend, Vancouver",
        title: "May, 2023 - May, 2024",
    },
    {
        quote:
            ['● Led a team of 3 data engineers and 3 projects in designing and implementing scalable data solutions to support various business functions. Discussed customer needs and documented their requirements for projects, ensuring all data solutions met customer expectations.'],
        name: "Data Engineer Team Lead, Rainer Technology, Beijing",
        title: "Oct, 2019 - Jun, 2021",
    },
    {
        quote:
            ['● Managed BI dashboards showcase government key metrics, supporting management adjustment.',
             '● Established data warehouses to ensure data consistency from business systems to dashboards, meeting government data standards.'],
        name: "BI Engineer, Huaxia Diantong IT, Beijing",
        title: "Jun, 2019 - Oct, 2019",
    },
    {
        quote:
            ['● Led a team of 2 student interns in developing and optimizing data engineering solutions, providing mentorship and guidance to new team members, fostering their professional growth and development in data engineering practices.'],
        name: "Data Engineer Technical Lead, Guangxi Normal University, Guilin",
        title: "Jan, 2017 - May, 2019",
    }
];

const words = [{ text: "Experience" }]

const ExperienceCard = () => {
    return (
        <div
            className="relative w-full mt-16 flex flex-col items-center"
            id="experience"
        >
            <TypewriterEffectSmooth words={words} />
            <p className="text-neutral-500 text-sm w-1/2 mb-4 mt-8 dark:text-neutral-300">
                I have over 7 years of professional experience as a data engineer, with expertise in building data pipelines and data visualization across the Financial, Government, Education, Entertainment, and Consumer industries.
            </p>
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="normal"
                className="mt-10"
            />
        </div>
    );
};

export default ExperienceCard;




