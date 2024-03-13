import Image from "next/image";
import SignInForm from "../(sign-in)/sign-in-1/sign-in-form";
import { metaObject } from '@/config/site.config';
import AuthWrapperOne from "@/app/shared/auth-layout/auth-wrapper-one";
import UnderlineShape from "@/components/shape/underline";
import { Text } from "rizzui";
import Link from "next/link";
import { PiAppleLogoBold, PiFacebookLogoBold, PiGithubLogoBold, PiLinkedinLogoBold } from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaGoogle, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { routes } from "@/config/routes";
export const metadata = {
    ...metaObject('Login'),
  };
  const socialShare = [
    
    {
      title: 'Google',
      icon: <FaGoogle   className="h-auto w-3.5" />,
    },
    {
      title: 'Facebook',
      icon: <FaFacebookF className="h-auto w-3.5" />,
    },
    {
        title:'Twitter',
        icon: <FaTwitter  className="h-auto w-3.5" />
    },
    {
      title: 'LinkedIn',
      icon: <FaLinkedinIn   className="h-auto w-3.5" />,
    },
  ];
//   1C4DBD
export default function LoginPage() {
  return (
    <div className="flex flex-col h-screen md:flex-row">
    <div className="flex items-center justify-center w-full md:w-1/2" style={{background:'#1C4DBD'}}>
      <Image  src="/e_sentinel_logo-removebg-preview.png"  alt="Login Image" width={400} height={600} />
    </div>
    <div className="flex flex-col items-center justify-center w-full md:w-1/2">
      <div className="w-full max-w-md space-y-8">
      <div>
        <h1 className=" " style={{ fontFamily: 'Poppins',color:'#1C4DBD' }}>Welcome to E-Sentinel</h1>
        <Text className="mt-6 text-center leading-loose text-gray-500 lg:mt-8 lg:text-start" style={{ fontFamily: 'Poppins' }}>
        Need an account?{' '}
        <Link
         href={routes.auth.signUp}
          style={{ fontFamily: 'Poppins' }}
          className="h-auto p-0 text-sm text-blue underline transition-colors hover:text-gray-900 hover:no-underline"
        >
          Sign Up
        </Link>
      </Text>
      </div>

       <SignInForm/>


      </div>
    </div>
  </div>
  
  );
}