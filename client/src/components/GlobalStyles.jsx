import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  *{
  scrollbar-width: thin;
  scrollbar-color: rgba(218, 218, 218, 0.091) transparent;
}
/* *::-webkit-scrollbar {
  width: 1px;
} */
*::-webkit-scrollbar-track {
  background: transparent;
}
*::-webkit-scrollbar-thumb {
  background-color: rgba(217, 217, 217, 0.186);
  border-radius: 20px;
  border: transparent;
}

  body {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: white;
    font-family: 'inter', sans-serif;
  }
  button {
    font-family: 'inter', sans-serif;
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    color: white;
    background: transparent;
    transition: all 0.5s ease;
    &:hover{
      background-color: #23d997;
      color: white;
    }
  }
  h2 {
      font-weight: heavier;
      font-size: 2rem;
      margin-bottom: 0.5rem;
    }
    h3 {
      color: #23d997;
    }
    h4 {
      font-size: 2rem;
      font-weight: bold;
    }
    span {
      font-weight: bold;
      color: #23d997;
    }
    a {
      font-size: 1.1rem;
    }
    p {
      padding: 2rem 5rem 2rem 5rem;
      padding-right: 5rem;
      color: #515151cc;
      font-size: 1rem;
      line-height: 150%;
      text-align: center;
    }
`

export default GlobalStyle