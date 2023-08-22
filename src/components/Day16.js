import React, { useState, useEffect } from "react";

function Day16() {
  const [exchangeRates, setExchangeRates] = useState({});
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState("");

  useEffect(() => {
    fetchExchangeRates();
  }, []);

  const fetchExchangeRates = async () => {
    try {
      const response = await fetch(
        "https://v6.exchangerate-api.com/v6/4df7a0c852c0f564e8dea4c5/latest/USD"
      );
      const data = await response.json();
      setExchangeRates(data.conversion_rates);
    } catch (error) {
      console.error("Error fetching exchange rates:", error);
    }
  };

  const handleFromCurrencyChange = (event) => {
    setFromCurrency(event.target.value);
  };

  const handleToCurrencyChange = (event) => {
    setToCurrency(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const calculateExchange = () => {
    const rateFrom = exchangeRates[fromCurrency];
    const rateTo = exchangeRates[toCurrency];
    if (rateFrom && rateTo) {
      const convertedValue = (amount / rateFrom) * rateTo;
      setConvertedAmount(convertedValue.toFixed(2));
    }
  };

  useEffect(() => {
    calculateExchange();
  }, [fromCurrency, toCurrency, amount]);

  return (
    <div className="container mt-4 row">
      <div className="form-group w-25">
        <label htmlFor="fromCurrency">From Currency:</label>
        <select
          id="fromCurrency"
          className="form-control"
          value={fromCurrency}
          onChange={handleFromCurrencyChange}
        >
          {Object.keys(exchangeRates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group  w-25 ">
        <label htmlFor="toCurrency">To Currency:</label>
        <select
          id="toCurrency"
          className="form-control"
          value={toCurrency}
          onChange={handleToCurrencyChange}
        >
          {Object.keys(exchangeRates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group w-25">
        <label htmlFor="toCurrency">Amount</label>
        <input
          type="number"
          className="form-control"
          value={amount}
          onChange={handleAmountChange}
        />
      </div>
      <div>
        <h5 className="mt-4">
          Converted Amount: {convertedAmount} {toCurrency}
        </h5>
      </div>
    </div>
  );
}

export default Day16;
