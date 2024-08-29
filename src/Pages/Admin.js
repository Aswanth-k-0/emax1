import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Image,
  Card,
  Tab,
  Nav,
} from "react-bootstrap";
import { BsFillTrashFill, BsPencilSquare, BsEye } from "react-icons/bs";

const Admin = () => {
  const [selectedTab, setSelectedTab] = useState("Now Showing");
  const [selectedScreen, setSelectedScreen] = useState("Screen 1");
  const [nowShowingMovies, setNowShowingMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [newMovie, setNewMovie] = useState({
    title: "",
    timings: [],
    banner: null,
  });

  const handleAddMovie = () => {
    const movieWithScreen = { ...newMovie, screen: selectedScreen };
    if (selectedTab === "Now Showing") {
      setNowShowingMovies([...nowShowingMovies, movieWithScreen]);
    } else {
      setUpcomingMovies([...upcomingMovies, movieWithScreen]);
    }
    setNewMovie({ title: "", timings: [], banner: null });
  };

  const handleInputChange = (e) => {
    setNewMovie({ ...newMovie, title: e.target.value });
  };

  const handleTimingChange = (timing) => {
    setNewMovie((prevMovie) => ({
      ...prevMovie,
      timings: prevMovie.timings.includes(timing)
        ? prevMovie.timings.filter((t) => t !== timing)
        : [...prevMovie.timings, timing],
    }));
  };

  const handleBannerChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewMovie((prevMovie) => ({ ...prevMovie, banner: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Container fluid className="admin-page p-0">
      {/* Header */}
      <Row className="align-items-center p-3 header-row">
        <Col>
          <Image
            src="emax-logo.png"
            alt="Emax Logo"
            fluid
            style={{ width: "150px" }}
          />
        </Col>
        <Col className="text-end">
          <Button variant="danger">Sign Out</Button>
        </Col>
      </Row>

      {/* Tab Navigation */}
      <Tab.Container defaultActiveKey="now-showing">
        <Row className="justify-content-center mt-3">
          <Nav variant="pills" className="justify-content-center mb-4">
            <Nav.Item>
              <Nav.Link
                eventKey="now-showing"
                onClick={() => setSelectedTab("Now Showing")}
              >
                Now Showing
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="upcoming"
                onClick={() => setSelectedTab("Upcoming")}
              >
                Upcoming
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>

        {/* Screen Selection */}
        <Row className="justify-content-center mb-4">
          {["Screen 1", "Screen 2", "Screen 3"].map((screen) => (
            <Col key={screen} xs="auto">
              <Button
                variant={selectedScreen === screen ? "warning" : "secondary"}
                onClick={() => setSelectedScreen(screen)}
              >
                {screen}
              </Button>
            </Col>
          ))}
        </Row>

        {/* Add Movie Section and Movie List */}
        <Row className="justify-content-center mb-4">
          <Col md={5}>
            <Card className="p-4 movie-form-card">
              <Form>
                <Form.Group controlId="formMovieTitle">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    value={newMovie.title}
                    onChange={handleInputChange}
                    placeholder="Enter Movie Title"
                  />
                </Form.Group>

                <Form.Group controlId="formMovieTimings" className="mt-3">
                  <Form.Label>Timings</Form.Label>
                  <div className="d-flex justify-content-between">
                    {["11:00 am", "02:30 pm", "06:00 pm", "09:30 pm"].map(
                      (timing) => (
                        <Button
                          key={timing}
                          variant={
                            newMovie.timings.includes(timing)
                              ? "warning"
                              : "secondary"
                          }
                          onClick={() => handleTimingChange(timing)}
                        >
                          {timing}
                        </Button>
                      )
                    )}
                  </div>
                </Form.Group>

                <Form.Group controlId="formMovieBanner" className="mt-3">
                  <Form.Label>Banner</Form.Label>
                  <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={handleBannerChange}
                  />
                </Form.Group>

                <Button variant="success" className="mt-3" onClick={handleAddMovie}>
                  Add
                </Button>
              </Form>
            </Card>
          </Col>

          {/* Currently Added Movies */}
          <Col md={5}>
            <h4 className="mb-3 text-center">Currently Added</h4>
            <div className="movie-list">
              {(selectedTab === "Now Showing"
                ? nowShowingMovies
                : upcomingMovies
              ).map((movie, index) => (
                <Card key={index} className="mb-3 p-3 movie-card text-white">
                  {movie.banner ? (
                    <Image src={movie.banner} alt={movie.title} fluid />
                  ) : (
                    <div className="movie-title">{movie.title}</div>
                  )}
                  <p className="mt-2 mb-1">{movie.title}</p>
                  <p>Screen: {movie.screen}</p>
                  <p>Timings: {movie.timings.join(", ")}</p>
                  <div className="d-flex justify-content-around">
                    <BsFillTrashFill className="text-danger" />
                    <BsPencilSquare className="text-primary" />
                    <BsEye className="text-success" />
                  </div>
                </Card>
              ))} 
            </div>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default Admin;
