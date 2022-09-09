import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import styles from './forecast.module.css';

const WEEK_DAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <React.Fragment>
      <label className={styles.title}>Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className={styles.daily_item}>
                  <img
                    alt="weather"
                    className={styles.icon_small}
                    src={`icons/${item.weather[0].icon}.png`}
                  ></img>
                  <label className={styles.day}>{forecastDays[idx]}</label>
                  <label className={styles.description}>
                    {item.weather[0].description.toUpperCase()}
                  </label>
                  <label className={styles.min_max}>
                    {Math.round(item.main.temp_min)}°C /
                    {Math.round(item.main.temp_max)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className={styles.details_grid}>
                <div className={styles.details_grid_item}>
                  <label>Pressure: </label>
                  <label>{Math.round(item.main.pressure * 0.1)} kPa</label>
                </div>
                <div className={styles.details_grid_item}>
                  <label>Humidity: </label>
                  <label>{item.main.humidity}%</label>
                </div>
                <div className={styles.details_grid_item}>
                  <label>Clouds: </label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className={styles.details_grid_item}>
                  <label>Wind Speed: </label>
                  <label>{Math.round(item.wind.speed * 3.6)}km/h</label>
                </div>
                <div className={styles.details_grid_item}>
                  <label>Sea Level: </label>
                  <label>{item.main.sea_level}m</label>
                </div>
                <div className={styles.details_grid_item}>
                  <label>Feels Like: </label>
                  <label>{Math.round(item.main.feels_like)}°C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </React.Fragment>
  );
};

export default Forecast;
