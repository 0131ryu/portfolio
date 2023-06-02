import React, { useEffect, useState } from 'react';
import "./index.css";
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './components/pages/Home';
import Main from './components/pages/Main';
import Projects from './components/pages/Projects';
import Resume from './components/pages/Resume';

import useOctokit from './Hooks/useOctokit';
import useLoadImg from './Hooks/useLoadImg';

const App = () => {
  const [activeItem, setActiveItem] = useState<string>("About");
  const [darkMode, setDarkMode] = useState(false);
  
  const [profile, setProfile] = useState("");
  const [imgURL, setImgURL] = useState("");
  
  const rawImgURL = useOctokit();
  rawImgURL.then((value) => {
    setImgURL(value);
  });

  const findImgs = useLoadImg(imgURL);
  
  useEffect(() => {
    setProfile(findImgs[0]);
  }, [findImgs])

  return (
    <>
     <div className={`grid grid-cols-12 gap-6 px-40 py-12 h-full lg:h-[100vh] ${darkMode ? 'dark' : 'light'}`}>
      <div className="col-span-12 p-4 text-base text-center bg-white h-[650px] lg:col-span-3 rounded-2xl dark:bg-black-500 shadow-custom-light dark:shadow-custom-dark">
        <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} profile={profile}/>
      </div>
      <div className="flex flex-col h-full col-span-12 overflow-hidden bg-white rounded-2xl dark:bg-black-500 dark:text-white lg:col-span-9 shadow-custom-light dark:shadow-custom-dark">
        <Navbar activeItem={activeItem} setActiveItem={setActiveItem} />
       {activeItem === "" && (<Home />)}
       {activeItem === "About" && ( <Home/>)}
       {activeItem === "Main Project" && (<Main />)}
       {activeItem === "Projects" && (<Projects />)}
       {activeItem === "Resume" && (<Resume />)}
      </div>
    </div>
  </>
  );
};

export default App;
