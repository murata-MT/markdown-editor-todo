import * as React from 'react'
import styled from 'styled-components'
import { CodeFixAction } from 'typescript'

const StyledButton = styled.button`
  background-color: dodgerblue;
  border: none;
  box-shadow: none;
  color: white;
  font-size: 1rem;
  height: 2rem;
  min-width: 5rem;
  padding: 0 1rem;
`
// ts
interface Props {
    children: string
    onClick: () => void
}

// ボタンコンポーネントを返す関数の定義です。
// React.FC<Props> のように定義すると、引数の props は Props であると型を明示できます。
export const Button: React.FC<Props> = (props) => (
    <StyledButton onClick={props.onClick}>
        {props.children}
    </StyledButton>
)