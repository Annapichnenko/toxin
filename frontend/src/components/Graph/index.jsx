import React from "react";
import styles from "./graph.module.scss";
import { Cell, Pie, PieChart } from "recharts";
import { data } from "../../mocks";

export const Graph = () => {
  return (
    <div className={styles.graph}>
      <div className={styles.wrapper}>
        <div className={styles.count}>260</div>
        <div className={styles.text}>голосов</div>
      </div>
      <PieChart width={120} height={120}>
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
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={55}
          outerRadius={60}
          paddingAngle={2}
          fill="#82ca9d"
        >
          {data.map((entry, key) => (
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
