import { useEffect, useState } from "react";
import {
  Container,
  Col,
  Row,
  Table,
  Pagination,
  Form,
  FormGroup,
  FormSelect,
  Button,
} from "react-bootstrap";

export default function User() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState({
    identityNo: "",
    name: "",
    surname: "",
    gender: "",
    role: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [pageItems, setPageItems] = useState([]);

  useEffect(() => {
    loadUsers();
  }, [currentPage]);

  function loadUsers() {
    fetch(`http://localhost:8080/api/users?page=${currentPage - 1}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setUsers(result.content); // `content` backend'deki doğru alan olmalı
        let items = [];
        for (let index = 1; index <= result.totalPages; index++) {
          items.push(
            <Pagination.Item
              key={index}
              active={currentPage === index}
              onClick={() => setCurrentPage(index)}
            >
              {index}
            </Pagination.Item>
          );
        }
        setPageItems(items); // Döngü tamamlandıktan sonra çağrılmalı
      })
      .catch((error) =>
        console.error("Kullanıcılar yüklenirken hata oluştu:", error)
      );
  }

  function clearForm() {
    setSelectedUser({
      identityNo: "",
      name: "",
      surname: "",
      gender: "",
      role: "",
    });
  }

  function isNotClear() {
    return(
      selectedUser.identityNo!== ""||
      selectedUser.name!==""||
      selectedUser.surname!==""||
      selectedUser.gender!==""||
      selectedUser.role!==""
    );
  }
  function handleInputChange(e) {
    const { name, value } = e.target; // `naem` yazım hatası düzeltildi
    setSelectedUser({ ...selectedUser, [name]: value });
  }

  return (
    <Container>
      <Row>
        <Col sm={8}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Kimlik No</th>
                <th>İsim</th>
                <th>Soyisim</th>
                <th>Cinsiyet</th>
                <th>Rol</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} onClick={() => setSelectedUser(user)}>
                  <td>{user.identityNo}</td>
                  <td>{user.name}</td>
                  <td>{user.surname}</td>
                  <td>{user.gender}</td>
                  <td>{user.role}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Pagination>{pageItems}</Pagination>
        </Col>
        <Col sm={4}>
          <Form>
            <FormGroup className="mb-3" controlId="identityNo">
              <Form.Label>Identity No</Form.Label>
              <Form.Control
                type="text"
                autoComplete="off"
                placeholder="Identity No"
                name="identityNo"
                maxLength="11"
                value={selectedUser.identityNo}
                onChange={handleInputChange} // Doğru bağlama yapıldı
              />
            </FormGroup>
            <FormGroup className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                name="name"
                value={selectedUser.name}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup className="mb-3" controlId="surname">
              <Form.Label>Surname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Surname"
                name="surname"
                value={selectedUser.surname}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup className="mb-3" controlId="gender">
              <Form.Label>Gender</Form.Label>
              <Form.Select
                aria-label="Select gender"
                value={selectedUser.gender}
                name="gender"
                onChange={handleInputChange}
              >
                <option value="">Please select gender</option>
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
              </Form.Select>
            </FormGroup>
            <FormGroup className="mb-3" controlId="role">
              <Form.Label>Role</Form.Label>
              <Form.Select
                aria-label="Select role"
                value={selectedUser.role}
                name="role"
                onChange={handleInputChange}
              >
                <option value="">Please select role</option>
                <option value="STUDENT">Student</option>
                <option value="TEACHER">Teacher</option>
              </Form.Select>
            </FormGroup>

            {selectedUser.id ?(
              <Button variant="primary" type="button" onClick={()=>{}}>
                Update
              </Button>
            ):<Button variant="primary" type="button" onClick={()=>{}}>
              Create
              </Button>}{' '}
            {isNotClear() ?(
            <>
            <Button variant="online-primary" type="button" onClick={clearForm}>
              Clear
            </Button>{' '}
        
            {selectedUser.id ?(<Button variant="danger" type="button">
              Delete
            </Button>):('')}
            </>
            ):('')}
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
