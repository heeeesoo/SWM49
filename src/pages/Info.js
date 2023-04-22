import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import info0 from "../data/0.json";
import info1 from "../data/1.json";
import info2 from "../data/2.json";
import info3 from "../data/3.json";
import info4 from "../data/4.json";

const StyledContainer = styled.div`
`

const StyledName = styled.div`
    font-size: 20px;
`
const Info = () => {
    const { num } = useParams();
    const arr = [info0,info1,info2,info3,info4];

    return (
        <StyledContainer>
            <StyledName>
                {arr[Number(num)].name}
            </StyledName>
            <hr/>
            <br/>
            {arr[Number(num)].text.split('\n').map((line,i) => {
                return (
                    <span key={i}>{line}<br/></span>
                )
            })}
        </StyledContainer>
    );
};

export default Info;