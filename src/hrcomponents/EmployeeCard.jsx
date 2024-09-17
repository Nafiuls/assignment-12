import {
  Heading,
  Avatar,
  Box,
  Center,
  Stack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react'
import UseAxios from '../Hooks/UseAxios'
import UseAuth from '../Hooks/UseAuth'
import { toast } from 'react-toastify'
import UseRole from '../Hooks/UseRole'
const EmployeeCard = ({ item }) => {
  const { user } = UseAuth()
  const hrEmail = user?.email
  console.log(hrEmail)
  const axiosCommon = UseAxios()
  const [userInfo] = UseRole()
  const { name, role, email, _id } = item
  const companyName = userInfo.companyName
  // add employee on the database
  const employee = {
    name,
    companyName,
    role,
    email,
    HrEmail: hrEmail
    // image
  }
  const handlePost = (id) => {
    axiosCommon.post('/addEmployee', employee)
      .then(res => {
        console.log(res.data)
        if (res.data.insertedId) {
          // successfull toast
          toast.success('Employee added successfully')
          axiosCommon.patch(`/employee/update/${id}`, employee)
        }
      })
      .catch(err => {
        toast.error('Employee already added')
      })
  }
  return (
    <div>
      <Center py={6}>
        <Box
          maxW={'320px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}>
          <Avatar
            size={'xl'}
            src={
              'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
            }
            mb={4}
            pos={'relative'}
            _after={{
              content: '""',
              w: 4,
              h: 4,
              bg: 'green.300',
              border: '2px solid white',
              rounded: 'full',
              pos: 'absolute',
              bottom: 0,
              right: 3,
            }}
          />
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            {name}
          </Heading>
          <Stack mt={8} direction={'row'} spacing={4}>
            <Button
              onClick={() => handlePost(_id)}
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}>
              Add to Team
            </Button>
          </Stack>
        </Box>
      </Center>
    </div>
  )
}

export default EmployeeCard