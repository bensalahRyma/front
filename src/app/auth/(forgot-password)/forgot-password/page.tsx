import ForgetPasswordForm from './forget-password-form';
import UnderlineShape from '@/components/shape/underline';
import Image from 'next/image';
import AuthWrapperOne from '@/app/shared/auth-layout/auth-wrapper-one';
import { Text } from 'rizzui';

export default function SignIn() {
  return (
    <div className="flex flex-col h-screen md:flex-row">
    <div className="flex items-center justify-center w-full md:w-1/2" style={{background:'#1C4DBD'}}>
      <Image  src="/e_sentinel_logo-removebg-preview.png"  alt="Login Image" width={400} height={600} />
    </div>
    <div className="flex flex-col items-center justify-center w-full md:w-1/2">
      <div className="w-full max-w-md space-y-8">
      <div>
        <h1 className=" " style={{ fontFamily: 'Poppins',color:'#1C4DBD' }}>Reset your password!</h1>
      
      </div>

       <ForgetPasswordForm/>


      </div>
    </div>
  </div>
  
 
  );
}
