import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/layout";

import Image from "next/image";
import React from "react";

interface Iwork {
  thumbnail: string;
  url: string;
}

function Work({ thumbnail, url }: Iwork) {
  return (
    <Link
      className="mockup-box"
      href={url}
      target="_blank"
      width={["100%", "100%", "48%", "48%"]}
      as="a"
      rounded="3xl"
      position="relative"
      height="350"
      overflow="hidden"
      mb="10"
      isExternal
    >
      <div className="overlay">
        <ExternalLinkIcon fontSize="35" color="#FFF" />
      </div>
      <Image
        layout="fill"
        objectFit="cover"
        objectPosition="top"
        src={thumbnail}
      />
    </Link>
  );
}

export default Work;
