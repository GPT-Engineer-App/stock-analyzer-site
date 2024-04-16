import React, { useState } from "react";
import { Box, Heading, Input, Button, Text, Image, Flex, Spacer, Table, Thead, Tbody, Tr, Th, Td, TableContainer } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [stockData, setStockData] = useState(null);

  const handleSearch = () => {
    // TODO: API 호출하여 주식 데이터 가져오기
    const dummyData = {
      name: "삼성전자",
      price: "62,900",
      change: "+1.29%",
      chart: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdG9jayUyMGNoYXJ0fGVufDB8fHx8MTcxMzI0Nzk2MHww&ixlib=rb-4.0.3&q=80&w=1080',
      financials: {
        marketCap: "3,680억 원",
        revenue: "2,796억 원",
        operatingIncome: "641억 원",
      },
    };
    setStockData(dummyData);
  };

  return (
    <Box p={8}>
      <Flex align="center" mb={8}>
        <Heading size="xl" mr={4}>
          주식 분석
        </Heading>
        <Spacer />
        <Flex>
          <Input placeholder="종목명 또는 티커 입력" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} mr={4} />
          <Button leftIcon={<FaSearch />} colorScheme="blue" onClick={handleSearch}>
            검색
          </Button>
        </Flex>
      </Flex>

      {stockData && (
        <Box>
          <Flex align="center" mb={8}>
            <Heading size="lg">{stockData.name}</Heading>
            <Spacer />
            <Text fontSize="2xl">{stockData.price}</Text>
            <Text fontSize="md" color={stockData.change.includes("+") ? "green.500" : "red.500"} ml={2}>
              {stockData.change}
            </Text>
          </Flex>
          <Image src={stockData.chart} mb={8} />
          <Heading size="md" mb={4}>
            재무정보
          </Heading>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>항목</Th>
                  <Th isNumeric>값</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>시가총액</Td>
                  <Td isNumeric>{stockData.financials.marketCap}</Td>
                </Tr>
                <Tr>
                  <Td>매출액</Td>
                  <Td isNumeric>{stockData.financials.revenue}</Td>
                </Tr>
                <Tr>
                  <Td>영업이익</Td>
                  <Td isNumeric>{stockData.financials.operatingIncome}</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      )}
    </Box>
  );
};

export default Index;
