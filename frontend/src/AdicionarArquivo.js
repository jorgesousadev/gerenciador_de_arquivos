import React, { Component } from 'react';
import axios from 'axios';
import { Form, Button, InputGroup } from 'react-bootstrap';
import enviar from './img/enviar.svg'

export default class AdicionarArquivo extends Component {
    constructor(props) {
        super(props);
        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            nome: ''
        }
    }
    onFileChange(e) {
        this.setState({ nome: e.target.files[0] })
    }
    onSubmit(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('nome', this.state.nome)
        axios.post("http://localhost:5000/arquivos", formData, {
        }).then(res => {
            console.log(res)
            window.location.reload();
        })
    }

    render() {
        return (
            <Form onSubmit={this.onSubmit}>
                <InputGroup size="sm" className="mb-3 w-25">
                    <Form.Control type="file" onChange={this.onFileChange} />
                    <Button variant="success" type="submit" id="button-addon2">
                        <img src={enviar} alt='enviar' />
                        Enviar
                    </Button>
                </InputGroup>
            </Form>
        )
    }
}

