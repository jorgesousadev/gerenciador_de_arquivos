import React from 'react';
import Table from 'react-bootstrap/Table';
import {ButtonGroup, Button} from 'react-bootstrap';
import excluir from './img/excluir.svg'
import baixar from './img/baixar.svg'

const Home = props => (

    <Table striped>
        <thead>
            <tr>
                <th>Nome</th>
                <th>Caminho</th>
                <th>Tamanho</th>
                <th>Tipo</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
          {props.arquivos.length > 0 ? (
            props.arquivos.map(arquivo => (
                <tr key={arquivo.id}>
                    <td>{arquivo.nome}</td>
                    <td>{arquivo.caminho}</td>
                    <td>{arquivo.tamanho}</td>
                    <td>{arquivo.tipo}</td>
                    <td>
                        <ButtonGroup size="sm">
                            <Button variant="primary" href={arquivo.url}> <img src={baixar} alt='baixar' /> Baixar</Button>
                            <Button variant="danger" onClick={() => props.onDelete(arquivo.nome)}> <img src={excluir} alt='excluir' /> Excluir</Button>
                        </ButtonGroup>
                    </td>
                </tr>
            ))
          ) : (
            <tr>
                <td colSpan={4}>Sem Arquivos</td>
            </tr>
          )}
        </tbody>
    </Table>
)

export default Home;