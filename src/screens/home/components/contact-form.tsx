"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

import {
  Typography,
  Card,
  CardBody,
  Input,
  Textarea,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { PhoneIcon } from "@heroicons/react/24/solid";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { MY_EMAIL, MY_PHONE, SOCIAL_LINKS } from '~/constants';
import { contactMe } from '~/app/actions';
import { useActionState } from 'react'


export function ContactForm() {

  const initialState = { errors: { email: [], firstName: [], lastName: [], message: [] } };
  const [state, formAction, pending] = useActionState(contactMe, initialState);

  return <section className="px-8 py-16">
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
      <Card shadow={true} className="container mx-auto border border-gray/50">
        <CardBody className="grid grid-cols-1 lg:grid-cols-7 md:gap-10">
          <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-gray-900">
            <Typography variant="h4" color="white" className="mb-2">
              Contact Information
            </Typography>
            <Typography
              variant="lead"
              className="mx-auto mb-8 text-base !text-gray-500"
            >
              Send me a message and I'll get back to you within 24 hours. Probably less !!
            </Typography>

            <div className="flex flex-col gap-y-6 ">
              <div className="flex gap-5 justify-start items-center">
                <PhoneIcon className="h-6 w-6 text-white" />
                <Typography color="white" className=" text-md font-medium ">
                  {MY_PHONE}
                </Typography>
              </div>
              <div className="flex gap-5 justify-start items-center">
                <FontAwesomeIcon icon={faGoogle} size='lg' className=" text-white" />
                <Typography as='a' href={`mailto:${MY_EMAIL}`} color="white" className=" text-md font-medium ">
                  {MY_EMAIL}
                </Typography>
              </div>
              <div className="flex  justify-start gap-3 items-center -ml-3 " >
                {SOCIAL_LINKS.map(({ name, href, icon }) => (
                  <a key={name} href={href} target="_blank" >
                    <IconButton variant="text" color="white" >
                      <FontAwesomeIcon icon={icon} size='xl' />
                    </IconButton>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5">
            <form action={formAction}>
              <div className="mb-8 grid gap-4 lg:grid-cols-2">
                <div>
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="First Name"
                    name="firstName"
                    placeholder="eg. Lucas"
                    containerProps={{
                      className: "!min-w-full mb-3 md:mb-0",
                    }}
                  />
                  <Typography variant="small" color="gray" className="mt-2 flex items-center gap-1 font-normal" >
                    {state?.errors?.firstName?.[0] && <ExclamationCircleIcon className="h-4 w-4" />}
                    {state?.errors?.firstName?.[0]}
                  </Typography>
                </div>

                <div>
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Last Name"
                    name="lastName"
                    placeholder="eg. Jones"
                    containerProps={{
                      className: "!min-w-full",
                    }}
                  />
                  <Typography variant="small" color="gray" className="mt-2 flex items-center gap-1 font-normal" >
                    {state?.errors?.lastName?.[0] && <ExclamationCircleIcon className="h-4 w-4" />}
                    {state?.errors?.lastName?.[0]}
                  </Typography>
                </div>
              </div>
              <Input
                color="gray"
                size="lg"
                variant="static"
                label="Email"
                name="email"
                placeholder="eg. lucas@mail.com"
                containerProps={{
                  className: "!min-w-full ",
                }}
              />
              <Typography variant="small" color="gray" className="mt-2 flex items-center gap-1 font-normal mb-8" >
                {state?.errors?.email?.[0] && <ExclamationCircleIcon className="h-4 w-4" />}
                {state?.errors?.email?.[0]}
              </Typography>
              <Textarea
                color="gray"
                size="lg"
                variant="static"
                label="Your Message"
                name="message"
                containerProps={{
                  className: "!min-w-full ",
                }}
              />
              <Typography variant="small" color="gray" className="mt-2 flex items-center gap-1 font-normal mb-8" >
                {state?.errors?.message?.[0] && <ExclamationCircleIcon className="h-4 w-4" />}
                {state?.errors?.message?.[0]}
              </Typography>

              <div className="w-full flex justify-end">
                <Button disabled={pending} type='submit' className="w-full md:w-fit" color="gray" size="md">
                  {pending ? "Loading..." : "Send message"}
                </Button>
              </div>
            </form>
          </div>
        </CardBody>
      </Card>
    </div>
  </section>
}

export default ContactForm;
