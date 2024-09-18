import { Box, Text, Badge, Button, Flex, Icon, VStack, HStack, Textarea } from '@chakra-ui/react';
import { LucidePackage, LucideUser, LucideMail, LucideCalendar, LucideCheckCircle, LucideXCircle, LucideNotebook } from 'lucide-react';
const RequestCard = ({ item }) => {
  console.log(item)
  const { assetName, assetType, note, requesterName, requesterEmail, requestDate, currentStatus } = item

  // on accept 
  const onApprove = item => {

  }
  // on reject
  const onReject = item => {

  }


  return (
    <div>
      <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={6}
        boxShadow="lg"
        bg="white"
        maxW="md"
      >
        <VStack align="start" spacing={4}>
          {/* Asset Name */}
          <Flex align="center">
            <Icon as={LucidePackage} boxSize={6} mr={2} color="blue.500" />
            <Text fontSize="lg" fontWeight="bold">
              {assetName}
            </Text>
          </Flex>

          {/* Asset Type */}
          <Flex align="center">
            <Text fontSize="md" mr={2}>
              Type:
            </Text>
            <Badge
              colorScheme={assetType === 'Returnable' ? 'green' : 'red'}
              borderRadius="full"
              px={2}
              py={1}
            >
              {assetType}
            </Badge>
          </Flex>

          {/* Requester Info */}
          <Flex align="center">
            <Icon as={LucideUser} boxSize={5} mr={2} color="gray.600" />
            <Text>{requesterName}</Text>
          </Flex>
          <Flex align="center">
            <Icon as={LucideMail} boxSize={5} mr={2} color="gray.600" />
            <Text>{requesterEmail}</Text>
          </Flex>

          {/* Request Date */}
          <Flex align="center">
            <Icon as={LucideCalendar} boxSize={5} mr={2} color="gray.600" />
            <Text>{requestDate}</Text>
          </Flex>

          {/* Additional Note */}
          {note && (
            <Flex align="center">
              <Icon as={LucideNotebook} boxSize={5} mr={2} color="gray.600" />
              <Textarea
                value={note}
                isReadOnly
                size="sm"
                borderColor="gray.300"
                focusBorderColor="gray.400"
              />
            </Flex>
          )}

          {/* Status */}
          <Flex align="center">
            <Text fontSize="md" mr={2}>
              Status:
            </Text>
            <Badge
              colorScheme={status === 'Approved' ? 'green' : status === 'Rejected' ? 'red' : 'yellow'}
              borderRadius="full"
              px={2}
              py={1}
            >
              {currentStatus}
            </Badge>
          </Flex>

          {/* Approve & Reject Buttons */}
          <HStack spacing={4} mt={4}>
            <Button
              leftIcon={<Icon as={LucideCheckCircle} />}
              colorScheme="green"
              variant="solid"
              onClick={onApprove}
            >
              Approve
            </Button>
            <Button
              leftIcon={<Icon as={LucideXCircle} />}
              colorScheme="red"
              variant="solid"
              onClick={onReject}
            >
              Reject
            </Button>
          </HStack>
        </VStack>
      </Box>
    </div>
  )
}

export default RequestCard