import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col, Navbar, NavbarBrand, FormGroup, Input, Button } from 'reactstrap'

const App = props => {
  const [nome, setNome] = React.useState("")
  const [idade, setIdade] = React.useState("")
  const [email, setEmail] = React.useState("")

  const submit = async e => {
    e.preventDefault();

    const headers = new Headers();
    headers.append("Content-Type", "application/json")

    const response = await fetch("http://localhost:3001/alunos", {
      method: "POST",
      body: JSON.stringify({ nome, idade, email }),
      headers
    })

    if (response.ok) {
      alert("Enviado com sucesso!")
      return
    }
    alert("Erro: " + response.status)
  }

  return (
    <React.Fragment>
      {/* Navbar */}
      <Navbar color="primary" dark>
        <NavbarBrand>
          Oficina ADS
    </NavbarBrand>
      </Navbar>
      <Container>
        <Row>
          <form onSubmit={submit}>
            <Col>
              <FormGroup>
                <label>Nome</label>
                <Input name="nome" value={nome} onChange={e => setNome(e.target.value)} />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <label>Idade</label>
                <Input name="idade" type="number" value={idade} onChange={e => setIdade(e.target.value)} />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <label>Email</label>
                <Input name="email" value={email} onChange={e => setEmail(e.target.value)} />
              </FormGroup>
            </Col>
            <Col>
            <Button type="submit">Enviar</Button>
            </Col>
          </form>
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default App;
