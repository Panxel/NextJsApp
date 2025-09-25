import Link from "next/link";

export interface Lesson{
    title : string;
    description : string;
}


export interface Video{
    id : string;
    title : string;
    lessons : Lesson[];
}


export const VIDEOS : Video[] = [
  {
    id: "video-1",
    title: "Fundamentals",
    lessons: [
      {
        title:"Intro to Next.js",
        description : "Overview of Next.js"
      },
      {
        title:"Setting up project for Next.js",
        description : "Step by step guide of Next.js"
      }
    ],
  },
  {
    id: "video-2",
    title: "Fundamentals2",
    lessons: [
      {
        title:"Intro to Next.js 2",
        description : "Overview of Next.js 2"
      },
      {
        title:"Setting up project for Next.js 2",
        description : "Step by step guide of Next.js 2"
      }
    ],
  },
];