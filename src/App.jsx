import {Button, Tabs, Flex, Card, Modal, Avatar, Typography} from 'antd'
import { useState, useEffect } from 'react';
import Cards from './card'
import Api from './api';
import image1 from './images/website1.png'
import image2 from './images/website2.png'
import image3 from './images/website3.png'
import image4 from './images/website4.png'
import image5 from './images/robloxstudio.png'
import image7 from './images/website5.png'
import image6 from './images/WhatsApp.png'
import image8 from './images/website6.png'
import video1 from './images/Python.mp4'
import './App.css';
const {Title, Paragraph} = Typography
const items = [
  {
    key: '1',
    label: 'HTML, JavaScript, and React',
    children: (<div className='imageContainer'>
        <Cards image={image1} showbutton={false} title='Transaction Website' description='A Website that contains a table with conditional rendering'/>
        <Cards image={image2} showbutton={false} title='Student Management Website' description='Another Website that contains a table with conditional rendering'/>
        <Cards image={image3} showbutton={true} title='Seat Randomizer Website' description='A website that can shuffle seats, has Themes and Languages' link='https://seat-assignment-two.vercel.app/' />
        <Cards image={image4} showbutton={true} title='Profile Website' description='A pure HTML website that uses @keyframes animation' link='https://ekskul-coding-n4tttttt.vercel.app/' />
        <Cards image={image8} showbutton={true} title='Portofolio Website' description='a Portofolio website' secretText={true}/>
        <Cards image={image7} showbutton={true} title='Book Management Website' description='A website that uses CRUD using mockapi and axios to render data' link='https://book-manager-woad.vercel.app/' />

    </div>),
  },
  {
    key: '2',
    label: 'Roblox Studio (Lua)',
    children: (<div>
      <Card title='Bossfight using Lua in Roblox Studio' className='card'>A 2 phase fight with simple dialogues and additional effects<br/><img className='image' src={image5} alt='picture'/>
      </Card>
    </div>),
  },
  {
    key: '3',
    label: 'Python',
    children: (<div>
      <Card title='Python codes' className='card'>
        A Python code that prints numbers that increase exponentially every second<br/>
        <video className='image' src={video1} controls/>
      </Card>
    </div>),
  },
  {
    key: '4',
    label: 'HTTP requests',
    children: (<div>
    <Api/>
    </div>),
  }
];
function App() {
  const [isMobileModalVisible, setIsMobileModalVisible] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsMobileModalVisible(true);
    }
  }, []);
  return (
    <>
    <Modal
        open={isMobileModalVisible}
        closable={false}
        footer={(
    <Flex justify="start" style={{ width: '100%' }}>
      <Button 
        type="primary" 
        onClick={() => setIsMobileModalVisible(!isMobileModalVisible)}
      >
        I'm sure
      </Button>
    </Flex>
  )}
        centered
      ><p style={{ margin: 0, fontSize: '15px', lineHeight: '1.5' }}>
    Mobile mode is currently unresponsive. It is recommended to turn on Desktop Mode. 
    Are you sure you want to continue without Desktop mode?
  </p></Modal>
  <div className='title'>
  <Avatar size={200} src={image6} />
  <div className='text-content'>
    <Title>About Me</Title>
    <Title level={3}>Programmer</Title>
    <Paragraph className='paragraph'>Hello, I am Nathan Leander, a future programmer. I can create websites, apps, games and other stuff using coding languages. I'm also interested in learning how to create good websites and apps</Paragraph>
  </div>
</div>

  
    <Tabs defaultActiveKey="1" items={items}/></>
  );
}

export default App;
//