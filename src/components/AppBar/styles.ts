import styled from "styled-components";

export const Container = styled.div`
  height: 70px;
  background-color: #6904bd;
`;

export const ListMenu = styled.div`
  display: flex;
  align-items:center;
  li {
    list-style: none;
  }
  a {
    font-family: 'League Gothic', sans-serif;
    font-weight:bold;
    padding: 15px 20px;
    display: inline-block;
    color: #e5e4e2;
    text-decoration: none;
    border-radius: 15px;
    transition: 0.5s;
  }
  a:hover {
    background-color: #ca91ee;
    color: #6904bd;
  }
`;
