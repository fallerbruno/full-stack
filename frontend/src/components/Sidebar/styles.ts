import styled from "styled-components";

export const SidebarContent = styled.div`
    position: relative;
`

export const SideBarContainer = styled.div`
   background-color: ${(props) => props.theme["green-700"]};
   height: 100vh;
   position: absolute;
   flex: 1;
   display: flex;
   flex-direction: column;
   max-width: 20rem;
`

export const MenuLinks = styled.div`
    color: ${(props) => props.theme["white"]};
    font-size: 1.5rem;
    font-weight: 700;
    padding: 1rem;
    display: flex;
    align-items: center;
    gap: 5px;
`

