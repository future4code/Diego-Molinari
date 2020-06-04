import React from "react";
import axios from "axios";


class App extends React.Component {
  state = {
    pokemonsList: [],
    firsPokemomImage: "",
    firstBaseExperience: "",
    firstpokemonName: "",
    secondPokemonImage: "",
    secondBaseExperience: "",
    secondpokemonName: ""
  };

  componentDidMount = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {
        this.setState({ pokemonsList: response.data.results });
      })
      .catch(err => {
        console.log(err);
      });
  };

  getPokemon1 = event => {
    const pokemonName = event.target.value;
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(response => {
        console.log(response.data.sprites.front_default);
        this.setState({ firsPokemomImage: response.data.sprites.front_default, firstBaseExperience: response.data.base_experience, firstpokemonName: response.data.name });
      })
      .catch(err => {
        console.log(err);
      });
  };
  getPokemon2 = event => {
    const pokemonName = event.target.value;
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(response => {
        console.log(response.data.sprites.front_default);
        this.setState({ secondPokemonImage: response.data.sprites.front_default, secondBaseExperience: response.data.base_experience, secondpokemonName: response.data.name });
      })
      .catch(err => {
        console.log(err);
      });
  };
  

  render() {
    const image1 = this.state.firsPokemomImage ? (
      <img src={this.state.firsPokemomImage} alt="pokemon1" />
    ) : (
      <div />
    );
    const image2 = this.state.secondPokemonImage ? (
      <img src={this.state.secondPokemonImage} alt="pokemon2" />
    ) : (
      <div />
    );
    const baseExperience1 = this.state.firstBaseExperience ? (
      <p>{this.state.firstBaseExperience}</p>
    ) : (
      <div />
    );
    const baseExperience2 = this.state.secondBaseExperience ? (
      <p>{this.state.secondBaseExperience}</p>
    ) : (
      <div />
    );

    let winner = <div/>
    if(this.state.firstBaseExperience && this.state.secondBaseExperience){
      if(this.state.firstBaseExperience > this.state.secondBaseExperience){
        winner = (<h3><div>{this.state.firstpokemonName}</div> é mais forte que <div>{this.state.secondpokemonName}</div></h3>)
      }else if(this.state.firstBaseExperience < this.state.secondBaseExperience){
        winner = (<h3><div>{this.state.secondpokemonName}</div> é mais forte que <div>{this.state.firstpokemonName}</div></h3>)
      }else{
        winner = (<h3><div>{this.state.firstpokemonName}</div> e <div>{this.state.secondpokemonName}</div> tem a mesma Base Experience</h3>)
      }
    }else{
      winner = (<div/>)
    }

  

    return (
      <div>
      <h1>Base Experience</h1>
      <div>
      <section>
        <select onChange={this.getPokemon1}>
          <option value={""}>Escolha um Pokemon</option>
          {this.state.pokemonsList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        <div>{image1}</div>
        {baseExperience1}
        </section>
        <h1>VS</h1>
        <section>
        <select onChange={this.getPokemon2}>
          <option value={""}>Escolha um Pokemon</option>
          {this.state.pokemonsList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        <div>{image2}</div>
        {baseExperience2}
        </section>
      </div>
        {winner}
        </div>
    );
  }
}

export default App;