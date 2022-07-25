import { HStack, VStack } from "native-base";

import Logo from '../../assets/logo.svg';

export function Header() {
  return (
    <HStack
      w="full"
      height={160}
      justifyContent="space-between"
      alignItems="center"
      pt={12}
      px={6}
    >
      <Logo width={100} />
    </HStack>
  )
}
