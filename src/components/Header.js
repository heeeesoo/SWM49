import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';

const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    height: 70px;
    background: yellow;
`

const StyledTitle = styled(Link)`
    font-size: 30px;
    padding: 10px;
    box-sizing: border-box;
    text-decoration: none;
`

const StyledInfo = styled(Link)`
    text-decoration: none;
    padding: 5px;
`
const Header = () => {
    const info = [0,1,2,3,4]
    return (
        <StyledHeader>
                <StyledTitle to="/">
                    SWM 49팀 
                </StyledTitle>
                {
                    info.map((v,i)=>{
                        let url="info/"+i;
                        return(
                            <div key={v}>
                            <StyledInfo to={url}>
                                {i}
                            </StyledInfo>
                            </div>
                        )
                    })
                }
        </StyledHeader>
    );
};

export default Header;