import styled from "styled-components";

const ButtonL = styled.button`
    border : 1px solid green;
    border-radius : 20px;
    color : green;
    padding : 10px;
    margin : 5px;
`;

const ButtonH = styled.button`
    border : none;
    border-radius : 20px;
    color : white;
    background-color : green;
    padding : 10px;
    margin : 5px;
`;

const Title = styled.h2`
    font-size : 1.5em;
    text-align : center;
    margin-right : 20px;
`;

const Search = styled.div`
    width : 400px;
    height : 50px;
    border : 1px solid grey;
    border-radius : 20px;
    color : grey;
    padding : 10px;
    display : flex;
    justify-content : space-between; 
    align-items : center;
`;

export { ButtonH, ButtonL, Title, Search };