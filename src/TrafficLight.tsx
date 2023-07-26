import { useState, useEffect } from "react";
import "./App.css";
import config from "./config";

export default function TrafficLight() {
  const [currentColor, setcurrentColor] = useState("green");

  useEffect(() => {
    const { duration, next } = config[currentColor as keyof typeof config];
    let timer = setTimeout(() => {
      setcurrentColor(next);
    }, duration);
    return () => {
      clearTimeout(timer);
    };
  }, [currentColor]);

  return (
    <div>
      <div className="traffic_light">
        {Object.keys(config).map((item) => {
          return (
            <div
              className="light"
              style={{
                backgroundColor:
                  config[item as keyof typeof config].backgroundColor ===
                  currentColor
                    ? config[item as keyof typeof config].backgroundColor
                    : undefined,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
