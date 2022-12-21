import styled from 'styled-components';

export const StyledNav = styled.div`  
min-height: 5vh;
display: flex;
margin: auto;
justify-content: space-between;
align-items: center;
padding: 1rem 10rem;
background: white;
box-shadow: 1px 1px 20px #c6c6c6;
position: fixed; 
top: 0;
width: 100%;
overflow: hidden;
a{
  color: grey;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.5s ease;
  &:hover {
    cursor: pointer;
    color: black;
  }
}
ul {
  display: flex;
  list-style: none;
}
li{
  color: grey;
  padding-left: 2rem;
  position: relative;
  &:hover {
    cursor: pointer;
    color: black;
  }
}
img{
  height: 100px;
  border-radius: 8px;
  /* box-shadow: 1px 1px 20px #c6c6c6; */
}
.social-logo{
  height: 40px;
  padding: 10px;
  transition: all 0.5s ease;
  &:hover {
    cursor: pointer;
      box-shadow: 1px 1px 20px #c6c6c6;
  }
}
`;

export const StyledBlogSection = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  /* justify-content: space-evenly; */
  align-items: center;
  overflow: scroll;
  border-left: 1px solid black;
  border-right: 1px solid black;
  /* padding: 1rem 0rem 0rem 0rem; */
  margin-top: 10rem;
  h1 {
    margin: 10px;
  }
  .faq-line {
  background: #cccccc;
  height: 0.05rem;
  margin: 2rem 0rem;
  width: 30%;
  }
`; 

export const StyledFooter = styled.div`
min-height: 5vh;
display: flex;
margin: auto;
justify-content:center;
align-items: center;
/* padding: 1rem 10rem; */
background: black;
box-shadow: 1px 1px 20px #c6c6c6;
position: fixed; 
bottom: 0;
width: 100%;
overflow: hidden;
p {
  color: white;
  font-size: 12px;
}
`;
