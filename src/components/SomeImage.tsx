import React from "react";
import { Heading } from "@chakra-ui/layout";
import MotionBox from "./motion/Box";

const SomeImage = () => {
  return (
    <>
      <MotionBox
        animate={{ rotate: 15 }}
        transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
        marginY={8}
        maxWidth={[280, 400]}
        marginX="auto"
      >
        <Heading as="h3" fontSize="8xl">
          👋
        </Heading>
      </MotionBox>
    </>
  );
};

export default SomeImage;
