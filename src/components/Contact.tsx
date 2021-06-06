import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/alert";
import { Button } from "@chakra-ui/button";
import { CloseButton } from "@chakra-ui/close-button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Container, Flex, Heading, Link, Text } from "@chakra-ui/layout";
import { Textarea } from "@chakra-ui/textarea";
import { useForm, ValidationError } from "@formspree/react";
import axios from "axios";

import React, { ChangeEvent, SetStateAction, useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [state, handleSubmit] = useForm("xeqvgwwr");
  const onTextChange = (setState: any, e: ChangeEvent) => {
    const element = e.target as HTMLInputElement;
    setState(element.value);
  };

  if (state.succeeded) {
    return (
      <Container maxW="container.xl">
        <Alert
          status="success"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="200px"
        >
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="lg">
            Application submitted!
          </AlertTitle>
          <AlertDescription maxWidth="sm">
            Thanks for submitting your application. We will get back to you
            soon.
          </AlertDescription>
        </Alert>
      </Container>
    );
  }
  return (
    <Container maxW="container.xl">
      <Heading mb="5">Contact</Heading>
      <form onSubmit={handleSubmit}>
        <Flex wrap="wrap" justifyContent="space-between">
          <FormControl
            mb="5"
            width={["100%", "100%", "100%", "49%"]}
            id="name"
            isRequired
          >
            <Input
              id="name"
              type="name"
              name="name"
              size="lg"
              placeholder="You name *"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </FormControl>

          <FormControl
            mb="5"
            width={["100%", "100%", "100%", "49%"]}
            id="email"
            isRequired
          >
            <Input
              id="email"
              type="email"
              name="email"
              size="lg"
              placeholder="You email *"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </FormControl>

          <FormControl
            mb="5"
            width={["100%", "100%", "100%", "100%"]}
            id="subject"
            isRequired
          >
            <Input
              id="subject"
              type="subject"
              name="subject"
              size="lg"
              placeholder="You subject *"
            />
            <ValidationError
              prefix="Subject"
              field="subject"
              errors={state.errors}
            />
          </FormControl>

          <FormControl
            mb="5"
            width={["100%", "100%", "100%", "100%"]}
            id="message"
            isRequired
          >
            <Textarea
              id="message"
              type="message"
              name="message"
              size="lg"
              placeholder="You message *"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </FormControl>
          <Button
            type="submit"
            disabled={state.submitting}
            isFullWidth
            size="lg"
            colorScheme="purple"
            isLoading={state.submitting}
            loadingText="Submitting"
          >
            Submit
          </Button>
        </Flex>
      </form>
    </Container>
  );
}
