import React, { Component, Fragment } from "react";
import './App.css';
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@material-ui/core"
import 'fontsource-roboto';
import { validarCPF, validarSenha } from "./models/cadastro";
import ValidacoesCadastro from './contexts/ValidacoesCadastro';

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Fragment>
          <Typography variant="h3" align="center" component="h1">Formulário de cadastro</Typography>
          <ValidacoesCadastro.Provider value={{ cpf: validarCPF, senha: validarSenha, nome: validarSenha }}>
            <FormularioCadastro onSubmit={onSubmit} />
          </ValidacoesCadastro.Provider>
        </Fragment>
      </Container>
    );
  }
}

function onSubmit(dados) {
  console.log(dados)
}



export default App;
