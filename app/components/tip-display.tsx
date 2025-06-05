import clsx from "clsx";

interface TipDisplayProps {
  tip_amount : number;
  total_per_person: number;
  handleReset: () => void;
}

function TipDisplay({tip_amount, total_per_person, handleReset} : TipDisplayProps) {
  var isEmpty = () => {
    return tip_amount == 0 && total_per_person == 0;
  }
  return (
    <div className="bg-[#19443C] h-[22rem] w-[23rem] flex flex-col justify-between rounded-lg">
        <div>
        <div className="flex flex-rows justify-between items-center pt-10 px-6">
            <div>
            <div className="text-white text-sm">Tip Amount</div>
            <div className="text-xs text-gray-400">/ person</div>
            </div>
            <div>
            <h1 className="text-4xl text-[#21A699]">${tip_amount > 1e6 ? tip_amount.toExponential(2) : tip_amount.toFixed(2)}</h1>
            </div>
        </div>

        <div className="flex flex-rows justify-between items-center pt-10 px-6">
            <div>
            <div className="text-white text-sm">Total</div>
            <div className="text-xs text-gray-400">/ person</div>
            </div>
            <div>
            <h1 className="text-4xl text-[#21A699]">${total_per_person > 1e6 ? total_per_person.toExponential(2) : total_per_person.toFixed(2)}</h1>
            </div>
        </div>
        </div>
        <div>
          <button 
            className={clsx(
              "w-[80%] h-[3rem] bg-[#21A699] mx-10 mb-10 rounded ",
              isEmpty() ? "text-opacity-10 opacity-25" : "active:bg-[#A6E2D8]"
            )}
            onClick={handleReset}
          >RESET
          </button>
        </div>
    </div>
  );
}

export default TipDisplay;