import Image from "next/image";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Tag,
  Button,
  LinkOverlay,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import Link from "next/link";

interface IRenectArticle {
  slug: string;
  imgUrl: string;
  title: string;
  createdAt: string;
  keywords: string;
  summary: string;
}
export default function BlogPost({
  imgUrl,
  slug,
  title,
  createdAt,
  keywords,
  summary,
}: IRenectArticle) {
  return (
    <Link href={`/posts/${slug}`}>
      <a>
        <Center py={6}>
          <Box
            maxW={"445px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"xl"}
            rounded={"md"}
            p={6}
            overflow={"hidden"}
          >
            <Box
              h={"210px"}
              bg={"gray.100"}
              mt={-6}
              mx={-6}
              mb={6}
              pos={"relative"}
            >
              <Image src={imgUrl} layout={"fill"} />
            </Box>
            <Stack>
              <Box>
                {keywords.split(",").map((keyword: string) => {
                  return <Tag mr="1">{keyword}</Tag>;
                })}
              </Box>
              <Heading
                color={useColorModeValue("gray.700", "white")}
                fontSize={"2xl"}
                fontFamily={"body"}
              >
                {title}
              </Heading>
              <Text color={"gray.500"}>{summary} ...</Text>
            </Stack>
            <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
              <Avatar src={"/me.jpeg"} alt={"Author"} />
              <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                <Text fontWeight={600}>Amine Louni</Text>
                <Text color={"gray.500"}>
                  {dayjs(createdAt).format("DD MMM YYYY")}
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Center>
      </a>
    </Link>
  );
}
