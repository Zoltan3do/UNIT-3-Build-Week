import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Spinner, Card, Button } from "react-bootstrap";
import { fetchSingleProfile } from "../redux/actions/homePostAction";

const SingleProfile = () => {
  const { profileId } = useParams();
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.singleProfile);
  const loading = useSelector((state) => state.user.loading);

  useEffect(() => {
    dispatch(fetchSingleProfile(profileId));
  }, [dispatch, profileId]);

  if (loading || !profile) {
    return (
      <div className="d-flex justify-content-center">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <div className="profile-details">
      <Card className="mb-3">
        <Card.Img variant="top" src={profile.image} alt={profile.name} />
        <Card.Body>
          <Card.Title>{profile.name} {profile.surname}</Card.Title>
          <Card.Text>{profile.title}</Card.Text>
          <Card.Text>{profile.area}</Card.Text>
          <Button variant="primary">Connetti</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProfile;
