import React, { useState } from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    padding: 10px;
    background: #C9EEFF;
`

const StyledTitle = styled(Link)`
    font-size: 30px;
    box-sizing: border-box;
    text-decoration: none;
    color: black;
    &:hover{  
        color : gray;
    }
`

const StyledName = styled.div`
    height: 35px;
`

const StyledInfo = styled(Link)`
    text-decoration: none;
    color: black;
    &:hover{  
        color : gray;
    }
`

const SideBarWrap = styled.div`
    z-index: 5;
    padding: 12px;
    border-radius: 15px 0 0 15px;
    background-color: #97DEFF;
    height: 100%;
    width: 90%;
    right: -55%;
    top: 0;
    position: fixed;
    transition: 0.5s ease;
    &.open {
        right: 0;
        transition: 0.5s ease;
    }
`;

const StyledMenu = styled.div`
    &:hover{  
        color : gray;
    }
`

const Header = () => {
    const [toggle, setToggle]=useState(false);
    const info = ["정희수","박현정","정상원","정유정","송하빈"];

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
                        <StyledMenu onClick={handleClick}>
                            <FontAwesomeIcon icon={faXmark} size="2x"/>
                        </StyledMenu>
                        <br/>
                        {
                            info.map((v,i)=>{
                                let url="info/"+i;
                                return(
                                    <StyledName key={v}>
                                        <StyledInfo to={url}>
                                            {info[i]}
                                        </StyledInfo>
                                    </StyledName>
                                )
                            })
                        }
                    </SideBarWrap>
                }
                <StyledMenu>
                <FontAwesomeIcon onClick={handleClick} icon={faBars} size="2x"/>
                </StyledMenu>
        </StyledHeader>
    );
};

export default Header;