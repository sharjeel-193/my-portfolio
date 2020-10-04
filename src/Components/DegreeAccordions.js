import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import './DegreeAccordions.css'
// import 'react-accessible-accordion/dist/fancy-example.css';

function DegreeAccordions() {

    const degrees = [
        {
            name: "Cambridge O'Levels",
            year: "Passed in 2017",
            institute: "Divisional Model College",
            resut: "Grades: 4 A*, 4 A"
        },
        {
            name: "Intermediate in Computer Sciences",
            year: "Passed in 2019",
            institute: "Punjab College of Science Faisalabad",
            resut: "Marks: 1014/1100, Percentage:92%"
        },
        {
            name: "BS (Computer Science)",
            year: "2019 - (Currently enrolled)",
            institute: "SEECS - NUST",
            resut: "Current CGPA: 3.9"
        },
    ]

    return (
        <div className="degree-container">
            <Accordion allowZeroExpanded>
                {degrees.map((item) => (
                    <AccordionItem key={item.uuid}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                {item.name}
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <h5>{item.year} - {item.institute}</h5>
                            <h3>{item.resut}</h3>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}

export default DegreeAccordions
