import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 80%;
  margin: auto;

  .categories {
    display: flex;
  }

  .joker {
    display: block;
  }

  .input-group {
  }
`

export const CategoriesBox = styled.div`
  display: grid;
  margin: 10px;
  cursor: pointer;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 80vw;
`

export const Category = styled.p`
  border: solid 1px;
  padding: 5px;
`

export const JokeCard = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 0px 0px 10px rgba(0.2, 0.2, 0.2, 20);
  margin: 10px auto;
`

export const JokeCardImage = styled.img`
  width: auto;
  height: 50px;
`

export const JokeCardText = styled.h3`
  border-left: solid 1px #000;
  padding: 10px;
`

export const SearchBox = styled.div`
  padding: 10px;
  border: solid 0.2px #eee;
`

export const SearchBoxLabel = styled.h2`
  margin: 5px 0px;
`
export const SearchBoxInput = styled.input`
  margin: 5px 0px;
  padding: 5px;
  border: none;
  text-align: center;
`

export const SearchBoxButton = styled.button`
  border: none;
  background: white;
  color: #222;
  padding: 5px;
`
