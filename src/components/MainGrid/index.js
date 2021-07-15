import styled from 'styled-components'

const MainGrid = styled.main`
  width: 100%;
  grid-gap: 10px;
  margin: 0 auto;
  max-width: 500px;
  padding: 1rem;

  .profileArea {
    display: none;
    @media(min-width: 860px) {
      display: block;
    }
  }

  @media(min-width: 860px) {
    max-width: 1110px;
    display: grid;
    grid-template-areas: "profile welcome relationships";
    grid-template-columns: 15% 1fr 25%;
  }
`

export default MainGrid