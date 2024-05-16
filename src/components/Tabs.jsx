import { useState } from 'react';

const Tabs = () => {
  // tracks the active tab
  const [activeTab, setActiveTab] = useState('tab1');

  // handles change to active/nonactive tab
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      {/* Tab buttons */}
      <div className="flex mb-4">
        <button
          onClick={() => handleTabChange('tab1')}
          className={`p-2 mr-4 text-xl  ${activeTab === 'tab1' ? 'border-b-2 border-violet-400 ' : ' border-none'}`}
        >
          Experience
        </button>
        <button
          onClick={() => handleTabChange('tab2')}
          className={`p-2 text-xl ${activeTab === 'tab2' ? 'border-b-2 border-violet-400' : ' border-none'}`}
        >
          Education
        </button>
      </div>

      {/* Tab content */}
      <div>
        {activeTab === 'tab1' &&
          <div>
            <h3>Undergraduate Instructor for INFO360: Web Design</h3>
            <ul className='text-sm ml-4 mb-2'>
              <li>ayo</li>
            </ul>

            <h3>Undergraduate Instructor for INFO 210: Information Infrastructure I</h3>
            <ul className='text-sm ml-4 mb-2'>
              <li>ayo</li>
            </ul>
            <h3>Cake Decorator at Kroger</h3>
            <ul className='text-sm ml-4 mb-2'>
              <li>ayo</li>
            </ul>
          </div>}
        {activeTab === 'tab2' &&
          <div>
            <h3>Indiana University Bloomington Luddy School of Informatics, Engineering, and Computing</h3>

            <h3>Awards</h3>
            <ul className='text-sm ml-4 mb-2'>
              <li>Luddy Dean's List (FA2022, SP2023, FA2023)</li>
            </ul>

          </div>}
      </div>
    </div>
  );
};

export default Tabs;