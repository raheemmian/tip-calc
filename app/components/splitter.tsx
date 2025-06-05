"use client"
import SplitterInputs from "./inputs";
import TipDisplay from "./tip-display";
import { useEffect, useState } from "react";


export default function Splitter() {

    const [bill, setBill] = useState<number>(0);
    const [tipPercentage, setTipPercentage] = useState<number>(0);
    const [numOfPeople, setNumOfPeople] = useState<number>(0);

    const [tipAmountPerPerson, setTipAmountPerPerson] = useState(0)
    const [totalPerPerson, setTotalPerPerson] = useState(0)
    
    useEffect(() => {
        
        if (bill > 0 && tipPercentage > 0 && numOfPeople > 0) {
            setTipAmountPerPerson((bill * (tipPercentage / 100)) / numOfPeople);
           
        }

    }, [bill, tipPercentage, numOfPeople])

    useEffect(() => {
        setTotalPerPerson(((bill / numOfPeople) + tipAmountPerPerson))
    }, [tipAmountPerPerson])

  return (
    <div className="bg-white w-[55rem] h-[25rem] rounded rounded-xl flex items-center justify-between px-10">
    <SplitterInputs 
        setBill={setBill} 
        setTipPercentage={setTipPercentage} 
        setNumOfPeople={setNumOfPeople}
    />
    <TipDisplay 
        tip_amount={tipAmountPerPerson}
        total_per_person={totalPerPerson}
    />
    </div>
  );
}

