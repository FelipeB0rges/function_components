import { Button, TextField } from '@material-ui/core';
import React, { useState, useContext } from 'react';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';


function DadosUsuario({ onSubmit }) {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const validacoes = useContext(ValidacoesCadastro)

    const [erros, validarCampos, possoEnviar] = useErros(validacoes)


    return (
        <form onSubmit={event => {
            event.preventDefault()
            if (possoEnviar()) {
                onSubmit({ email, senha });
            }
        }}>
            <TextField value={email} name="email" id="email" label="email" type="email" variant="outlined" margin="normal" fullWidth required onChange={
                event => {
                    setEmail(event.target.value)
                }
            } />
            <TextField value={senha} onBlur={event => {
                validarCampos(event)
            }} name="senha" id="senha" label="senha" type="password" variant="outlined" margin="normal" fullWidth required onChange={
                event => {
                    setSenha(event.target.value)
                }
            } error={!erros.senha.valido} helperText={erros.senha.texto} />
            <Button type="submit" variant="contained" color="primary">Proximo </Button>
        </form>
    )
}

export default DadosUsuario;