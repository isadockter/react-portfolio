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
          className={`px-2 mr-4 lg:text-xl texl-l font-semibold uppercase tracking-wider  ${activeTab === 'tab1' ? 'border-b-2 border-violet-600 ' : ' border-none'}`}
        >
          Experience
        </button>
        <button
          onClick={() => handleTabChange('tab2')}
          className={`px-2 lg:text-xl text-l font-semibold uppercase tracking-wider ${activeTab === 'tab2' ? 'border-b-2 border-violet-600' : ' border-none'}`}
        >
          Education
        </button>
      </div>

      {/* Tab content */}
      <div className='px-2'>
        {activeTab === 'tab1' &&
          <div>
            <h3 className='text-blue-600 font-medium'>TA for INFO360: Web Design at IU</h3>
            <ul className='text-sm ml-4 mb-2'>
              <li>I guided 30 students through web design principles, HTML/CSS, and accessibility practices, optimizing grading and communication through Canvas while prioritizing student engagement in office hours.</li>
            </ul>
            <h3 className='text-blue-600 font-medium'>Cake Decorator at Kroger</h3>
            <ul className='text-sm ml-4 mb-2'>
              <li>I apply my creative design skills to meticulously craft visually stunning cakes, emphasizing precision, time management, and personalized service</li>
            </ul>
            <h3 className='text-blue-600 font-medium'>TA for INFO 210: Information Infrastructure I at IU</h3>
            <ul className='text-sm ml-4 mb-2'>
              <li>Collaborated in labs and office hours, emphasizing programming fundamentals, particularly in Python, to assist students in mastering core concepts and problem-solving techniques.</li>
            </ul>
          </div>}
        {activeTab === 'tab2' &&
          <div>
            <h3 className='text-blue-600 font-medium'>IU Luddy School of Informatics, Engineering, and Computing</h3>
            <ul className='ml-4 mb-2'>
              <li className='text-md'>Bachelors degree in Informatics, Art/Design cognate</li>
              <li className='ml-4 text-sm'>minors in Web Design & Development and Human-Centered Computing</li>
            </ul>
            <h3>Awards</h3>
            <ul className='ml-4 mb-2'>
              <li className='text-md'>Luddy Dean's List <span className='text-sm'>(FA2022, SP2023, FA2023)</span></li>
            </ul>

          </div>}
      </div>
    </div>
  );
};

export default Tabs;