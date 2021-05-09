import React, { useState, useContext } from 'react';
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core"
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosPessoais({ onSubmit }) {
    const [nome, setNome] = useState("Ricardo")
    const [sobrenome, setSobrenome] = useState("")
    const [cpf, setCpf] = useState("")
    const [promocoes, setPromocoes] = useState(true)
    const [novidades, setNovidades] = useState(true)

    const validacoes = useContext(ValidacoesCadastro)

    const [erros, validarCampos, possoEnviar] = useErros(validacoes)



    return (
        <form onSubmit={event => {
            event.preventDefault();
            if (possoEnviar()) {
                onSubmit({ nome, sobrenome, cpf, promocoes, novidades })
            }

        }}>
            <TextField value={nome} onBlur={
                event => {
                    validarCampos(event)
                }
            } name="nome" id="nome" label="Nome" variant="outlined" margin="normal" fullWidth onChange={event => {
                setNome(event.target.value)
            }} helperText={erros.nome.texto} error={!erros.nome.valido} />

            <TextField value={sobrenome} name="sobrenome" id="sobrenome" label="sobrenome" variant="outlined" margin="normal" fullWidth onChange={event => {
                setSobrenome(event.target.value)
            }} />

            <TextField error={!erros.cpf.valido} helperText={erros.cpf.texto} value={cpf} id="cpf" name="cpf" label="CPF" variant="outlined" margin="normal" fullWidth onChange={event => {
                setCpf(event.target.value)
            }} onBlur={event => {
                validarCampos(event)
            }} />
            <FormControlLabel checked={promocoes} label="Promoçoes" control={<Switch name="promocoes" color="primary" />} onChange={event => {
                setPromocoes(event.target.checked)
            }} />

            <FormControlLabel checked={novidades} label="Novidades" control={<Switch name="novidades" color="primary" />} onChange={event => {
                setNovidades(event.target.checked)
            }} />

            <Button type="submit" variant="contained" color="primary">Proximo</Button>

        </form>
    )
}

export default DadosPessoais;