import styled from 'styled-components';


export default styled.div`
background-color: #fff;
margin:auto;
height:100vh;
width:100%;
display: flex;
flex-direction: ${props => props.row ? "row" : "column"}; //propsta row varsa row olsun yoksa column
justify-content:center;
align-items:center;
`