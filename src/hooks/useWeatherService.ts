import { useContext } from "react";
import weatherServiceContext from "../contexts/WeatherServiceContext";

export default function() {
  return useContext(weatherServiceContext);
}