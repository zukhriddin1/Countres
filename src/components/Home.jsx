import axios from "axios";
import React, { useState, useEffect } from "react";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async () => {
    try {
      const res = await axios.get("https://restcountries.com/v3.1/all");
      console.log(res.data);
      setCountries(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(true);
      setLoading(false);
    }
  };

  return (
    <div className="w-[1200px] mx-auto">
      <input type="text" placeholder="Search..." />
      <div className="">
        <div className="flex flex-wrap">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error fetching data</p>
          ) : (
            countries.map((country) => (
              <div
                className="w-[250px] m-[20px] text-left"
                key={country.name.common}
              >
                <img className="shadow-xl" src={country.flags.svg} alt="" />
                <h1>{country.name.common}</h1>
                <p>Population: {country.population}</p>
                <p>Region: {country.region}</p>
                <p>Capital: {country.capital}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
