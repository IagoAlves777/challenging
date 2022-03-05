import styled from "styled-components";

export const Container = styled.div`
  height: 75vh;
  background-color: #33164a;
`;

export const MainContent = styled.div`
  margin-left: 25%;
  margin-right: 25%;
  display: block;

  div{
    display:flex;
    justify-content:center;
    margin-bottom: 20px;
  }

  img {
    width: 300px;
    height: 346px;
  }
`;

export const FormControl = styled.div`
  display: block;
  input {
    height: 50px;
    width: 100%;
    padding: 15px 150px 18px 17px;
    font-size: 14px;
    color: rgb(155, 155, 155);
  }
`;
