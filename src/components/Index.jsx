import { Component } from "react";

export default class Form extends Component {

    constructor () {
        super();
        this.state = {
            name : "",
           url: "#",
        }
    }

    handleName = event => {
        this.setState ({
            name : event.target.value
        })
    }

    // Este metodo se trae los datos de PokeApi.co - los busca
    fechApi = async () => {
      let res = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=30`);
      // Crea el objeto en base a la info que trae
      let data = await res.json();
      this.setState ({
        url: data.results
    })

      console.log(this.state.url);

    }

    

    // Cuando se crea, ejecuta la funcion 
    // componentDidMount () {
    //   this.fechApi();
    // }

    handlesubmit = event => {
      let name = this.state.name;

      this.fechApi();
      event.preventDefault();
   
      event.preventDefault();

  }

  render() {

    return (
      <div className="card text-center" style={{width: "600px", backgroundColor:"#FFF0F0", alignItems:"center"}}>
        <div className="card-header" style={{width: "100%"}}>Formulario para gays</div>
        <div className="card-body">
          <form onSubmit={this.handlesubmit}>
            <label className="form-label">Ingrese nombre</label>
            <br/>
            <input onChange={this.handleName} style={{width:"400px"}} type="text" placeholder="Nombre" className="form-control text-center"/>
            <br/>
            <button type="submit" className="btn btn-primary">Enviar</button>
          </form>
        </div>
        <img src={this.state.img} alt="Pokemon-img"/>
      </div>
    );
  }
}
