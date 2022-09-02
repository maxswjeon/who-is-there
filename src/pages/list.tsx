import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { NextPage } from "next";
import { useRouter } from "next/router";

const ListPage: NextPage = () => {
  const router = useRouter();
  const { isLoading, isError, error, data } = useQuery<{
    result: boolean;
    users: { name: string; from: string; device: string }[];
  }>(
    ["list"],
    async () => {
      const { data } = await axios.get<{
        result: boolean;
        users: { name: string; from: string; device: string }[];
      }>(process.env.NEXT_PUBLIC_BACKEND_URL + "/", {
        withCredentials: true,
      });
      return data;
    },
    { refetchInterval: 60 * 1000 }
  );

  if (isLoading) {
    return (
      <Flex
        justifyContent="center"
        alignItems="center"
        minH="100%"
        bgColor="#1e1e1e"
      >
        <Heading as="h1" size="xl" mt="6" color="white" textAlign="center">
          로딩중...
        </Heading>
      </Flex>
    );
  }

  if (isError) {
    if (!axios.isAxiosError(error)) {
      return (
        <Flex
          justifyContent="center"
          alignItems="center"
          minH="100%"
          bgColor="#1e1e1e"
          direction="column"
        >
          <Heading as="h1" size="xl" mt="6" color="white" textAlign="center">
            오류가 발생했습니다
          </Heading>
          <Text color="white" textAlign="center">
            알 수 없는 오류가 발생했습니다
          </Text>
        </Flex>
      );
    }

    const _error = error as AxiosError;

    if (!_error.response) {
      return (
        <Flex
          justifyContent="center"
          alignItems="center"
          minH="100%"
          bgColor="#1e1e1e"
          direction="column"
        >
          <Heading as="h1" size="xl" mt="6" color="white" textAlign="center">
            오류가 발생했습니다
          </Heading>
          <Text color="white" textAlign="center">
            알 수 없는 오류가 발생했습니다
          </Text>
        </Flex>
      );
    }

    if (_error.response.status === 401) {
      router.push(process.env.NEXT_PUBLIC_BACKEND_URL + "/login/start");
      return null;
    }

    return (
      <Flex
        justifyContent="center"
        alignItems="center"
        minH="100%"
        bgColor="#1e1e1e"
        direction="column"
      >
        <Heading as="h1" size="xl" mt="6" color="white" textAlign="center">
          오류가 발생했습니다
        </Heading>
        <Text color="white" textAlign="center">
          {_error.message}
        </Text>
      </Flex>
    );
  }

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      minH="100%"
      bgColor="#1e1e1e"
      direction="column"
    >
      <Heading color="white" textAlign="center" fontSize="xl">
        현재{" "}
        <Text as="span" color="yellow">
          {data.users.length}명
        </Text>
        의 부원이 동방에 있습니다
      </Heading>

      <Box mt="6">
        <Heading color="white" fontSize="xl">
          동방에 있는 부원
        </Heading>
        {data.users
          .filter((user) => user.name !== "")
          .map((user) => (
            <Text
              mt="3"
              color="white"
              textAlign="center"
              fontSize="xl"
              key={user.device}
            >
              {user.name}
            </Text>
          ))}
      </Box>
    </Flex>
  );
};

export default ListPage;
