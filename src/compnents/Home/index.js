import React from "react";
import TodoList from "./TodoList";
import { Navbar, Container } from "react-bootstrap";

function index() {
  return (
    <div className="text-center">
      <Navbar bg="dark" variant="dark" style={{ marginBottom: "50px" }}>
        <Container>
          {" "}
          <Navbar.Brand href="#home">ToDo List</Navbar.Brand>
        </Container>
      </Navbar>
      <TodoList />
    </div>
  );
}

export default index;
