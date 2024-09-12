/* eslint-disable react/prop-types */
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Jobs.css";


const SingleJob = ({ job }) => {
  return (
    <Card className="card mr-3 mb-3">
      <Card.Body>
        <Card.Link className="jobtitle mt-2" href={job.url}>
          {job.title}
          <span>
            <small>({job.job_type})</small>
          </span>
        </Card.Link>
        <Card.Text></Card.Text>
        <Link to={`/${job.company_name}`}>
          <Card.Subtitle className="mt-2">
            {job.company_name}
          </Card.Subtitle>
        </Link>
        <Card.Text>{job.candidate_required_location}</Card.Text>

        <Card.Text className="active">
          <small className="ml-1">Actively recruiting</small>
        </Card.Text>

        <Card.Text>{job.publication_date}</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default SingleJob;