import Image from 'next/image';
import UnderlineShape from '@/components/shape/underline';
import SignUpForm from './sign-up-form';
import AuthWrapperOne from '@/app/shared/auth-layout/auth-wrapper-one';
import { metaObject } from '@/config/site.config';
import Link from 'next/link';
import { Text } from 'rizzui';
import { routes } from '@/config/routes';

export const metadata = {
  ...metaObject('Sign Up 1'),
};

export default function SignUp() {
  return (
    <div className="flex flex-col h-screen md:flex-row">
    <div className="flex items-center justify-center w-full md:w-1/2" style={{background:'#1C4DBD'}}>
      <Image  src="/e_sentinel_logo-removebg-preview.png"  alt="Login Image" width={400} height={600} />
    </div>
    <div className="flex flex-col items-center justify-center w-full md:w-1/2">
      <div className="w-full max-w-md space-y-8">
      <div>
        <h1 className=" " style={{ fontFamily: 'Poppins',color:'#1C4DBD' }}>Sign Up</h1>
        <Text className="mt-6 text-center leading-loose text-gray-500 lg:mt-8 lg:text-start"
         style={{ fontFamily: 'Poppins' }}>
        Enter details to create your account
        {/* <Link
          href={routes.auth.signUp}
          style={{ fontFamily: 'Poppins' }}
          className="h-auto p-0 text-sm text-blue underline transition-colors hover:text-gray-900 hover:no-underline"
        >
          Sign Up
        </Link> */}
      </Text>
      </div>
      <SignUpForm />
      </div>
    </div>
  </div>
  );
}
