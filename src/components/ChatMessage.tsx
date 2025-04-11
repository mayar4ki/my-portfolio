import { Typography } from "@material-tailwind/react";
import { useEffect, useRef, useState } from "react";
import { concatMap, delay, from, of, Subscription } from "rxjs";

export type ChatMessageProps = {
  sender: "user" | "model";
  status: "error" | "pending" | "success";
  message: string;
};

export const ChatMessage = (props: ChatMessageProps) => {
  const [txt, setTxt] = useState<string>("");

  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let sub: Subscription | null = null;
    boxRef.current?.scrollIntoView({ behavior: "smooth" });
    if (props.sender === "model") {
      sub = from(props.message.split(""))
        .pipe(concatMap((x) => of(x).pipe(delay(35))))
        .subscribe({
          next: (y) => {
            setTxt((old) => old + y);
            boxRef.current?.scrollIntoView({ behavior: "smooth" });
          },
        });
    }
    return () => {
      sub?.unsubscribe();
    };
  }, [props.message]);
  return (
    <div
      ref={boxRef}
      className={` flex  ${
        props.sender === "model" ? "justify-start" : "justify-end"
      }  `}
    >
      <Typography
        variant="paragraph"
        className={`
            
          ${props.sender === "model" ? "" : "bg-gray-100 "} 
  
          ${props.status === "pending" && " opacity-25 animate-pulse "}
  
          ${props.status === "error" && " opacity-90 bg-red-100 "}
  
           m-2 px-3 py-1 rounded-full font-normal
          `}
      >
        {props.sender === "model" ? txt : props.message}
        {props.sender === "model" && txt !== props.message && (
          <span className=" bg-gray-800 animate-flicker -ml-1 ">
            &nbsp;&nbsp;
          </span>
        )}
      </Typography>
    </div>
  );
};
