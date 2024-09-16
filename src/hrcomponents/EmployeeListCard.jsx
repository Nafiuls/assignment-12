import { Box, Image, Text, Button, Flex, } from '@chakra-ui/react';
import { FaUser } from 'react-icons/fa';
import UseAxios from '../Hooks/UseAxios';
import { toast } from 'react-toastify';
const EmployeeListCard = ({ item, refetch }) => {
  const { name, role, _id } = item
  const axiosCommon = UseAxios()
  // TODO: ADD A CONFIRMATION MODAL BEFORE DELETE
  // delete employee
  const onRemove = (id) => {
    // delte a employee
    axiosCommon.delete(`/delete/employee/${id}`)
      .then(res => {
        console.log(res.data)
        if (res.data.deletedCount) {
          // show a successfull toast and do a refetch
          toast.success('Employee Removed')
          refetch()
        }
      })

  }
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      p={4}
      bg="white"
      _hover={{ transform: 'scale(1.02)', transition: '0.3s' }}
    >
      {/* Employee Image */}
      <Image
        borderRadius="full"
        boxSize="100px"
        // src={}
        alt={`${name}'s photo`}
        mx="auto"
      />

      {/* Employee Name */}
      <Text fontWeight="bold" fontSize="xl" textAlign="center" mt={4}>
        {name}
      </Text>

      {/* Member Type with Icon */}
      <Flex justifyContent="center" alignItems="center" mt={2}>
        <FaUser></FaUser>
        <Text ml={2} fontSize="md" color="gray.600">
          {role}
        </Text>
      </Flex>

      {/* Remove from Team Button */}
      <Button
        colorScheme="red"
        size="sm"
        mt={4}
        width="100%"
        onClick={() => onRemove(_id)}
      >
        Remove from Team
      </Button>
    </Box>
  );

}

export default EmployeeListCard