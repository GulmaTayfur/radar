import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const flightState = useSelector((store) => store.flightReducer);
  console.log(flightState);
  return (
    <header>
      <div>
        <img src="/plane-logo.png" alt="" />
        <h3>Uçuş Radarı</h3>
      </div>

      <p>
        {flightState.isLoading
          ? "Uçuşlar hesaplanıyor.."
          : flightState.isError
          ? "Üzgünüz bir hata oluştu"
          : flightState.flights.length + " Uçuş Bulundu"}
      </p>
    </header>
  );
};

export default Header;
