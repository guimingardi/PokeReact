import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import BuyMenu from '../components/BuyMenu'
import Footer from '../components/Footer'

const App = () => {
  const [pokemons, setPokemons] = useState(null)
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=20')
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        Promise.all(res.results.map(pokemonsObj => {
          return fetch(pokemonsObj.url)
            .then((pokemonsUrl) => pokemonsUrl.json())
        })).then((valuePokemonsUrl) => {
          console.log(valuePokemonsUrl)
          setPokemons(valuePokemonsUrl)
        })
      })
  }, [])



  return (
    <Layout>
      <Navbar />
      <Main>

        {pokemons && pokemons.map(item => (
              <BuyMenu
              key={item && item.name}
              name={item && item.name}
              type={item.types[0].type.name}
              price={item.base_experience}
              />
              )
          )
        }

      </Main>
      <Footer />
    </Layout>

  )
}

export default App;
