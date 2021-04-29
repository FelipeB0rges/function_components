import React, { Component, Fragment } from "react";
import './App.css';
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@material-ui/core"
import 'fontsource-roboto';

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Fragment>
          <Typography variant="h3" align="center" component="h1">Formulário de cadastro</Typography>
          <FormularioCadastro />
        </Fragment>
      </Container>
    );
  }
}

export default App;
