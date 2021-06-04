import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/layout";

import Image from "next/image";
import React from "react";

function Work() {
  return (
    <Link
      className="mockup-box"
      href="#"
      target="_blank"
      width={["100%", "100%", "48%", "48%"]}
      as="article"
      rounded="lg"
      position="relative"
      height="250"
      overflow="hidden"
      mb="10"
    >
      <div className="overlay">
        <ExternalLinkIcon fontSize="35" />
      </div>
      <Image
        layout="fill"
        objectFit="cover"
        objectPosition="top"
        src="/aqad.jpeg"
      />
    </Link>
  );
}

export default Work;
