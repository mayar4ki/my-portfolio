"use client";

import {
  Typography,
  Card,
  CardBody,
  Radio,
  Input,
  Textarea,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { EnvelopeIcon, PhoneIcon, TicketIcon } from "@heroicons/react/24/solid";

export function ContactForm() {
  return (
    <section className="px-8 py-12" >
      <a id="contact" className=" relative -top-24 invisible  "></a>
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Contact Us
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full lg:w-5/12 !text-gray-500"
        >
          Ready to get started? Feel free to reach out through the contact form,
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
              Fill up the form and our Team will get back to you within 24
              hours.
            </Typography>


            <div className="flex gap-10 flex-wrap justify-start items-center">

              <div className="flex gap-5">
                <PhoneIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white">
                  +1(424) 535 3523
                </Typography>
              </div>
              <div className="flex  gap-x-5">
                <EnvelopeIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white">
                  hello@mail.com
                </Typography>
              </div>
              <div className="flex gap-5">
                <PhoneIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white">
                  +1(424) 535 3523
                </Typography>
              </div>
              <div className="flex  gap-5">
                <EnvelopeIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white">
                  hello@mail.com
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
