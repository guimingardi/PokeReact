import React from 'react';
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import BuyMenu from '../components/BuyMenu'
import Card from '../components/Card'
import Footer from '../components/Footer'
import CardWrapper from '../components/CardWrapper';
import PageTitle from '../components/PageTitle'
import Wrapper from '../components/Wrapper'

const App = () => {
  return (
      <Layout>
        <Navbar />
        <Main>
          <BuyMenu />
          <Wrapper>
            <PageTitle text="poke store" />
            <CardWrapper>
              <Card />
            </CardWrapper>
          </Wrapper>
        </Main>
        <Footer />
      </Layout>
  )
}

export default App;
