import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Box, Flex, Text, Button, Progress, Image } from '@chakra-ui/react';
import * as API from '../services/launches';



export function LaunchDetail(){
    const [launch, setLaunch] = useState({});
    const { id } = useParams();

    useEffect(() => {
        API.getLaunchByFlightNumber(id).then(setLaunch).catch(console.error);
    }), [id];
    return(<>
        {!launch ? (<div><Progress size='xs' isIndeterminate /></div>) : (<>
            <Box bg="gray.200" p={4} m={4} borderRadius="lg">
                <Image margin="auto" src= {launch.links?.mission_patch_small}/>
                <Flex m={2} display="flex">
                    <Text color="#053772" fontSize="2x1"> <strong>Mission: </strong></Text>
                    <Text ml={4} color="gray" fontSize="2x1"> {launch.mission_name} ({launch.launch_year})</Text>
                </Flex>
                <Flex m={2}>
                    <Text color="#053772"><strong>Rocket: </strong>
                    </Text>
                    <Text ml={4} color="gray">
                    {launch.rocket?.rocket_name}
                    </Text>
                </Flex>
                <Flex m={2}>
                    <Text color="#053772"><strong>Rocket Type: </strong>
                    </Text>
                    <Text ml={4} color="gray">
                        {launch.rocket?.rocket_type}
                    </Text>
                </Flex>
            </Box>
            <Box bg="gray.200" p={4} m={4}borderRadius="lg">
                <Flex>
                <Text m={4} margin="auto" size="lg" color="#053772"  >LINKS ABOUT MISSION</Text>
                </Flex>
                <Flex m={2} display="flex">
                    <Text color="#053772"><strong>SpaceX Article: </strong>
                    </Text>
                    <Text ml={4} color="gray" fontSize="2x1">
                        <a href={launch.links?.article_link} target="_blank">{launch.links?.article_link}</a>
                    </Text>
                </Flex>
                <Flex m={2}>    
                    <Text color="#053772">
                        <strong>Wikipedia: </strong>
                    </Text>
                    <Text ml={4} color="gray">    
                        <a href={launch.links?.wikipedia} target="_blank">{launch.links?.wikipedia}</a>
                    </Text>
                </Flex>
                <Flex m={2}>
                    <Text color="#053772">
                        <strong>Video: </strong>
                    </Text>
                    <Text ml={4} color="gray">    
                        <a href={launch.links?.video_link} target="_blank">{launch.links?.video_link}</a>
                    </Text>
                </Flex>
            </Box>
            <Button  mt={2} color="#053772" bg="silver">
                <Link to={`/`}>
                    Back to Launches
                </Link>
            </Button>
         </>
         )}
    </>)
}