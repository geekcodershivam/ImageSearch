import "./App.css";
import React,{useState} from "react";
import { Box } from "@material-ui/core";
import Header from "./components/Header";
import Image from "./components/Image";
export default function App() {
  const [value, setValue] = useState(null);
  
  return (
    <div className="app">
      <Box py={8} bgcolor="black">

      </Box>
      <Header data={setValue}/>
      <Image search={value}/>
    </div>
  );
}
