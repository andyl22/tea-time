import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.scss';

export default function Home() {
  const [time, setTime] = useState(0);
  const [interval, setInterval] = useState(5);
  const [timeHistory, setTimeHistory] = useState([0]);
  const selectableIntervals = [5, 10, 15, 30, 60];

  const startTimer = () => {
    const newTime = timeHistory[timeHistory.length - 1] + interval;
    setTimeHistory([...timeHistory, newTime]);
    setTime(newTime);
  };

  useEffect(() => {
    let timer;
    if (time > 0) {
      timer = setTimeout(() => setTime(time - 1), 1000);
    }

    return () => clearTimeout(timer);
  }, [time]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Timer</title>
        <meta name="description" content="Gaiwan Brewing Timer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>Timer</h1>
      </header>

      <main className={styles.main}>
        <span className={styles.timer}>{time}</span>
        <button onClick={startTimer}>Start</button>
        <select
          onChange={(e) => setInterval(parseInt(e.target.value, 10))}
        >
          {selectableIntervals.map((int) => (
            <option>{int}</option>
          ))}
        </select>
      </main>

      <footer className={styles.footer} />
    </div>
  );
}
