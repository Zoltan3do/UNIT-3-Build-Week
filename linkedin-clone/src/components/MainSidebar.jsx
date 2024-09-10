import { Row,Col } from "react-bootstrap"
import SidebarProfile from "./SidebarProfile"
import AdvertisingSide from "./AdvertisingSide"
import AllSideProfiles from "./AllSideProfiles"
import PeopleToKnowSide from "./PeopleToKnowSide"
import JobsCard from "./JobsCard"
import AdvImg from "./AdvImg"
const MainSidebar = () =>{
    return(
       <Row className="flex-column">
        <Col md={3}>
     
        <SidebarProfile/>
        <AdvertisingSide/>
        <AllSideProfiles/>
        <PeopleToKnowSide/>
        <JobsCard/>
        <AdvImg/>
        </Col>
       </Row>
    )
}
export default MainSidebar