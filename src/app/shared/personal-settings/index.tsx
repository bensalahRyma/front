'use client';


import { Button } from 'rizzui';
import PersonalSettings from './personal-settings';

export default function PersonalSettingsView() {
 
  return (
    <>
      <div className="@container">
      <div className="position-relative">
  <Button 
    rounded="pill" 
    className="position-absolute top-0 end m-4 bg-blue-500 text-white rounded hover:bg-blue-600"
  >
    save settings
  </Button>
  <PersonalSettings/>
</div>
      
      </div>
    </>
  );
}


