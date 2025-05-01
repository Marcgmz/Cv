import React, { useState } from 'react';
import Nav from './Nav';
import FormUserInfo from './FormUserInfo';

const Display = () => {
  const [selectedSection, setSelectedSection] = useState(1);

  const handleSectionChange = (sectionNumber) => {
	setSelectedSection(sectionNumber);
  };

  return (
	<div>
  	<FormUserInfo selectedSection={selectedSection} />
	</div>
  );
};

export default Display;
