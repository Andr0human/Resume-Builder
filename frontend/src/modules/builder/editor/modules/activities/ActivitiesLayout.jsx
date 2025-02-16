import { SyntheticEvent, useState } from 'react';
import Achievements from './components/Achievements';
import BasicHeader from './components/BasicHeader';
import BasicPanel from './components/BasicPanel';
import Involvements from './components/Involvements';

const allActivityTabs = {
  involvements: {
    key: 'involvements',
    label: 'Involvements',
    component: Involvements,
  },
  achievements: {
    key: 'achievements',
    label: 'Achievements',
    component: Achievements,
  },
};

const ActivitiesLayout = () => {
  const [activeTab, setActiveTab] = useState(allActivityTabs['involvements']);

  const changeActiveTab = (event, key) => {
    const selectedTab = allActivityTabs[key];
    if (selectedTab) {
      setActiveTab(selectedTab);
    }
  };

  return (
    <>
      <BasicHeader
        activeTab={activeTab}
        changeActiveTab={changeActiveTab}
        tabs={allActivityTabs}
      ></BasicHeader>
      <BasicPanel activeTab={activeTab} />
    </>
  );
};

export default ActivitiesLayout;
