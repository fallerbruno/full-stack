import { useState } from "react";
import { MenuLinks, SideBarContainer, SidebarContent } from "./styles";
import { List, Speedometer } from "@phosphor-icons/react";
export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <SidebarContent>
      <SideBarContainer>
        <List size={32} color="white" onClick={() => setIsOpen(!isOpen)} />
        <MenuLinks>
          <Speedometer size={32} />
          {isOpen && <span>Dashboard</span>}
        </MenuLinks>
      </SideBarContainer>
    </SidebarContent>
  );
}
