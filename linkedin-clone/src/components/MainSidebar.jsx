import { Row } from "react-bootstrap"
import SidebarProfile from "./SidebarProfile"
import AdvertisingSide from "./AdvertisingSide"
import AllSideProfiles from "./AllSideProfiles"
import PeopleToKnowSide from "./PeopleToKnowSide"
import JobsCard from "./JobsCard"
const MainSidebar = () =>{
    return(
       <Row className="flex-column">
     
        <SidebarProfile/>
        <AdvertisingSide/>
        <AllSideProfiles/>
        <PeopleToKnowSide/>
        <JobsCard/>
        
       </Row>
    )
}
export default MainSidebar