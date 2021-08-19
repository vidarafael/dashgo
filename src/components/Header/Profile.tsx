import { Box, Flex, Text, Avatar } from "@chakra-ui/react";
import React from "react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Rafael Freitas</Text>
          <Text color="gray.300" fontSize="small">
            vidarafaelg@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Rafael Freitas" src="https://github.com/vidarafael.png"/>
    </Flex>
  )
}