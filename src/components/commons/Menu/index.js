import React from "react";
import { Logo } from "../../../theme/Logo";
import { Button } from "../Button";
import { MenuWrapper } from "./styles/MenuWrapper";
import Text from "../../foundation/Text";

export default function Menu() {
    const links = [
        {
            texto: 'Home',
            url: '/'
        },
        {
            texto: 'Perguntas Frequentes',
            url: '/'
        },
        {
            texto: 'Sobre',
            url: '/'
        },
    ]

  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>

      <MenuWrapper.CentralSide>
        {links.map(function (link) {
            return (
                <li key={link.url}>
                    <Text variant="smallestException" tag="a" href={link.url}>
                        {link.texto}
                    </Text>
                </li>
            )
        })}

      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <Button ghost variant="secondary.main">
            Entrar
        </Button>
        <Button variant="primary.main">
            Cadastrar
        </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  )
}