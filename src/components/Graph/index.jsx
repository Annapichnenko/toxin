import React from "react";
import styles from "./graph.module.css";
import { Cell, Pie, PieChart } from "recharts";

export const Graph = () => {
  const data02 = [
    {
      name: "good",
      value: 25,
    },
    {
      name: "excellent",
      value: 50,
    },
    {
      name: "ok",
      value: 25,
    },
  ];
  return (
    <div className={styles.graph}>
      <div className={styles.wrapper}>
        <div className={styles.count}>260</div>
        <div className={styles.text}>голосов</div>
      </div>
      <PieChart width={170} height={170}>
        <defs>
          <linearGradient id="good" x1=".5" x2=".5" y2="1">
            <stop className={styles.goodStart} />
            <stop offset="1" className={styles.goodEnd} />
          </linearGradient>
          <linearGradient id="excellent" x1=".5" x2=".5" y2="1">
            <stop className={styles.excellentStart} />
            <stop offset="1" className={styles.excellentEnd} />
          </linearGradient>
          <linearGradient id="ok" x1=".5" x2=".5" y2="1">
            <stop className={styles.okStart} />
            <stop offset="1" className={styles.okEnd} />
          </linearGradient>
        </defs>
        <Pie
          data={data02}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={65}
          outerRadius={70}
          paddingAngle={2}
          fill="#82ca9d"
        >
          {data02.map((entry, key) => (
            <Cell
              key={`cell-${key}`}
              className={styles[entry.name]}
              stroke="transparent"
            />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};
