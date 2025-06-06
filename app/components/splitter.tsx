"use client"
import SplitterInputs from "./inputs";
import TipDisplay from "./tip-display";
import { useEffect, useState } from "react";


export default function Splitter() {

    const [bill, setBill] = useState<number>(0);
    const [tipPercentage, setTipPercentage] = useState<number>(0);
    const [numOfPeople, setNumOfPeople] = useState<number>(0);

    const [tipAmountPerPerson, setTipAmountPerPerson] = useState<number>(0)
    const [totalPerPerson, setTotalPerPerson] = useState<number>(0)
    const [activeTip, setActiveTip] = useState<number>(-1)
    
    useEffect(() => {
        
        if (bill > 0 && tipPercentage > 0 && numOfPeople > 0) {
            setTipAmountPerPerson((bill * (tipPercentage / 100)) / numOfPeople);
           
        }

    }, [bill, tipPercentage, numOfPeople])

    const handleReset = () => {
        setBill(0)
        setNumOfPeople(0)
        setTipPercentage(0)
        setTipAmountPerPerson(0)
        setTotalPerPerson(0)
        setActiveTip(-1)
    }
    useEffect(() => {
        if(bill > 0 && numOfPeople > 0){
            setTotalPerPerson(((bill / numOfPeople) + tipAmountPerPerson))  
        }
    }, [tipAmountPerPerson])

  return (
    <div className="bg-white sm:w-[55rem] w-screen sm:h-[50rem] size-full rounded rounded-xl px-10
    flex sm:flex-row flex-col gap-8 min-w-sm items-center justify-center sm:justify-between ">
    <SplitterInputs 
        setBill={setBill} 
        setTipPercentage={setTipPercentage} 
        setNumOfPeople={setNumOfPeople}
        setActiveTip={setActiveTip}
        bill={bill}
        numOfPeople={numOfPeople}
        tipPercentage={tipPercentage}
        activeTip={activeTip}
    />
    <TipDisplay 
        tip_amount={tipAmountPerPerson}
        total_per_person={totalPerPerson}
        handleReset={handleReset}
    />
    </div>
  );
}

