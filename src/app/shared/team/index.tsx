import { loggedInDeviceData } from "@/data/logged-in-device";

import LoggedInDevices from "./team-table/table";
import { TeamData } from "@/data/team-data";

// import { useModal } from '@/app/shared/modal-views/use-modal';

export default function Team() {

    return (
        <div className="@container">

           <LoggedInDevices
          data={TeamData}
          className="@xs:col-span-full"
        />

        </div>
    )}