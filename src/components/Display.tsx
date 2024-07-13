// takes in job postings in the structure defined in
// types/responseObject.d.ts and displays them in a table

import type { JobPosting } from "../../types/responseObject.d.ts"



import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "./ui/table"

const jobPostings: JobPosting[] = [
    {
        id: 1,
        title: "Software Engineer",
        description: "We are looking for a Software Engineer to join our team. The ideal candidate will have a strong background in software development and be able to work independently and as part of a team.",
        company: "XYZ Company",
        location: "New York, NY",
        sourceWebsite: "https://www.xyzcompany.com/careers",
    },
    {
        id: 2,
        title: "Data Analyst",
        description: "We are looking for a Data Analyst to join our team. The ideal candidate will have a strong background in data analysis and be able to work independently and as part of a team.",
        company: "ABC Company",
        location: "Los Angeles, CA",
        sourceWebsite: "https://www.abccompany.com/careers",
    },
    {
        id: 3,
        title: "Marketing Manager",
        description: "We are looking for a Marketing Manager to join our team. The ideal candidate will have a strong background in marketing and be able to work independently and as part of a team.",
        company: "DEF Company",
        location: "Chicago, IL",
        sourceWebsite: "https://www.defcompany.com/careers",
    },
]

export function Display() {
    return (
        <Table>
            <TableCaption>A list of job postings.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Title</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead className="text-right">Location</TableHead>
                    <TableHead className="text-right">Source Website</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {jobPostings.map((posting) => (
                    <TableRow key={posting.id}>
                        <TableCell className="font-medium">{posting.title}</TableCell>
                        <TableCell className="text-left">{posting.description}</TableCell>
                        <TableCell>{posting.company}</TableCell>
                        <TableCell className="text-center">{posting.location}</TableCell>
                        <TableCell className="text-left">{posting.sourceWebsite}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            {/* <TableFooter>
                <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">$2,500.00</TableCell>
                </TableRow>
            </TableFooter> */}
        </Table>
    )
}
