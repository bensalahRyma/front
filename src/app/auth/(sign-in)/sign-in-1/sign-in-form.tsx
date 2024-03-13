'use client';

import Link from 'next/link';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { SubmitHandler } from 'react-hook-form';
import { PiArrowRightBold } from 'react-icons/pi';
import { Checkbox, Password, Button, Input, Text } from 'rizzui';
import { Form } from '@/components/ui/form';
import { routes } from '@/config/routes';
import { loginSchema, LoginSchema } from '@/utils/validators/login.schema';
import { FaFacebookF, FaGoogle, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { useRouter } from 'next/navigation'

const initialValues: LoginSchema = {
  email: 'admin@admin.com',
  password: 'admin',
  rememberMe: true,
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
export default function SignInForm() {
  //TODO: why we need to reset it here
  const [reset, setReset] = useState({});
  const router = useRouter();
  const onSubmit: SubmitHandler<LoginSchema> = (data) => {
    // console.log(data);
    // signIn('credentials', {
    //   ...data,

    // }).then(() => {
      router.push('/dashboard'); // Redirection vers /dashboard après la connexion réussie
    // });
    // setReset({ email: "", password: "", isRememberMe: false });
  };

  return (
    <>
      <Form<LoginSchema>
        validationSchema={loginSchema}
        resetValues={reset}
        onSubmit={onSubmit}
        useFormProps={{
          mode: 'onChange',
          defaultValues: initialValues,
        }}
      >
        {({ register, formState: { errors } }) => (
          <div className="space-y-5">
            <Input
              type="email"
              size="lg"
              label="Email"
              placeholder="Enter your email"
              className="[&>label>span]:font-medium"
          
              inputClassName="text-sm"
              {...register('email')}
              error={errors.email?.message}
            />
            <Password
              label="Password"
              placeholder="Enter your password"
              size="lg"
              className="[&>label>span]:font-medium"
              inputClassName="text-sm"
              {...register('password')}
              error={errors.password?.message}
            />
            <div className="flex items-center justify-between pb-2">
              <Checkbox
                {...register('rememberMe')}
                label="Remember Me"
                variant="flat"
                className="[&>label>span]:font-medium"
              />
              <Link
                href={routes.auth.forgotPassword}
                className="h-auto p-0 text-sm font-semibold text-blue underline transition-colors hover:text-gray-900 hover:no-underline"
              >
                Forget Password?
              </Link>
            </div>
            <Button className="w-full" type="submit" size="lg" style={{backgroundColor:'#1C4DBD',fontFamily: 'Poppins'}}>
              <span>Sign in</span>{' '}
              <PiArrowRightBold className="ms-2 mt-0.5 h-6 w-6" />
            </Button>
          </div>
        )}
      </Form>
      <div className="title-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'nowrap' }}>
  <div className="line text-gray-500" style={{ flex: '1', height: '1px', backgroundColor: '#808080' }}></div>
  <h1 className="centered-title text-gray-500 text-2xl" style={{ fontFamily: 'Poppins' }}>follow as on</h1>
  <div className="line text-gray-500" style={{ flex: '1', height: '1px', backgroundColor: '#808080' }}></div>
</div>

      <div className=" flex justify-center lg:justify-center">

  {socialShare.map((item, index) => (
    <Link
      href="/"
      className={`flex-shrink-0 flex-col items-center text-sm text-gray-700 transition-colors hover:text-primary lg:gap-y-0 xl:text-base ${index !== 0 ? 'ml-4' : ''}`}
      key={item.title}
    >
      {item.icon}
    
    </Link>
  ))}
</div>



    </>
  );
}
