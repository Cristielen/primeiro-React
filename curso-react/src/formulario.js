import React, {Component} from 'react';

class Formulario extends Component {

    constructor(props) {
        super(props);

        this.stateInicial = {
            nome: '',
            livro: '',
            preco: '',
        }

        this.state = this.stateInicial;
    }

    escutadorDeinput = event => {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        });
    }

    submitFormulario = () => {
        this.props.escutadorDeSubmit(this.state);
        this.setState(this.stateInicial);
    }

    render() {

        const {nome, livro, preco} = this.state;
        return (
            <form>
                <div className="row">
                    <div className="input-field col s4">
                        <label htmlFor="nome" className="input-field">Nome</label>
                        <input className="validate"
                            id="nome"
                            type="text"
                            name="nome"
                            value={nome}
                            onChange={this.escutadorDeinput}
                        />
                    </div>
                    <div className="input-field col s4">
                        <label htmlFor="livro" className="input-field">Livro</label>
                        <input className="validate"
                            id="livro"
                            type="text"
                            name="livro"
                            value={livro}
                            onChange={this.escutadorDeinput}
                        />
                    </div>
                    <div className="input-field col s4">

                        <label htmlFor="preco" className="input-field">Preço</label>
                        <input className="validate"
                            id="preco"
                            type="text"
                            name="preco"
                            value={preco}
                            onChange={this.escutadorDeinput}
                        />
                    </div>
                </div>

                <button onClick={this.submitFormulario} type="button"  className="waves-effect waves-light teal accent-3 btn">Salvar
                </button>
            </form>
        );
    }
}

export default Formulario;
