import React from 'react';
import styles from './current-weather.module.css';

const CurrentWeather = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div>
          <p className={styles.city}>{data.city}</p>
          <p className={styles.weather_description}>
            {data.weather[0].description.toUpperCase()}
          </p>
        </div>
        <img
          alt="weather"
          className={styles.weather_icon}
          src={`icons/${data.weather[0].icon}.png`}
        />
      </div>
      <div className={styles.bottom}>
        <p className={styles.temperature}>{Math.round(data.main.temp)}°C</p>
        <div className={styles.details}>
          <div className={styles.parameter_row}>
            <span className={styles.parameter_label}>Details</span>
          </div>
          <div className={styles.parameter_row}>
            <span className={styles.parameter_label}>Feels Like</span>
            <span className={styles.parameter_value}>
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          <div className={styles.parameter_row}>
            <span className={styles.parameter_label}>Wind</span>
            <span className={styles.parameter_value}>
              {Math.round(data.wind.speed * 3.6)} km/h
            </span>
          </div>
          <div className={styles.parameter_row}>
            <span className={styles.parameter_label}>Humidity</span>
            <span className={styles.parameter_value}>
              {data.main.humidity}%
            </span>
          </div>
          <div className={styles.parameter_row}>
            <span className={styles.parameter_label}>Pressure</span>
            <span className={styles.parameter_value}>
              {Math.round(data.main.pressure * 0.1)} kPa
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
