import styled from "styled-components";

export const HeaderMain = styled.div`
    background-color: ${(props) => props.theme["green-700"]};
`

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 74rem;
    margin: 0 auto;
`

export const ImagemContainer = styled.div`
    img {
        width: 100px;
    }
`

export const NavContainer = styled.div`
    nav{
        display: flex;
        
        a {
            color: ${(props) => props.theme.white};
            text-decoration: none;
            margin-right: 1rem;
            display: flex;
            justify-content: center;
            flex-direction: column;
        }
        
        span {
            color: ${(props) => props.theme.white};
        }
    }
`