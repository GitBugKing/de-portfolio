import React from 'react';
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { TypewriterEffectSmooth } from "@/components/ui/typewrter-effect";

const SkillCard = () => {
    const skills1 = [
        {
            id: 1,
            name: "Apache Airflow",
            image: "/Apache Airflow.png"
        }, {
            id: 2,
            name: "SQL",
            image: "/Azure SQL Database.png"
        }, {
            id: 3,
            name: "Git",
            image: "/Git.png"
        }, {
            id: 4,
            name: "Google Cloud",
            image: "/Google Cloud.png"
        }, {
            id: 5,
            name: "MySQL",
            image: "/MySQL.png"
        }, {
            id: 6,
            name: "sass",
            image: "/sass.png"
        }, {
            id: 7,
            name: "IBM SPSS",
            image: "/IBM SPSS.png"
        }
    ];
    const skills2 = [
        {
            id: 1,
            name: "Python",
            image: "/python.png"
        }, {
            id: 2,
            name: "NumPy",
            image: "/NumPy.png"
        }, {
            id: 3,
            name: "Pandas",
            image: "/Pandas.png"
        }, {
            id: 4,
            name: "tableau",
            image: "/tableau.png"
        }, {
            id: 5,
            name: "Power BI",
            image: "/power-bi.png"
        }, {
            id: 6,
            name: "Apache Zookeeper",
            image: "/Apache Zookeeper.png"
        }, {
            id: 7,
            name: "Apache Hadoop",
            image: "/Apache Hadoop.png"
        }, {
            id: 8,
            name: "Apache Spark",
            image: "/Apache Spark.png"
        }, {
            id: 9,
            name: "Apache HBase",
            image: "/HBase_white.png"
        }
    ];

    const words = [{ text: "Skill" }]
    return (
        <div
            className="relative w-full mt-12 flex flex-col items-center"
            id="skill"
        >
            <TypewriterEffectSmooth words={words} />
            <p className="text-neutral-500 text-sm w-1/2 mb-4 mt-8 dark:text-neutral-300">
            Proficient in Python and SQL, with expertise in cloud platforms like AWS and Azure. Experienced in working with various databases, including NoSQL options like MongoDB, and relational databases. Skilled in data analysis, visualization, and BI using tools like Power BI and Tableau. Familiar with data engineering technologies such as Hadoop and Spark, and proficient in handling data pipelines and ETL processes. 
            </p>
            <div className="flex flex-col mt-16 gap-16 justify-center items-center">
                <div className="flex">
                    <AnimatedTooltip items={skills1} />
                </div>
                <div className="flex">
                    <AnimatedTooltip items={skills2} />
                </div>
            </div>
        </div>
    );
};

export default SkillCard;