import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { VStack, Text, HStack, IconButton, useTheme, Heading, Box } from "native-base";
import { CaretLeft } from "phosphor-react-native";
import { useEffect, useState } from "react";
import { Loading } from "../../components/Loading";
import api from "../../services/api";

import { DetailProps } from '../../components/DetailList';

interface RouteParams {
  id: string;
  title: string;
  authors: {
    name: string;
  }
}

export function Details() {
  const [data, setData] = useState<RouteParams>();
  const { colors } = useTheme();

  const route = useRoute();
  const navigation = useNavigation();

  const { id } = route.params as RouteParams;

  useEffect(() => {
    async function Api() {
      api.get(`/v1/contents/${id}`).then(response => {
        setData(response.data);
      })
    }

    Api();
  })

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <>
      <HStack pt={12} pb={3} alignItems="center">
        <IconButton
          ml={3}
          icon={<CaretLeft color={colors.gray[900]} size={25} />}
          onPress={handleGoBack}
        />
      </HStack>

      {data ? (
        <VStack px={7}>
          <Box bg="primary" p={12} borderRadius={10}>
            <Heading textTransform="uppercase" color={colors.white}>
              {data.title}
            </Heading>
          </Box>

          <HStack p={3}>
            <Text>Autores: {data?.authors?.map(n => n?.name + ' ')}</Text>
          </HStack>
        </VStack>
      ) : <Loading />}
    </>

  )
}
