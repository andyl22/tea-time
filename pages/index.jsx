import Head from 'next/head';
import React, { useState } from 'react';
import styles from '../styles/Home.module.scss';

export default function Home() {
  const [time, setTime] = useState(0);
  const selectableIntervals = [5, 10, 15, 30, 60];
  const startTimer = () => {
    console.log('started');
  };

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
        <select onChange={(e) => setInterval(e.target.value)}>
          {selectableIntervals.map((interval) => (
            <option>{interval}</option>
          ))}
        </select>
      </main>

      <footer className={styles.footer} />
    </div>
  );
}
