"use client";

import {
  Typography,
  Card,
  CardBody,
  IconButton,
  Input,
  Tooltip,
} from "@material-tailwind/react";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { aiAssistant } from "~/app/actions";
import { useRef, useState } from "react";
import { ChatMessage, ChatMessageProps } from "~/components/ChatMessage";
import { useMutation } from "@tanstack/react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";

export const AiIndexScreen = () => {
  const fromRef = useRef<HTMLFormElement>(null);

  const [history, setHistory] = useState<ChatMessageProps[]>([]);

  const { data, isPending, mutate, reset } = useMutation({
    mutationFn: aiAssistant,
    onSuccess(data) {
      console.log(data);
      if (!data.errors) {
        setHistory((old) => {
          const prev: ChatMessageProps[] = old.map((el, index) =>
            index === old.length - 1 ? { ...el, status: "success" } : el
          );

          const res: ChatMessageProps = {
            message: data.message ?? "err",
            sender: "model",
            status: "success",
          };

          return [...prev, res];
        });
      }
    },
    onMutate(variables) {
      if (variables.get("message")) {
        setHistory((old) => [
          ...old,
          {
            message: variables.get("message") as string,
            sender: "user",
            status: "pending",
          },
        ]);
        fromRef.current?.reset();
      }
    },
    onError() {
      setHistory((old) =>
        old.map((el, index) =>
          index === old.length - 1 ? { ...el, status: "error" } : el
        )
      );
    },
  });

  return (
    <section className="px-8 py-16">
      <div className="container mx-auto mb-8 text-center">
        <Typography
          variant="lead"
          className="mx-auto w-full lg:w-10/12 !text-gray-800"
        >
          Ready to get started? Feel free to reach out through the contact form,
          and let&apos;s embark on a journey of innovation and success.
        </Typography>
      </div>
      <Card shadow={true} className="  mx-auto border border-gray/50 lg:w-1/2">
        <Tooltip content="Start a new chat">
          <IconButton
            onClick={() => {
              reset();
              setHistory([]);
            }}
            color="white"
            className=" h-8 shadow-none mt-4 ml-6 -mb-4 "
          >
            <FontAwesomeIcon
              icon={faPenToSquare}
              size="lg"
              className=" text-blue-gray-900"
            />
          </IconButton>
        </Tooltip>
        <CardBody>
          <div style={{ height: "40vh" }} className="  mb-4 overflow-y-auto ">
            {history.length === 0 && (
              <div className="  h-full flex flex-col justify-center items-center gap-2">
                <FontAwesomeIcon
                  icon={faCommentDots}
                  size="lg"
                  className=" text-blue-gray-900 p-2 bg-gray-300 rounded-md "
                />
                <Typography variant="paragraph">
                  Your conversation will appear here
                </Typography>
              </div>
            )}

            {history.map((p, index) => (
              <ChatMessage key={index} {...p} />
            ))}
          </div>
          <form ref={fromRef} action={mutate}>
            {data?.id && (
              <input
                hidden
                name="previous_response_id"
                defaultValue={data.id}
              />
            )}

            <div>
              <div className="flex w-full flex-row items-center gap-2  ">
                <Input
                  label="Message"
                  shrink
                  variant="outlined"
                  name="message"
                  placeholder="What is on your mind"
                  readOnly={isPending}
                />
                <div>
                  <IconButton
                    disabled={isPending}
                    type="submit"
                    variant="text"
                    className="rounded-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                      />
                    </svg>
                  </IconButton>
                </div>
              </div>
              <Typography
                variant="small"
                color="red"
                className="mt-2 flex items-center gap-1 font-normal mb-2"
              >
                {data?.errors?.message?.[0] && (
                  <ExclamationCircleIcon className="h-4 w-4" />
                )}
                {data?.errors?.message?.[0]}
              </Typography>
            </div>
          </form>
        </CardBody>
      </Card>
    </section>
  );
};
