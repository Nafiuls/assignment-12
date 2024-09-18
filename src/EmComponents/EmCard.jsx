import { Box, Text, Badge, Button, Flex, Icon, VStack } from '@chakra-ui/react';
import { LucidePackage, LucideCheckCircle, LucideXCircle } from 'lucide-react';
import Swal from 'sweetalert2';
import UseAxios from '../Hooks/UseAxios';
import UseAuth from '../Hooks/UseAuth';
import { toast } from 'react-toastify';
const EmCard = ({ item }) => {
  const axiosCommon = UseAxios()
  const { user } = UseAuth()
  const { name, productType, status, _id, ownerEmail } = item
  // console.log(item)



  // post a handle request to the server
  const handleRequest = (id) => {

    Swal.fire({
      title: 'Enter A Note',
      input: 'text', // The input type, could be 'text', 'number', 'email', etc.
      inputLabel: 'Note',
      inputPlaceholder: 'Type your Note here...',
      showCancelButton: true, // Adds a cancel button to the modal
      confirmButtonText: 'Submit',
      preConfirm: (value) => {
        if (!value) {
          Swal.showValidationMessage('Please enter a Note');
        }
        return value;
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const assetId = _id
        const assetName = name
        const assetType = productType
        const requesterEmail = user?.email
        const queryEmail = ownerEmail
        const requesterName = user?.displayName
        const requestDate = new Date()
        const currentStatus = status
        const note = result.value; // The value entered in the input
        console.log(assetId)
        const item = { assetId, assetName, assetType, requesterEmail, queryEmail, requesterName, requestDate, currentStatus, note }
        // now post the item in the backend database
        axiosCommon.post('/requestAssets', item)
          .then(res => {
            if (res.data.insertedId) {
              toast.success("Request Made")
            }
          })
          .catch(err => {
            toast.error('Asset Already requested')
          })

      }
    });
  }


  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      boxShadow="lg"
      bg="white"
    >
      <VStack align="start" spacing={3}>
        {/* Asset Icon and Name */}
        <Flex align="center">
          <Icon as={LucidePackage} boxSize={6} mr={2} color="blue.500" />
          <Text fontSize="lg" fontWeight="bold">
            {name}
          </Text>
        </Flex>

        {/* Asset Type */}
        <Flex align="center">
          <Text fontSize="md" mr={2}>
            Type:
          </Text>
          <Badge
            colorScheme={productType === 'returnable' ? 'green' : 'red'}
            borderRadius="full"
            px={2}
            py={1}
          >
            {productType}
          </Badge>
        </Flex>

        {/* Availability */}
        <Flex align="center">
          <Text fontSize="md" mr={2}>
            Availability:
          </Text>
          <Flex align="center">
            {status === 'In Stock' ? (
              <>
                <Icon as={LucideCheckCircle} boxSize={5} mr={1} color="green.500" />
                <Text>Available</Text>
              </>
            ) : (
              <>
                <Icon as={LucideXCircle} boxSize={5} mr={1} color="red.500" />
                <Text>Out of stock</Text>
              </>
            )}
          </Flex>
        </Flex>

        {/* Request Button */}
        <Button
          colorScheme="blue"
          size="md"
          variant="solid"
          mt={4}
          w="full"
          onClick={handleRequest}
        >
          Request Asset
        </Button>
      </VStack>
    </Box>
  )
}

export default EmCard