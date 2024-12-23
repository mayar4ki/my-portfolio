"use client";

import {
  Typography,
  Card
} from "@material-tailwind/react";
import { EnvelopeIcon, PhoneIcon, ChatBubbleBottomCenterIcon, GlobeAltIcon } from "@heroicons/react/24/solid";

export function ContactForm() {
  return (
    <section className="px-8 py-12" >
      <a id="contact" className=" relative -top-24 invisible  "></a>
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Contact Me
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full lg:w-5/12 !text-gray-600"
        >
          Ready to get started? Feel free to reach out,
          and let&apos;s embark on a journey of innovation and success.
        </Typography>
      </div>
      <div>
        <Card shadow={true} className="container mx-auto ">
          <div className="w-full rounded-lg h-full py-8 p-5 md:p-14
          bg-gray-900
          
          
          ">
            <Typography variant="h4" color="white" className="mb-2">
              Contact Information
            </Typography>
            <Typography
              variant="lead"
              className="mx-auto mb-8 text-base !text-gray-500"
            >
              Message me a message and I'll get back to you within 24 hours. Probably less !!
            </Typography>


            <div className="flex gap-10 flex-wrap justify-start items-center">

              <div className="flex gap-5 justify-start items-center">
                <PhoneIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white">
                  +971 56 812 9757
                </Typography>
              </div>
              <div className="flex gap-5 justify-start items-center">
                <ChatBubbleBottomCenterIcon className="h-6 w-6 text-white" />
                <Typography as='a' href="https://t.me/M9321m" target="_blank" variant="h6" color="white">
                  Telegram
                </Typography>
              </div>
              <div className="flex gap-5 justify-start items-center">
                <EnvelopeIcon className="h-6 w-6 text-white" />
                <Typography as='a' href="mailto:mayar.i.deeb@gmail.com" variant="h6" color="white">
                  mayar.i.deeb@gmail.com
                </Typography>
              </div>
              <div className="flex gap-5 justify-start items-center">
                <GlobeAltIcon className="h-6 w-6 text-white" />
                <Typography as='a' href="https://www.linkedin.com/in/mayar-i-deeb/" target="_blank" variant="h6" color="white">
                  LinkedIn
                </Typography>
              </div>
            </div>


          </div>
        </Card>
      </div>
    </section>
  );
}

export default ContactForm;
