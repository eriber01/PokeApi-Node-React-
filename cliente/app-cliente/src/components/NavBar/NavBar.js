import React, {useState} from "react"

import SearchApi from '../../services/SearchApi'
import Card from '../Card/Card'

import './Header.css'

export default function NavBar(){

    const [searchState, setSearchState] = useState([])
    const [pokeDataState, setPokeDataState] = useState([])
        
    const handleSearch = async (eve)=>{
        eve.preventDefault()
        
            await SearchApi (searchState)
            .then(pokeData =>{
                
                if (pokeData.HandleError != null) {
                    alert('Debes escribir el nombre del Pokemon de forma correcta')
                }else{
                    setPokeDataState({
                        name: pokeData.Pokedata.name,
                        exp: pokeData.Pokedata.base_experience,
                        order: pokeData.Pokedata.order,
                        type: pokeData.Pokedata.types[0].type.name,
                        size: pokeData.Pokedata.height,
                        hp: pokeData.Pokedata.stats[0].base_stat,
                        attack: pokeData.Pokedata.stats[1].base_stat,
                        defe: pokeData.Pokedata.stats[2].base_stat,
                        img: pokeData.Pokedata.sprites.other.dream_world.front_default
                    });
            }
            })

            setSearchState('')
    }
    
    //toma los datos del input
    const handleChange = (eve)=>{
        const search = eve.target.value;
        setSearchState(search.toLowerCase())
    }

    //restart app
    const restart = ()=>{
        window.location.reload()
    }

    return <>
    <header className="header">
        <nav>
            <ul>

                <div className='home'>
                    <li onClick={restart}>HOME</li>
                </div>
                <form onSubmit={handleSearch} autoComplete='off'>
                    <input type='search' name='pokeName' value={searchState} onChange={handleChange} placeholder="Busca tu Pokemon Favorito" required ={true}/>
                    <button type="submit">Enviar</button>
                </form>
            </ul>
        </nav>
    </header>

    <Card data={pokeDataState}/>
    </>
}