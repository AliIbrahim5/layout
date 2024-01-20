'use client';

import { useParams } from 'next/navigation';
import React from 'react';

const TestPage = () => {
  const userid = useParams(); 
       
  return (
    <div>UserID: {userid.id}</div> 
  );
};

export default TestPage;
