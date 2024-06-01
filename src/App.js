import { Component } from 'react'

class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            nome: "Daniel",
            contador: 0
        };
        this.aumentar = this.aumentar.bind(this)
        this.diminuir = this.diminuir.bind(this)
    }

    diminuir() {
        let state = this.state;
        if (state.contador === 0) {
            alert("Chegou a zero!")
            return
        }
        state.contador -= 1;
        this.setState(state)
    }

    aumentar() {
        let state = this.state;
        state.contador += 1;
        this.setState(state)
    }

    render() {
        return (
            <div className="text-center">
                <h1>Contador</h1>
                
                <p>
                    <button className="bg-orange-100 mx-2 border-solid border-2 border-orange-500 rounded-full w-auto" onClick={this.diminuir}>-</button>
                        {this.state.contador}
                    <button className="bg-orange-100 mx-2 border-solid border-2 border-orange-500 rounded-full w-auto" onClick={this.aumentar}>+</button>
                </p>
            
            </div>
        )
    }
}

export default App