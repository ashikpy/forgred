import { Button } from "./components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

function App() {
  const [date, setDate] = useState(new Date());
  return (
    <>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
      <Button>Hello</Button>
      <Carousel>
        <CarouselContent>
          <CarouselItem>Heklllsdkfjshkjh</CarouselItem>
          <CarouselItem>This is ahikkkkkk</CarouselItem>
          <CarouselItem>...</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}

export default App;
