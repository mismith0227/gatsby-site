import styled from 'styled-components'

const getColor = ({ isOpen }) => (isOpen ? '#fff' : '#000')

export const Wrap = styled.div`
  display: block;
  width: 4.4rem;
  height: 3.4rem;
  overflow: hidden;
  &:hover {
    cursor: pointer;
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 0.4rem;
    background-color: ${getColor};
    top: 0;
    transition: 0.3s;
    transform: ${props =>
      props.isOpen
        ? 'translateY(1.5rem) rotate(45deg)'
        : 'translateY(0) rotate(0)'};
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 0.4rem;
    background-color: ${getColor};
    bottom: 0;
    transition: 0.3s;
    transform: ${props =>
      props.isOpen
        ? 'translateY(-1.5rem) rotate(-45deg)'
        : 'translateY(0) rotate(0)'};
  }
`

export const Text = styled.div`
  text-indent: -9999px;
  position: absolute;
  left: 0;
  width: 100%;
  height: 0.4rem;
  background-color: ${getColor};
  top: 1.5rem;
  opacity: ${props => (props.isOpen ? 0.6 : 1)};
  transition: 0.2s;
  transform: ${props =>
    props.isOpen ? 'translate3d(100%, 0, 0)' : 'translate3d(0, 0, 0)'};
`