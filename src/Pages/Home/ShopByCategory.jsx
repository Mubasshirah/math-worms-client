import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => {
    const [categories, setCategories]=useState([]);
    
    return (
       <div>
        <h1 className='text-5xl my-10 text-center '>Shop By Category</h1>
         <div className='w-11/12 mx-auto'>
           <Tabs>
    <TabList>
      <Tab>Block Games</Tab>
      <Tab>Puzzeles</Tab>
      <Tab>Geometric Shapes</Tab>
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