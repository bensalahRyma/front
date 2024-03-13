import { Title } from "rizzui";
import FileDashboard from "./shared/file/dashboard";
import PageHeader from '@/app/shared/page-header';
import { routes } from "@/config/routes";
import LoginPage from "./auth/(login)/page";

export default function Home() {
  const pageHeader = {
    title: 'Dashbord',
    breadcrumb: [
      {
        href: routes.eCommerce.dashboard,
        name: 'Home',
      },
      {
        href: routes.dashboard,
        name: 'dashboard',
      }
    ],

  };
  return (
    <>
      {/* <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb} ></PageHeader>
      <FileDashboard /> */}
      <div>
      <LoginPage/>
      </div>

    </>
  );
}
