import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const NavBar = styled.div`
  display: flex;
`

export const NavigationLgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 92%;
  position: fixed;
  margin-top: 60px;
  background-color: ${props => props.bgColor};
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavOptions = styled.ul`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  list-style-type: none;
  padding: 0px;
  margin-top: 0px;
`
export const NavLink = styled(Link)`
  text-decoration: none;
  padding-top: 0px;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`
export const SpanEl = styled.span`
  font-size: 12px;
  color: ${props => (props.color ? '#ff0b37' : '#909090')};
`
export const NavLinkContainer = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.bgColor};
  padding-left: 20px;
`
export const NavText = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  margin-left: 15px;
  color: ${props => props.color};
`

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`
export const ContactHeading = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: bold;
  color: ${props => props.color};
`
export const ContactIcons = styled.div`
  display: flex;
  align-items: center;
`
export const ContactImage = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50px;
  margin-right: 10px;
  cursor: pointer;
`
export const ContactNote = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: ${props => props.color};
  padding-bottom: 15px;
`
export const NavigationSmallContainer = styled.nav`
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: space-around;
  padding: 10px;
  background-color: ${props => props.bgColor};
  position: fixed;
  bottom: 0;
  align-items: center;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
