import { Title } from 'rizzui';
import cn from '@/utils/class-names';

type UserInfoType = {
  name: string;
  address: string;
  email: string;
  country: string;
  phone: string;
  city: string;
  postcode: string;
};

type AddressInfoType = {
    address: string;
    state: string;
    country: string;
    city: string;
    postcode: string;
  };

const user1 = {
  name: 'Addresses',
  address: '756 Braxton Flats',
  email: 'dena41@yahoo.com',
  country: 'Germany',
  phone: '(874) 580-9617',
  city: 'Berlin',
  postcode:'123456',
};
const address = {
  address: '39801 Powlowski Forest',
  state:"Germany",
  country: 'Germany',
  city: 'Berlin',
  postcode:'123456',
};

interface AddressesProps {
  className?: string;
}
const data = [
    { id: 1, list: 'Blacklist :', description: 'No data has been blacklisted' },
    { id: 2, list: 'whitelist:', description: 'No data has been whitelisted' },
  ];
export default function Addresses({ className }: AddressesProps) {
  return (
    <div className={cn('', className)}>
      <AddressCard title="Address" addressInfo={address} />
      <ListeStateCard title="List status" />
      {/* <AddressCard title="Recipient’s Details" userInfo={user2} /> */}
    </div>
  );
}

function AddressCard({
  title,
  className,
 // userInfo,
  addressInfo
}: {
  title: string;
  className?: string;
  //userInfo: UserInfoType;
  addressInfo:AddressInfoType;
}) {
  return (
    <div
      className={cn(
        'rounded-lg border border-gray-300 p-5 @3xl:p-7 ',
        className
      )}
    >
      <Title as="h3" className="text-base font-semibold sm:text-lg">
        {title}
      </Title>
      <ul className="mt-4 grid gap-3 @3xl:mt-5">
        <li className="flex items-center gap-1">
          <span className="font-semibold text-gray-900">Address :</span>
          <span>{addressInfo.address}</span>
        </li>
        <li className="flex items-center gap-1">
          <span className="font-semibold text-gray-900">state :</span>
          <span>{addressInfo.state}</span>
        </li>
        <li className="flex items-center gap-1">
          <span className="font-semibold text-gray-900">Country :</span>
          <span>{addressInfo.country}</span>
        </li>
        <li className="flex items-center gap-1">
          <span className="font-semibold text-gray-900">City :</span>
          <span>{addressInfo.city}</span>
        </li>
        <li className="flex items-center gap-1">
          <span className="font-semibold text-gray-900">Post code :</span>
          <span>{addressInfo.postcode}</span>
        </li>
      </ul>
    </div>
  );
}
function ListeStateCard({
    title,
    className,
   // userInfo,

  }: {
    title: string;
    className?: string;
    //userInfo: UserInfoType;
   // addressInfo:AddressInfoType;
  }) {
    return (
      <div
        className={cn(
          'rounded-lg border border-gray-300 p-5 @3xl:p-7 ',
          className
        )}
      >
        <Title as="h3" className="text-base font-semibold sm:text-lg">
          {title}
        </Title>
        <ul className="mt-4 grid gap-3 @3xl:mt-5">
        {data.map((item, index) => (
          <li className="flex items-center gap-1" key={index}>
            <span className="font-semibold text-gray-900">{item?.list} </span>
            <span>{item?.description}</span>
          </li>
        ))}

        </ul>
      </div>
    );
  }
  