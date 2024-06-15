import { Button, Container, Form, Input } from "reactstrap";
import './index.css'
import Logo from "./assets/image.jpg";

function App() {
  return (
    <Container className="container">
        <Form className="col-md-5 form">
          <img src={Logo} alt="Airbnb logo" />
          <Input type="email" placeholder="E-mail"></Input>
          <Input type="password" placeholder="Senha"></Input>
          <Button>Entrar</Button>
        </Form>
    </Container>
  );
}

export default App;
