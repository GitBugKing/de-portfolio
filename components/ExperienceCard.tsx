"use client";
import React from 'react';
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { TypewriterEffectSmooth } from "@/components/ui/typewrter-effect";

const testimonials = [
    {
        quote:
            ['●	Design and build reliable data artifacts to support business overviews of volunteering networks.',
             '●	Enable end-to-end trending and monitoring of network health data through streaming with Azure cloud.',
             '●	Streamline data processing via Airflow pipelines with Spark to handle PB-level datasets.'],
        name: "Data Engineer, Analytics, Glocal Foundation, Inc, Vancouver",
        title: "May, 2024 - Present",
    },
    {
        quote:
            ['●	Lead data modelling and data artifacts development collaborating with data scientists and engineering.',
             '●	Drive and implement measurement framework of pipeline performance and warehouse data quality.'],
        name: "Database Administrator, Defend, Vancouver",
        title: "2023 - 2024",
    },
    {
        quote:
            ['●	Optimize data transformation and ingestion flow via stored procedures development in DB2.',
             '●	Automate data loading and reporting processes through Shell scripts resulting in 1 FTE saving.',
             '●	Enhance scalability and reduce maintenance costs by designing new data models in Azure cloud.'],
        name: "Data Engineer Team Lead, Rainer Technology, Beijing",
        title: "2019 - 2023",
    },
    {
        quote:
            ['● Conceptualize measurement framework and maintain dashboards of key metrics on business health.',
             '●	Established MySQL data warehouses ensuring data consistency and reliability.',
             '●	Improved backfilling capabilities of datasets through extensible store procedure development.'],
        name: "BI Engineer, Huaxia Diantong IT, Beijing",
        title: "2019",
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




