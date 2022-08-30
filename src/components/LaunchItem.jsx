import { MdDateRange } from "react-icons/md";
import { Link } from "react-router-dom";
import { Box, Flex, Text, Spacer, Tag, Button } from '@chakra-ui/react';


export function LaunchItem (launch){
    return (
        <div>
            <Box  
            bg="gray.200" 
            p={4}
            m={4} 
            borderRadius="lg"
          >
            <Flex display="flex">
              <Text fontSize="2x1"> Mission <strong>{launch.mission_name}</strong> ({launch.launch_year})</Text>
              <Spacer ml={4} />
              <Tag colorScheme={launch.launch_success ? "green" : "red"}>{launch.launch_success ? "Success" : "Failure"}</Tag>
            </Flex>
            <Flex align="center">
              <MdDateRange color="gray"/>
              <Text fontSize="sm" ml={1} color="gray">{launch.launch_date_local.split("T")[0]}</Text>
            </Flex>
            <Button mt={2} color="#053772" bg="silver">
              <Link to={`/launches/${launch.flight_number}`}>
                Launch Detail
              </Link>
            </Button>
            
          </Box> 
        </div>
    )
}