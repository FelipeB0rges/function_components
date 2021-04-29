import React from 'react';
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core"

function FormularioCadastro() {
    let nome = "";
    state={}
    return (
        <form onSubmit={event => {
            event.preventDefault();
           console.log(nome)

        }}>
            <TextField value={nome} id="nome" label="Nome" variant="outlined" margin="normal" fullWidth onChange={event => {

                nome = event.target.value;
            }} />

            <TextField id="sobrenome" label="sobrenome" variant="outlined" margin="normal" fullWidth />

            <TextField id="cpf" label="CPF" variant="outlined" margin="normal" fullWidth />
            <FormControlLabel label="Promoçoes" control={<Switch name="promocoes" defaultChecked color="primary" />} />

            <FormControlLabel label="Novidades" control={<Switch name="novidades" defaultChecked color="primary" />} />

            <Button type="submit" variant="contained" color="primary">Cadastrar</Button>

        </form>
    )
}

export default FormularioCadastro;