
const useDataBase = () => {
  const technologies = [
    {
      logo: '/img/About/technologies/html.png',
      name: 'HTML',
      description: '',
    },
    {
      logo: '/img/About/technologies/css.png',
      name: 'CSS',
      description: '',
    },
    {
      logo: '/img/About/technologies/js.png',
      name: 'Javascript',
      description: '',
    },
    {
      logo: '/img/About/technologies/react.png',
      name: 'React',
      description: '',
    },
    {
      logo: '/img/About/technologies/python.png',
      name: 'Python',
      description: '',
    },
    {
      logo: '/img/About/technologies/git.png',
      name: 'Git',
      description: '',
    },
    {
      logo: '/img/About/technologies/github.png',
      name: 'GitHub',
      description: '',
    },
  ]
  const education = [
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Escudo_de_la_Universidad_Surcolombiana.svg/1200px-Escudo_de_la_Universidad_Surcolombiana.svg.png",
      name: "Surcolombiana University",
      period: "2017 - 2023",
      about: "Civil Engineering"
    },
    {
      logo: "/img/About/logo_academlo.png",
      name: "Academlo",
      period: "2022 - Now",
      about: "Full stack program"
    }
  ]

  const myPortfolio = [
    {
      name: `Pokedex`,
      image: `/img/Portfolio/projects/pokedex.jpg`,
      video: `/videos/pokedex.mp4`,
      description: `
        The public API of Pokémon with "axios" was consumed for the elaboration of a Pokedex with routes protected by the
        React-Router library. The application has a filter that shows the Pokemons by type and there is also a route with the
        information of each of them when clicking or using the search engine.
        `,
      link: `https://pokedex-app-cris.netlify.app/`
    },
    {
      name: `User's CRUD`,
      image: `/img/Portfolio/projects/users_crud.jpg`,
      video: `/videos/users_crud.mp4`,
      description: `
        A web application where an API created by Academlo was interacted with using HTTP methods to create, read, update and delete 
        data that the user enters.
        `,
      link: `https://crud-users-cris.netlify.app/`
    },
    {
      name: `Rick and Morty App`,
      image: `/img/Portfolio/projects/rick_and_morty.jpg`,
      video: `/videos/rick_and_morty.mp4`,
      description: `
        Consumed the public Rick and Morty API with "axios" to display dynamic information about the show's locations along with their
        inhabitants and basic descriptions.
        `,
      link: `https://rickandmorty-cris.netlify.app/`
    },
    {
      name: `Random-Quotes`,
      image: `/img/Portfolio/projects/random_quotes.jpg`,
      video: `/videos/random_quotes.mp4`,
      description: `
        A web application where a phrase is randomly displayed from among 102 phrases by 
        various authors.
        `,
      link: `https://random-quotes-cris.netlify.app/`
    },
    {
      name: `Weather App`,
      image: `/img/Portfolio/projects/weather_app.jpg`,
      video: `/videos/weather_app.mp4`,
      description: `
        A web application focused on displaying the weather of the user's current location 
        by consuming the OpenWeather API.
        `,
      link: `https://weather-app-cris.netlify.app/`
    },
    {
      name: `Academlo Store`,
      image: `/img/Portfolio/projects/academlo_store.jpg`,
      video: `/videos/academlo_store.mp4`,
      description: `
      Functional layout of a web application that shows the products of an electronic 
      commerce (e-commerce) with their respective stocks and a shopping cart system.
      `,
      link: `https://academlo-store-cris.netlify.app/`
    }

  ]
  return {
    technologies,
    education,
    myPortfolio
  }
}

export default useDataBase