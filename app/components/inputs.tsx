
import clsx from "clsx"
const tipNames: string[] = ["5", "10", "15", "25", "50"]

interface SplitterInputProps {
    setBill : React.Dispatch<React.SetStateAction<number>>;
    setTipPercentage: React.Dispatch<React.SetStateAction<number>>;
    setNumOfPeople: React.Dispatch<React.SetStateAction<number>>;
    setActiveTip: React.Dispatch<React.SetStateAction<number>>;
    bill: number;
    numOfPeople: number;
    tipPercentage: number;
    activeTip: number;

}

function SplitterInputs({setBill, setTipPercentage, setNumOfPeople, setActiveTip, bill, numOfPeople, tipPercentage, activeTip} : SplitterInputProps) {

    const isInteger = (value : string) => {
        return /^\d+$/.test(value) && Number.isInteger(Number(value));
    }


    return (
        <div className="flex flex-col justify-center gap-10 h-[25rem] mt-10 mb-4 text-[12px]">
            <div>
                <label className="text-[12px]">Bill
                    <div className="flex relative items-center">
                        <img src="icon-dollar.svg" className="absolute start-2" />
                        <input
                            type="text"
                            maxLength={22}
                            className="bg-gray-200 w-[23rem] h-10 rounded 
                            rounded-lg opacity-50 pl-4 text-[24px] text-right pr-4
                            focus:outline-none focus:ring-2 focus:ring-[#21A699] focus:cursor-pointer mt-2"
                            inputMode="numeric"
                            placeholder="0"
                            value={bill === 0 ? '' : String(bill)}
                            onChange={(e) => {
                                 if(e.target.value == '') {
                                    setBill(0)
                                }
                                else if (isInteger(e.target.value)) {
                                    setBill(Number(e.target.value));
                                }                          
                            }}
                        />
                    </div>
                </label>
            </div>
            <div>
                <div>
                    Select Tip %
                    <div className="grid sm:grid-cols-3 grid-cols-2 flex justify-center sm:items-center gap-4 mt-2">
                        {tipNames.map((tip, idx) => (
                            <button
                                key={idx}
                                className={clsx(
                                    "rounded-sm w-[7rem] h-14 text-xl focus:cursor-pointer flex items-center transition-colors justify-center",
                                    activeTip === idx
                                      ? "bg-[#A6E2D8] text-[#19443C]"
                                      : "bg-[#00474b] text-white hover:bg-[#80a3a5] "
                                )}
                                onClick={() => {
                                    setTipPercentage(Number(tip))
                                    setActiveTip(idx)
                                }}
                            >
                                {`${tip}%`}
                            </button>
                        ))}
                        <input
                            type="text"
                            className={clsx(
                                "rounded-sm w-[7rem] h-14 text-xl text-center bg-gray-200 focus:outline-none focus:ring-2 focus:ring-[#21A699] text-[#19443C] outline"
                            )}
                            value={activeTip === 6 ? String(tipPercentage) : ''}
                            placeholder="Custom"
                            onChange={(e) => {
                                if(e.target.value == "") {
                                     setTipPercentage(0);
                                     setActiveTip(-1)
                                }
                                if (isInteger(e.target.value)) {
                                    setTipPercentage(Number(e.target.value));
                                    setActiveTip(6)
                                }                          
                            }}
                        />
                        
                    </div>
                </div>
            </div>
            <div>
                <label>
                    Number of People
                    <div className="flex relative items-center mt-2">
                        <img src="icon-person.svg" className="absolute start-2" />
                        <input
                            type="text"
                            className="bg-gray-200 w-[23rem] h-10 rounded 
                            rounded-lg opacity-50 pl-4 text-[24px] text-right pr-4
                            focus:outline-none focus:ring-2 focus:ring-[#21A699]"
                            inputMode="numeric"
                            placeholder="0"
                            value={numOfPeople === 0 ? '' : String(numOfPeople)}
                            maxLength={22}
                            onChange={(e) => {
                                if(e.target.value == '') {
                                    setNumOfPeople(0)
                                }
                                else if (isInteger(e.target.value)) {
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