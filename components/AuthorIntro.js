import { Row, Col, Media, Image } from 'react-bootstrap';

const AuthorIntro = () => (
  <Row>
    <Col md="8">
      <Media className="mb-4 admin-intro">
        <Image
          roundedCircle
          width={64}
          height={64}
          className="mr-3"
          src="https://avatars1.githubusercontent.com/Ghatzi?s=460&u=69a6acab13fd5547a4e316e496b573271077147f&v=4"
          alt="Generic placeholder"
        />
        <Media.Body>
          <h5 className="font-weight-bold mb-0">Hello Friends,</h5>
          <p className="welcome-text">
            My name is George Hatzi and I am an experienced software engineer
            and freelance developer. and this is my blog page.
          </p>
        </Media.Body>
      </Media>
    </Col>
  </Row>
);

export default AuthorIntro;
