"use client";

import {
  Typography,
  Card,
  CardBody,
  Textarea,
  IconButton,
} from "@material-tailwind/react";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { aiAssistant } from "~/app/actions";
import { useActionState } from "react";
import { ChatMessage } from "~/components/ChatMessage";

export const AiIndexScreen = () => {
  const initialState = {
    errors: { message: [] },
  };
  const [state, formAction, pending] = useActionState(
    aiAssistant,
    initialState
  );

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
        <CardBody className="">
          <div style={{ height: "40vh" }} className="  mb-4 overflow-y-auto">
            <ChatMessage message="Hi" sender="user" status="success" />

            <ChatMessage
              message={` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam vitae itaque non alias perspiciatis cum quidem deserunt. Perspiciatis nostrum facere architecto sequi ipsam quaerat facilis, dolorem placeat ad culpa ut? `}
              sender="model"
              status="success"
            />
          </div>
          <form action={formAction}>
            <div>
              <div className="flex w-full flex-row items-center gap-2 rounded-[99px] border border-gray-900/10 bg-gray-900/5 p-2">
                <Textarea
                  rows={1}
                  resize={true}
                  placeholder="Your Message"
                  className="min-h-full !border-0 focus:border-transparent"
                  containerProps={{
                    className: "grid h-full",
                  }}
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <div>
                  <IconButton
                    disabled={pending}
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
                {state?.errors?.message?.[0] && (
                  <ExclamationCircleIcon className="h-4 w-4" />
                )}
                {state?.errors?.message?.[0]}
              </Typography>
            </div>
          </form>
        </CardBody>
      </Card>
    </section>
  );
};
