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
  p{
    color:yellow;
  }

`;

export const FormControl = styled.form`
  display: block;
  position: relative;

  input {
    height: 50px;
    width: 100%;
    padding: 15px 150px 18px 17px;
    font-size: 14px;
    color: rgb(155, 155, 155);
  }

  span{
    display: flex;
    align-items:center;
    padding: 1px 7px 2px 8px;
    font-size: 11px;
    letter-spacing: -0.4px;
    color: #fff;
    background: #788185;
    position: absolute;
    right:4%; top:33%;
    height: 13px;
    cursor: pointer;
  }
`;
