import styled from 'styled-components'
import { dimensions } from '../../styles'
import Grid from '../../styles/Grid'
import { Button } from '../atoms'
import { HeaderNav, SubHeader } from '../layout/index'
import Houses from '../organisms/Houses'

const HomeStyled = styled.main`
  section {
    padding: ${dimensions.padding.base};
  }
  .map {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
  }
  .center {
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
  }
`

function Home() {
  return (
    <HomeStyled>
      <header>
        <HeaderNav />
        <SubHeader />
      </header>
      <section>
        <Grid columns="1.2fr 1fr" alignitems="stretch" columngap="20px">
          <Houses />
          <div className="map">Map</div>
          <Button className="center">Cargar más</Button>
        </Grid>
      </section>
    </HomeStyled>
  )
}

export default Home
