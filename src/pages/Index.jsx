import { Container, Box, Heading, Text, VStack, HStack, Image, Link, Divider } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Box bg="gray.100" p={4} borderRadius="md" boxShadow="md">
          <Heading as="h1" size="xl" mb={2}>Financial Times</Heading>
          <Text fontSize="lg">Your trusted source for financial news and analysis.</Text>
        </Box>

        <Divider />

        <Box>
          <Heading as="h2" size="lg" mb={4}>Top Stories</Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} bg="white" borderRadius="md" boxShadow="sm">
              <HStack spacing={4}>
                <Image boxSize="100px" objectFit="cover" src="https://via.placeholder.com/100" alt="Story Image" />
                <VStack align="start">
                  <Heading as="h3" size="md">Market Hits Record High</Heading>
                  <Text>Stocks surged to new highs today as investors reacted to positive economic data...</Text>
                  <Link color="teal.500" href="#">Read more</Link>
                </VStack>
              </HStack>
            </Box>

            <Box p={4} bg="white" borderRadius="md" boxShadow="sm">
              <HStack spacing={4}>
                <Image boxSize="100px" objectFit="cover" src="https://via.placeholder.com/100" alt="Story Image" />
                <VStack align="start">
                  <Heading as="h3" size="md">Tech Giants Report Earnings</Heading>
                  <Text>Leading technology companies reported their quarterly earnings today, showing...</Text>
                  <Link color="teal.500" href="#">Read more</Link>
                </VStack>
              </HStack>
            </Box>
          </VStack>
        </Box>

        <Divider />

        <Box>
          <Heading as="h2" size="lg" mb={4}>Latest Articles</Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md">Understanding the Bond Market</Heading>
              <Text>The bond market can be complex, but it's essential for investors to understand...</Text>
              <Link color="teal.500" href="#">Read more</Link>
            </Box>

            <Box p={4} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md">Cryptocurrency Trends</Heading>
              <Text>Cryptocurrencies have been on a wild ride lately, with prices fluctuating...</Text>
              <Link color="teal.500" href="#">Read more</Link>
            </Box>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;