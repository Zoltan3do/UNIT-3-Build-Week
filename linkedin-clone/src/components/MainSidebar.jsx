import { Row, Col } from "react-bootstrap"
import SidebarProfile from "./SidebarProfile"
import AdvertisingSide from "./AdvertisingSide"
const MainSidebar = () =>{
    return(
       <Row>
        <Col>
        <SidebarProfile/>
        <AdvertisingSide/>
        </Col>
       </Row>
    )
}
export default MainSidebar