import {  useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ToyCategory from './ToyCategory';


const ShopByCategory = () => {
    const [categories, setCategories]=useState('Block Game');
    const [tabData,setTabData]=useState([]);
   
    console.log(categories);
    useEffect(()=>{
        fetch(`https://assignment-11-math-worms-server.vercel.app/category/${categories}`)
        .then(res=>res.json())
        .then(data=>setTabData(data))
    },[categories])
    console.log(tabData);
    
    return (
       <div>
        <h1 className='text-5xl my-10 text-center '>Shop By Category</h1>
         <div className='w-11/12 mx-auto'>
           <Tabs>
    <TabList>
      <Tab onClick={()=>{setCategories('Block Game')}}>Block Game</Tab>
      <Tab onClick={()=>{setCategories('Puzzles')}}>Puzzles</Tab>
      <Tab onClick={()=>{setCategories('Geometric Shapes')}}>Geometric Shapes</Tab>
    </TabList>

    <TabPanel>
     <div className='flex md:flex-row flex-col justify-center gap-10'>
     {
        tabData.map(single=><ToyCategory single={single} key={single._id}></ToyCategory>)
      }
     </div>
    </TabPanel>
    <TabPanel>
    <div className='flex md:flex-row flex-col justify-center gap-10'>
     {
        tabData.map(single=><ToyCategory single={single} key={single._id}></ToyCategory>)
      }
     </div>
    </TabPanel>
    <TabPanel>
    <div className='flex md:flex-row flex-col justify-center gap-10'>
     {
        tabData.map(single=><ToyCategory single={single} key={single._id}></ToyCategory>)
      }
     </div>
    </TabPanel>
  </Tabs>
        </div>
       </div>
    );
};

export default ShopByCategory;