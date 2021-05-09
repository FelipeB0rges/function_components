import { TextField, Button } from '@material-ui/core';
import React, { useState } from 'react';

function DadosEntrega({ onSubmit }) {
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");
    return (
        <form onSubmit={event => {
            event.preventDefault()
            onSubmit({cep,endereco,numero,estado,cidade})

        }}>
            <TextField value={cep} id="cep" label="cep" type="number" variant="outlined" margin="normal" fullWidth onChange={
                event => {
                    setCep(event.target.value)
                }
            } />
            <TextField value={endereco} id="endereco" label="endereco" type="text" variant="outlined" margin="normal" fullWidth onChange={
                event => {
                    setEndereco(event.target.value)
                }
            } />
            <TextField value={numero} id="numero" label="numero" type="number" variant="outlined" margin="normal" onChange={
                event => {
                    setNumero(event.target.value)
                }
            } />
            <TextField value={estado} id="estado" label="estado" type="text" variant="outlined" margin="normal" onChange={
                event => {
                    setEstado(event.target.value)
                }
            } />
            <TextField value={cidade} id="cidade" label="cidade" type="text" variant="outlined" margin="normal" onChange={
                event => {
                    setCidade(event.target.value)
                }
            } />
            <Button type="submit" variant="contained" color="primary" fullWidth>Finalizar Cadastro </Button>
        </form>
    )
}

export default DadosEntrega;