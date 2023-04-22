import React, { useState } from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    padding: 10px;
    background: yellow;
`

const StyledTitle = styled(Link)`
    font-size: 30px;
    box-sizing: border-box;
    text-decoration: none;
`

const StyledInfo = styled(Link)`
    text-decoration: none;
    padding: 5px;
`

const ButtonX = styled.div`

`

const SideBarWrap = styled.div`
    z-index: 5;
    padding: 12px;
    border-radius: 15px 0 0 15px;
    background-color: #e7e4e1;
    height: 100%;
    width: 80%;
    right: -55%;
    top: 0;
    position: fixed;
    transition: 0.5s ease;
    &.open {
        right: 0;
        transition: 0.5s ease;
    }
`;

const Header = () => {
    const [toggle, setToggle]=useState(false);
    const info = [0,1,2,3,4];

    const handleClick = () => {
        setToggle(toggle => !toggle);
    }

    return (
        <StyledHeader>
                <StyledTitle to="/">
                    SWM 49팀 
                </StyledTitle>
                {
                    toggle &&
                    <SideBarWrap>
                        <ButtonX onClick={handleClick}>
                            X
                        </ButtonX>
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
                    </SideBarWrap>
                }
                <FontAwesomeIcon onClick={handleClick} icon={faBars} size="2x"/>
        </StyledHeader>
    );
};

export default Header;