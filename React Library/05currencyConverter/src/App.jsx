import { useState } from "react";
import { InputBox } from "./components/index";
import "./App.css";
import UseCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amonut, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = UseCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const convert = () => setConvertedAmount(amonut * currencyInfo[to]);

  const swap = () => {
    setFrom[to];
    setTo[from];
  };
  return (
    <>
      <div
        className="w-full h-screen flex justify-center items-center bg-cover bg-center"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/259165/pexels-photo-259165.jpeg)`,
        }}
      >
        <div className="w-4xl bg-white rounded-md opacity-75 p-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <InputBox
              label="From"
              amount={amonut}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              onAmountChange={(amonut) => setAmount(amonut)}
              selectedCurrency={from}
            />
            <InputBox
              label="TO"
              currencyOptions={options}
              amount={convertedAmount}
              onCurrencyChange={(currency) => setTo(currency)}
              selectedCurrency={to}
              amountDisabled={true}
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
