"use client";

import React, {useState, createContext, useContext} from 'react'
import { links } from "@/lib/data"

type sectionName = (typeof links)[number]["name"];

type ActiveSectionContextProviderProps = {
    children: React.ReactNode;
}

type ActiveSectionContextType = {
    activeSection: sectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<sectionName>> 
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
}

 export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

function ActiveSectionContextProvider({
    children,
}: ActiveSectionContextProviderProps) {
    const [activeSection, setActiveSection] = useState<sectionName>("Home");
    const [timeOfLastClick, setTimeOfLastClick] = useState(0); // we need to keep track of this to disable the observer temporarily when the user clicks on the link

  return (
    <ActiveSectionContext.Provider
        value={{
            activeSection,
            setActiveSection,
            timeOfLastClick,
            setTimeOfLastClick,
        }}
    >
        {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext(){
const context = useContext(ActiveSectionContext);

if (context === null) {
    throw new Error(
        "useActiveSectionContext must be used within an ActiveSectionContextProvider." 
    );
 }

 return context;
}

export default ActiveSectionContextProvider
