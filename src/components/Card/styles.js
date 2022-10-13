import styled from "styled-components";

export const Card = styled.div`
    background: rgba(255, 213, 0, 0.24);
    border-radius: 15px;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 213, 0, 1);
    padding: 10px;
    margin: 5px;
    width: 400px;
    height: 250px;
    background-image: url("./img/blitz-chibi.png");
    background-position: center;
    background-size: cover;
`

export const Container = styled.div`
    padding: 2px 16px;
`

export const Image = styled.img`
    width: 100%;
    height: auto;
    border-radius: 15px;
    display: ${props => props.status === "hidden" ? "none" : "block"};
`