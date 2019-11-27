import React, {Component, Fragment} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import Header from './Header';
import Tabela from "./tabela";
import Formulario from "./formulario";

class App extends Component {

    state = {
        autores: [
            {
                nome: 'Cris',
                livro: 'React',
                preco: '1000'
            },
            {
                nome: 'Manuela',
                livro: 'Java',
                preco: '1000'
            },
            {
                nome: 'Carla',
                livro: 'Design',
                preco: '1000'
            },
            {
                nome: 'Julia',
                livro: 'DevOPs',
                preco: '1000'
            }
        ],
    };

    removeAutor = index => {
        const {autores} = this.state;

        this.setState(
            {
                autores: autores.filter((autor, posAtual) => {
                    console.log(autor, index, posAtual)
                    return posAtual !== index;
                }),
            }
        );
    }

    escutadorDeSubmit = autor => {
        this.setState({autores: [...this.state.autores, autor]})
    }

    render() {
        return (
            <Fragment>
                <Header/>
                <div className="container mb-10">
                    <Tabela autores={this.state.autores} removeAutor={this.removeAutor}/>
                    <Formulario escutadorDeSubmit = { this.escutadorDeSubmit}/>
                </div>

            </Fragment>
        );
    }
}

export default App;
