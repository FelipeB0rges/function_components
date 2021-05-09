import { StepLabel, Stepper, Typography, Step } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoas';
import DadosUsuario from './DadosUsuario';


function FormularioCadastro({ onSubmit }) {
    const [nome, setNome] = useState("Ricardo")
    const [sobrenome, setSobrenome] = useState("")
    const [cpf, setCpf] = useState("")
    const [promocoes, setPromocoes] = useState(true)
    const [novidades, setNovidades] = useState(true)

    const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } })

    const [etapaAtual, setEtapaAtual] = useState(0)

    const [dadosColetados, setDados] = useState("");

    useEffect(() => {
        if (etapaAtual == formularios.length - 1) {
            onSubmit(dadosColetados)
        }
        console.log(dadosColetados)
    })

    const formularios = [<DadosUsuario onSubmit={coletarDados} />,
    <DadosPessoais onSubmit={coletarDados} />,
    <DadosEntrega onSubmit={coletarDados} />,
    <Typography variant="h5">Obrigado por se cadastrar</Typography>]

    function coletarDados(dados) {
        setDados({ ...dadosColetados, ...dados });
        proximo()
    }

    function proximo() {
        setEtapaAtual(etapaAtual + 1);
    }


    return (

        <>
            <Stepper activeStep={etapaAtual}>
                <Step><StepLabel>Login</StepLabel></Step>
                <Step><StepLabel>Pessoal</StepLabel></Step>
                <Step><StepLabel>Entrega</StepLabel></Step>
                <Step><StepLabel>Finalizaçao</StepLabel></Step>
            </Stepper>
            {
                formularios[etapaAtual]
            }

        </>
    )
}



export default FormularioCadastro;