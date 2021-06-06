import { Box, Flex } from "@chakra-ui/layout";
import { ReactNode } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Meta from "./Meta";
import Navigation from "./Navigation";
import { useRouter } from "next/router";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  console.log();

  return (
    <>
      <Meta />
      <Box>
        <Flex height="100vh">
          {router.pathname === "/" && <Navigation />}
          <Box id="main" flex="1 1 auto" overflow="auto">
            <Header />
            <Box as="main" marginY={22}>
              {children}
            </Box>
            <Footer />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Layout;
