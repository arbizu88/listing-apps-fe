import React from "react";
import styled from "styled-components";

const Card = ({ data }: any) => {
  return (
    <CustomDiv>
      <p>Task: {data.name}</p>
      <p>Description: {data.description}</p>
      <p>Created At: {data.createdDate}</p>
      <p>Modified At: {data.modifiedDate!}</p>
    </CustomDiv>
  );
};

const CustomDiv = styled.div`
  box-shadow: 1px 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 40%;
  border-radius: 5px;
  padding: 2px 16px;
  margin: 10px auto;
`;
export default Card;
