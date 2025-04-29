import { UserProfile } from '@clerk/nextjs';
import React from 'react';

function Setting() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <UserProfile />
    </div>
  );
}

export default Setting;
