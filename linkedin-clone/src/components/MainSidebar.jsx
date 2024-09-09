import { Row } from "react-bootstrap"
import SidebarProfile from "./SidebarProfile"
import AdvertisingSide from "./AdvertisingSide"
import AllSideProfiles from "./AllSideProfiles"
import PeopleToKnowSide from "./PeopleToKnowSide"
const MainSidebar = () =>{
    return(
       <Row className="flex-column">
     
        <SidebarProfile/>
        <AdvertisingSide/>
        <AllSideProfiles/>
        <PeopleToKnowSide/>
        
       </Row>
    )
}
export default MainSidebar