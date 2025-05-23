import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import Link from "next/link";

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
  href: string;
}

export function ProjectCard({ img, title, desc, href }: ProjectCardProps) {
  return (
    <Card color="transparent" shadow={false}>
      <CardHeader floated={false} className="mx-0 mt-0 mb-6 h-48  hover:scale-105 transition-all duration-300 ">
        <Image
          src={img}
          alt={title}
          width={768}
          height={768}
          className="h-full w-full object-cover"
        />
        <div className=" absolute top-0 bottom-0 right-0  left-0 from-black to-transparent bg-gradient-to-b opacity-5 ">

        </div>
      </CardHeader>

      <CardBody className="p-0">

        <Typography className="mb-2 font-semibold text-xl text-blue-gray-800">
          {title}
        </Typography>

        <Typography className="mb-6 font-normal !text-gray-500">
          {desc}
        </Typography>


        {href ? <Link href={href}>
          <Button color="gray" size="sm">
            see details
          </Button>
        </Link> :
          <Button disabled color="gray" size="sm">
            Coming Soon
          </Button>}

      </CardBody>
    </Card>
  );
}

export default ProjectCard;
