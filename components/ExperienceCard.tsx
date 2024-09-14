"use client";
import React from 'react';
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { TypewriterEffectSmooth } from "@/components/ui/typewrter-effect";

const testimonials = [
    {
        quote:
            ['●	Design and build reliable data artifacts to support business overviews of volunteering networks',
             '●	Leveraged data to drive insights that support clinical research, streamline the process of analyzing patient data and medication usage, and enable decision-makers to understand trends and outcomes, ultimately improving patient care'],
        title: "Sr. Data Engineer, Analytics",
        location: "Vancouver",
    },
    {
        quote:
            ['●	Lead data modelling and data artifacts development collaborating with data scientists and engineerin',
             '●	Designed a Customer Scoring System by segmenting and tagging customers using the RFM model, addressing data skewness through various pre-processing techniques such as log transformation, and feature engineering to enhance segmentation accuracy and improve system performance'],
        title: "Data Engineer, Analytics II",
        location: "Vancouver",
    },
    {
        quote:
            ['●	Achieved banking digital transformation and data ETL pipeline via stored procedures development in DB2',
             '●	Optimized 30+ index in an existing 2GB+ DB2 database, improving system query performance by 70%',
             '●	Automate data loading and logging processes through Shell scripts resulting in 1 FTE saving'],
        title: "Data Engineer, Analytics I",
        location: "Beijing",
    },
    {
        quote:
            ['● Conceptualize measurement framework and maintain dashboards of key metrics on business health',
             '●	Established MySQL data warehouses ensuring data consistency and reliability, controlled SQL code version by Git'],
        title: "BI Engineer",
        location: "Beijing",
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
                I have over 5 years of professional experience as a data engineer, with expertise in building data pipelines and data visualization across the Financial, Government, Education, Healthcare, and Marketing industries.
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




