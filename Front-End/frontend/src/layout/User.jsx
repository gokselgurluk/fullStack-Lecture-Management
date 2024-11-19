import { Container, Col, Row ,Table} from "react-bootstrap";

export default function User() {
  return (
    <>
      <Container>
        <Row>
          <Col sm={8}>
            <Table strped border hover>
              <thead>
                <tr>
                  <th>Identity No</th>
                  <th>Name</th>
                  <th>Surname</th>
                  <th>Gender</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                <td>13123123123</td>
                <td>Name</td>
                <td>Surname</td>
                <td>FEMALE</td>
                <td>Studenet</td>
              </tbody>
            </Table>
          </Col>
          <Col sm={4}></Col>
        </Row>
      </Container>
    </>
  );
}
