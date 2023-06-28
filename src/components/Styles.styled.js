import { NavLink } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 100px 10px 10px 10px;
  margin: 0 auto;
  max-width: 900px;
  font-size: 40px;
  color: #010101;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 15px;
  font-weight: 700;
  user-select: none;
  color: rgba(66, 137, 254, 255);
  text-shadow: 1px 2px 3px #063970;

  @media screen and (min-width: 568px) {
    font-size: 50px;
  }
`;

export const Icon = styled.img`
  width: 80px;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 30px;
  font-size: 25px;
`;

export const NavButton = styled(NavLink)`
  position: relative;
  padding: 20px 0;

  font-size: 25px;
  font-weight: 400;
  color: rgba(66, 137, 254, 255);

  &::after {
    content: '';
    display: inline-block;

    position: absolute;
    bottom: -3px;
    left: 0;

    width: 100%;
    height: 4px;
    border-radius: 2px;

    opacity: 0;
    transform: scaleX(0.4);

    transition: transform 250ms ease-in, opacity 250ms ease-in;

    background-color: rgba(66, 137, 254, 255);
  }

  &:hover::after,
  &:focus::after {
    content: '';
    display: inline-block;

    position: absolute;
    bottom: -3px;
    left: 0;

    width: 100%;
    height: 4px;
    border-radius: 2px;

    opacity: 1;
    transform: scaleX(1);

    background-color: rgba(66, 137, 254, 255);
  }

  &.active::after {
    content: '';
    display: inline-block;

    position: absolute;
    bottom: -3px;
    left: 0;

    width: 100%;
    height: 4px;
    border-radius: 2px;

    opacity: 1;
    transform: scaleX(1);

    background-color: rgba(66, 137, 254, 255);
  }
`;

export const UserName = styled.span`
  font-size: 15px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  align-items: center;
  margin: 0 auto;

  font-size: 20px;

  user-select: none;
`;

export const FormLabel = styled.label`
  display: block;
  width: 80%;
  margin-top: 30px;
  font-size: 15px;
  font-weight: 600;
  color: rgba(66, 137, 254, 255);
`;

export const Input = styled.input`
  width: 100%;

  font-size: 20px;
  font-weight: 600;
  padding: 5px 5px;

  outline: none;
  border: none;
  border-bottom: 1px solid rgba(66, 137, 254, 255);
  &:hover,
  &:focus {
    margin: -2px;
    border: 3px solid transparent;
    border-bottom: 3px solid rgba(66, 137, 254, 255);
  }
`;

export const Wrapper = styled.div`
  margin: 0 auto;

  flex-direction: column;
  margin-top: 30px;
  max-width: 700px;
  display: flex;
  justify-content: center;

  gap: 15px;

  @media screen and (min-width: 568px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const SectionTitle = styled.h2`
  display: block;
  user-select: none;
  font-size: 30px;
  font-weight: 600;
  color: rgba(66, 137, 254, 255);
`;

export const FilterInput = styled.input`
  max-width: 240px;
  font-size: 18px;
  padding: 2px 2px;
  user-select: none;
  outline: none;
  border: none;
  border-bottom: 1px solid rgba(66, 137, 254, 255);
  &:hover,
  &:focus {
    margin-bottom: -2px;
    border-bottom: 3px solid rgba(66, 137, 254, 255);
  }

  @media screen and (min-width: 568px) {
    font-size: 20px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  align-items: start;
  margin: 0 auto;

  margin-top: 30px;
`;

export const ContactItem = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  margin: 0 auto;
  font-size: 10px;

  @media screen and (min-width: 320px) {
    font-size: 15px;
  }
  @media screen and (min-width: 468px) {
    font-size: 20px;
  }
  @media screen and (min-width: 568px) {
    font-size: 25px;
  }
`;

export const PhoneWrapper = styled.a`
  margin-left: auto;
  display: flex;
  gap: 5px;
  align-items: center;
`;

export const Info = styled.p`
  font-size: 25px;
`;

export const Name = styled.p`
  display: block;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const ContactWrapper = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 468px) {
    gap: 10px;
  }
`;

export const SpinnerOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(2px);
  z-index: 1200;
`;

export const ModalLayer = styled.div`
  position: relative;
  display: block;
  background-color: white;
  padding: 20px 20px;

  box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.12), 1px 2px 2px rgba(0, 0, 0, 0.14),
    1px 4px 2px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`;

export const Close = styled(CloseIcon)`
  cursor: pointer;
  position: absolute;
  color: rgba(66, 137, 254, 255);
  top: 7px;
  right: 7px;
`;

export const ContactsSectionWrapper = styled.div`
  display: flex;
  align-items: center;
  align-text: center;
  gap: 20px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const InfoMessage = styled.p`
  display: block;

  font-size: 12px;
  font-weight: 600;
  color: rgba(66, 137, 254, 255);
`;
