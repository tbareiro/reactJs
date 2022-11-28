const { Component } = require("react")

class NavBar extends Component {
    render(){
        return (
            <div>
                <h1>Componente de clase</h1>
                <p>Tu nombre es: <b>{this.props.nombre} {this.props.apellido}</b></p>
            </div>
        )
    }
}

export default NavBar;