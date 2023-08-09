import { styled } from "styled-components";

export const SpanStatus = styled.span`
width: 10px;
height: 10px;
border-radius: 50%;
margin-right: 10px;
background-color: ${props => {
    return props.isonline === 'true' ? 'green' : 'red';
}}
`;