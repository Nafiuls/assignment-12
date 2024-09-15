import { Box, Button, Flex, Text, Stack, useColorModeValue } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import UseAxios from "../Hooks/UseAxios";
import Swal from "sweetalert2";



const Hrcard = ({ asset, refetch }) => {
  const axiosCommon = UseAxios()
  const { name, quantity, productType, createdAt } = asset
  const cardBg = useColorModeValue("white", "gray.700");
  const cardShadow = useColorModeValue("md", "dark-lg");
  const handleDelete = (id) => {
    // Fire a delete confirmation alert with swal

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosCommon.delete(`/deleteAssets/${id}`)
          .then(result => {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
            refetch()
          })
      }
    });

  }
  return (
    <div>
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="md"
        overflow="hidden"
        bg={cardBg}
        boxShadow={cardShadow}
        p={5}
      >
        <Stack spacing={3}>
          <Text fontSize="xl" fontWeight="bold">{name}</Text>
          <Text fontWeight={'semibold'}>Quantity: {quantity}</Text>
          <Text fontWeight={'semibold'}>Type: {productType}</Text>
          <Text fontWeight={'semibold'}>Date Added: {createdAt}</Text>
          <Flex justify="space-between">
            <Button
              colorScheme="teal"
              leftIcon={<EditIcon />}
              size="sm"
            >
              Update
            </Button>
            <Button
              colorScheme="red"
              leftIcon={<DeleteIcon />}
              size="sm"
              onClick={() => handleDelete(asset._id)}
            >
              Delete
            </Button>
          </Flex>
        </Stack>
      </Box>
    </div>
  )
}

export default Hrcard