"use client"
import clsx from "clsx"
const tipNames: string[] = ["5", "10", "15", "25", "50"]

interface SplitterInputProps {
    setBill : React.Dispatch<React.SetStateAction<number>>;
    setTipPercentage: React.Dispatch<React.SetStateAction<number>>;
    setNumOfPeople: React.Dispatch<React.SetStateAction<number>>;

}

function SplitterInputs({setBill, setTipPercentage, setNumOfPeople} : SplitterInputProps) {

    const isInteger = (value : string) => {
        return /^\d+$/.test(value) && Number.isInteger(Number(value));
    }

    return (
        <div className="flex flex-col justify-center gap-10 h-[25rem] text-[12px]">
            <div>
                <label className="text-[12px]">Bill
                    <div className="flex relative items-center">
                        <img src="icon-dollar.svg" className="absolute start-2" />
                        <input
                            type="text"
                            className="bg-gray-200 w-[23rem] h-10 rounded rounded-lg opacity-50 pl-4 text-[24px] text-right pr-4"
                            inputMode="numeric"
                            placeholder="0"
                            onChange={(e) => {
                                if (isInteger(e.target.value)) {
                                    setBill(Number(e.target.value));
                                }                          
                            }}
                        />
                    </div>
                </label>
            </div>
            <div>
                <label>
                    Select Tip %
                    <div className="grid grid-cols-[7rem_7rem_7rem] gap-4">
                        {tipNames.map((tip, idx) => (
                            <div
                                key={idx}
                                onClick={() => {
                                    setTipPercentage(Number(tip))
                                }}
                                className={clsx(
                                    "rounded-sm w-[7rem] h-14 text-xl  flex items-center justify-center",
                                    "bg-[#19443C] text-white"
                                )}>
                                {`${tip}%`}
                            </div>
                        ))}
                        <input
                            type="text"
                            className={clsx(
                                "rounded-sm w-[7rem] h-14 text-xl  text-center bg-gray-200 text-[#19443C]" 
                            )}
                            placeholder="Custom"
                           onChange={(e) => {
                                if (isInteger(e.target.value)) {
                                    setTipPercentage(Number(e.target.value));
                                }                          
                            }}
                        />
                        
                    </div>
                </label>
            </div>
            <div>
                <label>
                    Number of People
                    <div className="flex relative items-center">
                        <img src="icon-person.svg" className="absolute start-2" />
                        <input
                            type="text"
                            className="bg-gray-200 w-[23rem] h-10 rounded rounded-lg opacity-50 pl-4 text-[24px] text-right pr-4"
                            inputMode="numeric"
                            placeholder="0"
                            onChange={(e) => {
                                if (isInteger(e.target.value)) {
                                    setNumOfPeople(Number(e.target.value));
                                }                          
                            }}
                        />
                    </div>
                </label>
            </div>
        </div>
    );
}

export default SplitterInputs;