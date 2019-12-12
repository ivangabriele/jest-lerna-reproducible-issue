import styled from "@emotion/styled";
import React from "react";

const Container = styled.div`
  color: blue;
`;

const Block = ({ text }) => <Container>{text}</Container>;

export default Block;
