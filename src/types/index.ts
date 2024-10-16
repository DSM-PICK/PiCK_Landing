import React from "react";

type JobType =
  | "UI/UX Designer"
  | "Front-end Engineer"
  | "Back-end Engineer"
  | "iOS Engineer";

export type MajorType =
  | "Front-End"
  | "Back-End"
  | "iOS"
  | "Andriod"
  | "Flutter"
  | "DevOps"
  | "Design"
  | "기타";

export interface MemberProp {
  name: string;
  image: string;
  job: JobType;
  children: React.ReactNode;
}

export interface CoreVauleProp {
  title: string;
  content: string;
  index?: number;
}

export interface CareersProp {
  title: string;
  content: string;
}

export interface MajorProp {
  name: MajorType;
}
