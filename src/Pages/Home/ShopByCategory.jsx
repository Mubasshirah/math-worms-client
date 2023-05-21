import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => {
    const [categories, setCategories]=useState('Block Game');
    const [tabData,setTabData]=useState([]);
    console.log(categories);
    useEffect(()=>{
        fetch(`http://localhost:5000/category/${categories}`)
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
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 3</h2>
    </TabPanel>
  </Tabs>
        </div>
       </div>
    );
};

export default ShopByCategory;