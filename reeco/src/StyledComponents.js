import styled from "styled-components";

const ButtonL = styled.button`
    border : 1ps solid green;
    border-radius : 20px;
    color : green;
    padding : 10px;
`;

const ButtonH = styled.button`
    border : none;
    border-radius : 20px;
    color : white;
    background-color : green;
    padding : 10px;
`;

const Title = styled.h2`
    font-size : 1.5em;
    text-align : center;
`;

const Search = styled.div`
    width : 400px;
    border : 1px solid grey;
    border-radius : 20px;
    color : grey;
    padding : 10px;
    display : flex;
    justify-content : space-between; 
`;

export {ButtonH, ButtonL, Title, Search};