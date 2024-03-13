import { routes } from '@/config/routes';
import { DUMMY_ID } from '@/config/constants';
import {
  PiShoppingCartDuotone,
  PiHeadsetDuotone,
  PiPackageDuotone,
  PiChartBarDuotone,
  PiCurrencyDollarDuotone,
  PiSquaresFourDuotone,
  PiGridFourDuotone,
  PiFeatherDuotone,
  PiChartLineUpDuotone,
  PiMapPinLineDuotone,
  PiUserGearDuotone,
  PiBellSimpleRingingDuotone,
  PiUserDuotone,
  PiEnvelopeSimpleOpenDuotone,
  PiStepsDuotone,
  PiCreditCardDuotone,
  PiTableDuotone,
  PiBrowserDuotone,
  PiHourglassSimpleDuotone,
  PiUserCircleDuotone,
  PiShootingStarDuotone,
  PiRocketLaunchDuotone,
  PiFolderLockDuotone,
  PiBinocularsDuotone,
  PiHammerDuotone,
  PiNoteBlankDuotone,
  PiUserPlusDuotone,
  PiShieldCheckDuotone,
  PiLockKeyDuotone,
  PiChatCenteredDotsDuotone,
  PiCalendarPlusDuotone,
  PiEnvelopeDuotone,
  PiCurrencyCircleDollarDuotone,
  PiBriefcaseDuotone,
  PiHouseLineDuotone,
  PiAirplaneTiltDuotone,
  PiFolderNotchDuotone,
  PiCaretCircleUpDownDuotone,
  PiListNumbersDuotone,
  PiCoinDuotone,
  PiUserSquareDuotone,
} from 'react-icons/pi';
import TruckSolidIcon from '@/components/icons/truck-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faBook, faList, faMagnifyingGlassPlus, faPeopleGroup} from '@fortawesome/free-solid-svg-icons';
// Note: do not add href in the label object, it is rendering as label
export const menuItems = [
  // label start
  // {
  //   name: 'Overview',
  // },
  // label end
  // {
  //   name: 'File Manager',
  //   href: '/',
  //   icon: <PiFolderNotchDuotone />,
  // },
  {
    name: 'Dashboard',
    href: routes.dashboard,
    icon: <PiFolderNotchDuotone />,
  },
  {
    name: 'Transaction',
    href: routes.transaction.transaction,
    icon: <PiBriefcaseDuotone />,
  },
  {
    name: 'Manual Lookup',
    href: routes.manuallookup,
    icon: <PiHammerDuotone />,
  },
  {
    name: 'Customers',
    href: routes.customers.customers,
    icon: <PiShoppingCartDuotone />,
  },
  {
    name: 'Delivery company',
    href: routes.delivery,
    icon: <TruckSolidIcon />,
  },
  {
    name: 'Logistic Chain',
    href: routes.logistic.logistic,
    icon:  <PiPackageDuotone />,
  },
  {
    name: 'Rules',
    href: routes.rules,
    icon:<FontAwesomeIcon icon={faMagnifyingGlassPlus} />,
  },
  {
    name: 'Lists',
    href: routes.lists,
    icon:<FontAwesomeIcon icon={faList} />,
  },
  {
    name: 'Discussions',
    //href: routes.discussions,
    href: routes.support.inbox,
    icon:<PiEnvelopeDuotone />,
  },
 
  {
    name: 'Account Settings',
    href: routes.forms.profileSettings,
    icon: <PiUserGearDuotone />,
  },
 
  {
    name: 'Team',
    href: routes.team,
    icon: <FontAwesomeIcon icon={faPeopleGroup} />,

  },

  {
    name: 'Docs',
    href: routes.docs.inbox,
    icon: <FontAwesomeIcon icon={faBook} />,

  },
  // {
  //   name: 'Sign In',
  //   href: '#',
  //   icon: <PiShieldCheckDuotone />,
  //   dropdownItems: [
  //     {
  //       name: 'Modern Sign in',
  //       href: routes.auth.signIn1,
  //     },
  //     {
  //       name: 'Vintage Sign in',
  //       href: routes.auth.signIn2,
  //     },
  //     {
  //       name: 'Trendy Sign in',
  //       href: routes.auth.signIn3,
  //     },
  //     {
  //       name: 'Elegant Sign in',
  //       href: routes.auth.signIn4,
  //     },
  //     {
  //       name: 'Classic Sign in',
  //       href: routes.auth.signIn5,
  //     },
  //   ],
  // },
  // {
  //   name: 'Forgot Password',
  //   href: '#',
  //   icon: <PiLockKeyDuotone />,
  //   dropdownItems: [
  //     {
  //       name: 'Modern Forgot password',
  //       href: routes.auth.forgotPassword1,
  //     },
  //     {
  //       name: 'Vintage Forgot password',
  //       href: routes.auth.forgotPassword2,
  //     },
  //     {
  //       name: 'Trendy Forgot password',
  //       href: routes.auth.forgotPassword3,
  //     },
  //     {
  //       name: 'Elegant Forgot password',
  //       href: routes.auth.forgotPassword4,
  //     },
  //     {
  //       name: 'Classic Forgot password',
  //       href: routes.auth.forgotPassword5,
  //     },
  //   ],
  // },
  // {
  //   name: 'OTP Pages',
  //   href: '#',
  //   icon: <PiChatCenteredDotsDuotone />,
  //   dropdownItems: [
  //     {
  //       name: 'Modern OTP page',
  //       href: routes.auth.otp1,
  //     },
  //     {
  //       name: 'Vintage OTP page',
  //       href: routes.auth.otp2,
  //     },
  //     {
  //       name: 'Trendy OTP page',
  //       href: routes.auth.otp3,
  //     },
  //     {
  //       name: 'Elegant OTP page',
  //       href: routes.auth.otp4,
  //     },
  //     {
  //       name: 'Classic OTP page',
  //       href: routes.auth.otp5,
  //     },
  //   ],
  // },
];
