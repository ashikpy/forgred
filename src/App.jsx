import { useState } from "react";
import "./App.css";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

function App() {
  const [times, setTimes] = useState(0);

  const handleclick = () => {
    setTimes((e) => e + 1);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        {/* <button onClick={handleclick}>Press mee {times}</button> */}
      </div>
      <HoverCard>
        <HoverCardTrigger>Hover</HoverCardTrigger>
        <HoverCardContent>
          The React Framework - created and maintained by @vercel.
        </HoverCardContent>
      </HoverCard>
    </>
  );
}

export default App;
