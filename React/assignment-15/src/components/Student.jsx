import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Student.css";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";


const Student = () => {
  const [student, setStudent] = useState([]);

  const { studentId } = useParams();

  const fetchStudent = () => {
    axios
      .get(`https://mock-server-deploy.herokuapp.com/students/${studentId}`)
      .then((res) => setStudent(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchStudent();
  });

  const { name, gender, email, address, phone } = student;

  return (
    <div className="mt-5">
      <h1 style={{ fontSize: "3rem" }}>Student Details</h1>
      <Card
        style={{ width: "35%", margin: "4rem auto", background: "#0eb582" }}
      >
        <Card.Body>
          <Card.Title>
            <h1>{name}</h1>
          </Card.Title>
          <Card.Text>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                <h4>{gender}</h4>
              </ListGroupItem>
              <ListGroupItem>
                <h5>{email}</h5>
              </ListGroupItem>
              <ListGroupItem>
                <h5>{address}</h5>
              </ListGroupItem>
              <ListGroupItem>
                <h5>{phone}</h5>
              </ListGroupItem>
            </ListGroup>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Student;
