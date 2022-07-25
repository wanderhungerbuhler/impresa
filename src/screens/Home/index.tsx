import { Box, Text, VStack, Heading, ScrollView, Image, useTheme, FlatList } from "native-base";
import { useNavigation } from "@react-navigation/native";

import api from "../../services/api";
import { theme } from "../../styles/theme";

import { Header } from "../../components/Header";
import { useState } from "react";
import { useEffect } from "react";

import { DetailList, DetailProps } from "../../components/DetailList";

export function Home() {
  const [data, setData] = useState<DetailProps[]>();

  const navigation = useNavigation();

  useEffect(() => {
    async function Api() {
      await api.get(`/v1/contents`).then(response => {
        setData(response.data);
      })
    }

    Api();
  }, []);

  function handleOpenDetails(id: string) {
    navigation.navigate('Details', { id });
  }

  return (
    <>
      <VStack flex={1} bg="background">
        <Header />

        <Heading color="primary" fontSize={30} p={6} fontFamily={theme.fonts.bold}>
          Breaking News
        </Heading>

        <ScrollView showsVerticalScrollIndicator={false}>

          <VStack alignItems="center">
            <Box w={380} bg="white" borderRadius={35} mb={7}>
              <Box w={380} height={220} borderRadius={35}>
                <Image
                  borderRadius={35}
                  size="full"
                  alt="Presidente"
                  source={{ uri: 'https://images.impresa.pt/impresa/2019-02-01-BALSEMAO_fundo.jpg-2/12x5/mw-1024' }}
                />
              </Box>
              <Text color="gray.600" p={4}>
                Do que fiz na vida, colocaria como fio condutor e como
                objectivo cimeiro, exercido e conseguido de...
              </Text>
            </Box>
          </VStack>
        </ScrollView>

        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <DetailList data={item} onPress={() => handleOpenDetails(item.id)} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
        />


        {/* <VStack p={6}>
            {data?.map((dt: any) => (
              <TouchableOpacity key={dt?.id} onPress={() => handleOpenDetails(dt?.id)}>
                <HStack mb={7}>
                  <Box w={100} h={20} bg="gray.300" borderRadius={15} alignItems="center" justifyContent="center">
                    <ImagePhospor size={50} color={colors.gray[500]} />
                  </Box>
                  <VStack px={2} w={300}>
                    <>
                      <Box mb={7}>
                        <Heading textTransform="uppercase" fontSize={theme.fontSizes.md} color="primary">{dt?.title}</Heading>
                        <HStack mt={1}>
                          <Text>Autores: {dt?.authors?.map(n => n.name + ' ')}</Text>
                        </HStack>
                        <HStack mt={1} space={2}>
                          <Calendar size={20} />
                          <Text color={colors[600]}>
                            Jul 25, 2022
                          </Text>

                          <Clock size={20} />
                          <Text color={colors[600]}>
                            7 min read
                          </Text>
                        </HStack>
                      </Box>
                    </>
                  </VStack>
                </HStack>
              </TouchableOpacity>
            ))}
          </VStack> */}

      </VStack>
    </>
  )
}
