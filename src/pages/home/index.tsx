import React, { useEffect, useState } from 'react'
import gif from '../../img/giphy.gif'
import api from '../../service/api'
import {
    CategoriesBox, Category, HomeContainer, JokeCard,
    JokeCardImage, SearchBoxLabel, JokeCardText, SearchBox,
    SearchBoxButton, SearchBoxInput, TitleBox
} from './style'


interface IJoke {
    id: string;
    value: string;
    url: string;
    icon_url: string;
}


//end point with query
//end point with category

const Home: React.FC = () => {

    const [categoriesJoke, setCategoriesJoke] = useState([]);
    const [categorySelected, setCategorySelected] = useState<IJoke>();
    const [searchedJoke, setSearchedJoke] = useState("");
    const [isLoad, setIsLoad] = useState(false);
    const [resultSearch, setResultSearch] = useState<IJoke[]>([]);

    useEffect(() => {

        api.get('/jokes/categories').then((response) => {
            setCategoriesJoke(response.data)
        })
    }, [])


    async function handleJokes() {
        setIsLoad(true);
        const response = await api.get(`/jokes/search?query=${searchedJoke}`);
        setResultSearch(response.data.result)

        if (response.status === 200) {

            setIsLoad(false);
        }
    }

    async function handleJokeByCategory(cat: string) {
        setIsLoad(true);
        const response = await api.get(`jokes/random?category=${cat}`);
        setCategorySelected(response.data)
        if (response.status === 200) {
            setIsLoad(false);
        }

    }

    return (
        <HomeContainer>
            <TitleBox>
                <h1>
                    The chucknorris joke app
                </h1>
            </TitleBox>
            <TitleBox>
                The chucknorris joke app
                clique na categoria para receber uma piada
            </TitleBox>
            <div className="categories">
                <CategoriesBox>
                    {categoriesJoke.map((joke, index) => (
                        <Category key={index} onClick={() => handleJokeByCategory(joke)}> {joke}</Category>
                    ))}
                </CategoriesBox>
            </div>

            <JokeCard>
                <JokeCardImage src={categorySelected?.icon_url} alt={categorySelected?.value} />
                <JokeCardText>{categorySelected?.value}</JokeCardText>
            </JokeCard>

            <SearchBox className="input-group">
                <SearchBoxLabel>Digite o nome da categoria para receber as piadas</SearchBoxLabel>
                <SearchBoxInput type="text" value={searchedJoke} onChange={e => setSearchedJoke(e.target.value)} /> <SearchBoxButton onClick={handleJokes}>Find joke</SearchBoxButton>
            </SearchBox>
            <div className="joker">
                {isLoad ? <img src={gif} alt={"loading"} /> : null}
                {resultSearch.map((result, index) => (
                    <JokeCard key={result.id}>
                        <JokeCardImage src={result.icon_url} alt={result.value}></JokeCardImage>
                        <JokeCardText>{result.value}</JokeCardText>
                    </JokeCard>
                ))}


            </div>
        </HomeContainer>
    )
}

export default Home;