import styled from 'styled-components'

import colors from '../theme/colors'

const defaultBackgroundColor = '#333333'
const defaultColor = '#efefef'

const minorBackgroundColor = '#efefef'
const minorColor = '#333333'

const dangerousBackgroundColor = '#cc4455'
const dangerousColor = '#efefef'

const styledButton = styled.button.attrs({
  bgColor: ({ bgColor, dangerous, minor }) => {
    if (bgColor) return bgColor
    if (dangerous) return dangerousBackgroundColor
    if (minor) return minorBackgroundColor
    return defaultBackgroundColor
  },
  color: ({ color, minor, dangerous }) => {
    if (color) return color
    if (dangerous) return dangerousColor
    if (minor) return minorColor
    return defaultColor
  }
})`
  background: transparent;
  border: none;
  color: ${({ color }) => color};
  font-size: 1em;
  font-weight: bold;
  margin-right: 4px;
  min-width: 140px;
  padding: 10px 12px;
  position: relative;
  text-transform: uppercase;
  transition: color 140ms ease;

  &:after {
    background: ${({ bgColor }) => bgColor};
    border-radius: 3px;
    box-shadow: 0 0 0 0 #cccccc;
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    transition:
      box-shadow 140ms ease,
      left 140ms ease;
    z-index: -1;
  }

  &:hover {
    color: ${colors.color1};
    cursor: pointer;

    &:after {
      box-shadow: -4px 0 0 0 ${colors.color1};
      left: 4px;
    }
  }
`

export default styledButton
