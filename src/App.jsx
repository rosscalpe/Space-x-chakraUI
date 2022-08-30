import { Routes, Route } from 'react-router-dom';
import { Image } from '@chakra-ui/react';
import { LaunchList } from './components/LaunchList';
import { LaunchDetail } from './components/LaunchDetail';
import logo from './assets/spaceX-logo.png';


export function App() {
  
  return (
    <>
      <Image m={4} src={logo} alt="spaceX logo" />
      <Routes>
        <Route path="/" element={<LaunchList />} />
        <Route path="/launches/:id" element={<LaunchDetail />} />
      </Routes>
    </>
  )
}

