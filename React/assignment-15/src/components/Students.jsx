import React, { useState, useEffect } from "react";
import "./Students.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/Auth";
import { Card, Button, Row, Col, Container} from "react-bootstrap";


const Students = () => {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState("");
  const [orderBy, setOrderBy] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("");

  const limit = 12;
  const totalPages = Math.ceil(100 / limit);

  const Auth = useAuth();
  const navigate = useNavigate();

  const fetchStudents = () => {
    if (!filter) {
      axios
        .get(`https://mock-server-deploy.herokuapp.com/students/`, {
          params: {
            q: search,
            _sort: orderBy,
            _order: order,
            _page: currentPage,
            _limit: limit,
          },
        })
        .then((res) => {
          setStudents(res.data);
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .get(`https://mock-server-deploy.herokuapp.com/students/`, {
          params: {
            q: search,
            _sort: orderBy,
            _order: order,
            _page: currentPage,
            _limit: limit,
            gender: filter,
          },
        })
        .then((res) => {
          setStudents(res.data);
        })
        .catch((err) => console.log(err));
    }
  };

  const handleSelect = (selectedValue) => {
    console.log(selectedValue);
    let selectedValues = selectedValue.split(":");
    console.log(selectedValues, "selectedValues");
    const [orderBy, order] = selectedValues;

    setOrder(order);
    setOrderBy(orderBy);
    // fetchStudents();
  };

  // const handleInput = (searchInput) => {
  //   setSearch(searchInput);
  //   fetchStudents();
  // };
  const changeHandler = (filter) => {
    console.log(filter);
    setFilter(filter);
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
    fetchStudents();
    console.log(students);
  };

  const handlePrevious = () => {
    if (!(currentPage === 1)) {
      setCurrentPage(currentPage - 1);
    }

    fetchStudents();
  };

  const handleLogout = () => {
    Auth.logout();
    navigate("/");
  };

  useEffect(() => {
    fetchStudents();
  }, [search, order, orderBy, currentPage, filter]);

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div>
      <div className="welcome-div">
        <h3 className="welcome-heading">Welcome {Auth.username} </h3>
        <Button variant="danger" size="lg" className="welcome-logout" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="main-div">
        <input
          className="input"
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <select onChange={(e) => handleSelect(e.target.value)}>
          <option value=""> Sort By</option>
          <option value="name:asc">Name: Ascending</option>
          <option value="name:desc">Name: Descending</option>
        </select>

        <select onChange={(e) => changeHandler(e.target.value)}>
          <option value="">Filter By</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Bigender">Bigender</option>
          <option value="Polygender">Polygender</option>
        </select>

        <h1 className="heading-students">Our Students</h1>
        <Row className="students-container row">
          {students &&
            students.map((student) => {
              return (
                {
                  /* <div className="student-container" key={student.id}>
                  <h1>{student.name}</h1>
                  <h3>{student.gender}</h3>
                  <Link to={`${student.id}`}>
                    <p className="more-details">More details</p>
                  </Link>
                </div> */
                },
                (
                  <Col className="column" lg={2} md={3} sm={4} xs={6}>
                    <Card
                      style={{
                        width: "18rem",
                        margin: "1rem auto",
                        background: "#0eb582",
                      }}
                    >
                      <Card.Body>
                        <Card.Title style={{ fontSize: "2rem" }}>
                          {student.name}
                        </Card.Title>
                        <Card.Text style={{ fontSize: "1.5rem" }}>
                          {student.gender}
                        </Card.Text>
                        <Link to={`${student.id}`}>
                          <Button
                            variant="primary"
                            style={{ borderRadius: "5px" }}
                          >
                            More Details
                          </Button>
                        </Link>
                      </Card.Body>
                    </Card>
                  </Col>
                )
              );
            })}
        </Row>
        <div>
          <button
            className={`previous ${currentPage === 1 ? "disabled" : ""}`}
            onClick={handlePrevious}
          >
            Previous
          </button>
          <button className="current-page">{currentPage}</button>
          <button
            className={`next ${currentPage === totalPages ? "disabled" : ""}`}
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Students;
