import * as React from "react";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarRange } from "lucide-react";
import { PopoverClose } from "@radix-ui/react-popover";

interface TimeState {
  from?: string | undefined;
  to?: string | undefined;
}

interface DatePickerProps {
  className?: React.HTMLAttributes<HTMLDivElement>;
  date: DateRange | undefined;
  setDate: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
  time: TimeState;
  setTime: React.Dispatch<
    React.SetStateAction<{ from: string | undefined; to: string | undefined }>
  >;
  disabledDates: Date[];
}

export function DatePickerWithRange({
  className,
  date,
  setDate,
  time,
  setTime,
  disabledDates,
}: DatePickerProps) {
  const handleTimeChange =
    (field: "from" | "to") => (event: React.ChangeEvent<HTMLInputElement>) => {
      setTime((prev) => ({
        ...prev,
        [field]: event.target.value,
      }));
    };

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarRange className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {time?.from && time?.to ? (
                    <>
                      {format(date.from, "LLL dd, y")} -{" "}
                      {format(date.to, "LLL dd, y")}
                      <div>
                        ({time.from} - {time.to})
                      </div>
                    </>
                  ) : (
                    <>
                      {format(date.from, "LLL dd, y")} -{" "}
                      {format(date.to, "LLL dd, y")}
                    </>
                  )}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date range</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            fromDate={new Date()}
            onSelect={setDate}
            numberOfMonths={2}
            disabled={disabledDates}
          />
          <div className="flex gap-4 p-4">
            <div>
              <label htmlFor="fromTime">From Time:</label>
              <input
                type="time"
                id="fromTime"
                onChange={handleTimeChange("from")}
              />
            </div>
            <div>
              <label htmlFor="toTime">To Time:</label>
              <input
                type="time"
                id="toTime"
                onChange={handleTimeChange("to")}
              />
            </div>
          </div>
          <PopoverClose className="ml-[70%] lg:ml-[85%] py-3">
            <Button className="">Save</Button>
          </PopoverClose>
        </PopoverContent>
      </Popover>
    </div>
  );
}
