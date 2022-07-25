import { VStack, HStack, Heading, Text, Box, Pressable, IPressableProps, useTheme } from 'native-base';
import { TouchableOpacity } from 'react-native';

import { Calendar, Clock, Image as ImagePhospor } from "phosphor-react-native";

export type DetailProps = {
  id: string;
  title: string;
  authors: {
    name: string;
  }
}

type Props = IPressableProps & {
  data: DetailProps;
}

export function DetailList({ data, ...rest }: Props) {
  const { colors, fontSizes } = useTheme();

  return (
    <TouchableOpacity key={data?.id}>
      <Pressable {...rest}>
        <VStack alignItems="center" pl={7}>
          <HStack>
            <Box w={100} h={20} bg="gray.300" borderRadius={15} alignItems="center" justifyContent="center">
              <ImagePhospor size={50} color={colors.gray[500]} />
            </Box>
            <VStack px={2} w={300}>
              <>
                <Box mb={7}>
                  <Heading textTransform="uppercase" fontSize={fontSizes.md} color="primary">{data?.title}</Heading>
                  <HStack mt={1}>
                    <Text>Autores: {data?.authors?.map(n => n.name + ' ')}</Text>
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
        </VStack>
      </Pressable>
    </TouchableOpacity>
  )
}
