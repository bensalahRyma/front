'use client';

import Link from 'next/link';
import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { PiArrowRightBold } from 'react-icons/pi';
import { Password, Checkbox, Button, Input, Text, NumberInput } from 'rizzui';
import { Form } from '@/components/ui/form';
import { routes } from '@/config/routes';
import { SignUpSchema, signUpSchema } from '@/utils/validators/signup.schema';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  isAgreed: false,
};

export default function SignUpForm() {
  const [reset, setReset] = useState({});

  const onSubmit: SubmitHandler<SignUpSchema> = (data) => {
    console.log(data);
    setReset({ ...initialValues, isAgreed: false });
  };

  return (
    <>
      <Form<SignUpSchema>
        validationSchema={signUpSchema}
        resetValues={reset}
        onSubmit={onSubmit}
        useFormProps={{
          defaultValues: initialValues,
        }}
      >
        {({ register, formState: { errors } }) => (
          <div className="flex flex-col gap-x-4 gap-y-5 md:grid md:grid-cols-2 lg:gap-5">
            <Input
              type="text"
              size="lg"
              label="First Name"
              placeholder="Enter your first name"
              className="[&>label>span]:font-medium"
              inputClassName="text-sm"
              {...register('firstName')}
              error={errors.firstName?.message}
            />
            <Input
              type="text"
              size="lg"
              label="Last Name"
              placeholder="Enter your last name"
              className="[&>label>span]:font-medium"
              inputClassName="text-sm"
              {...register('lastName')}
              error={errors.lastName?.message}
            />
            <Input
              type="email"
              size="lg"
              label="Email"
              className="col-span-2 [&>label>span]:font-medium"
              inputClassName="text-sm"
              placeholder="Enter your email"
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
            <Password
              label="Confirm Password"
              placeholder="Enter confirm password"
              size="lg"
              className="[&>label>span]:font-medium"
              inputClassName="text-sm"
              {...register('confirmPassword')}
              error={errors.confirmPassword?.message}
            />
             <NumberInput
              className="col-span-2 [&>label>span]:font-medium"
      formatType="pattern"
      format="+33 ### ## ## ##"
      allowEmptyFormatting
      mask="_"
      customInput={Input as React.ComponentType<unknown>}
      {...{ label: " Phone Number" }}
    />
            <div className="col-span-2 flex items-start ">
            
                <Text className="mt-6 text-center leading-loose text-gray-500 lg:mt-8 lg:text-start">
                Already Registered ?{' '}
        <Link
          href={routes.auth.signIn1}
          className="font-semibold text-gray-700 transition-colors hover:text-blue"
        >
          Login
        </Link>
      </Text>
            </div>
            <Button size="lg" type="submit" className="col-span-2 mt-2" style={{backgroundColor:'#1C4DBD',fontFamily: 'Poppins'}}>
              <span>Register</span>{' '}
              {/* <PiArrowRightBold className="ms-2 mt-0.5 h-5 w-5" /> */}
            </Button>
          </div>
        )}
      </Form>
      
    </>
  );
}
