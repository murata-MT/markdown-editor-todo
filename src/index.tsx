//console.log('Hello, webpack + typescript!')

// const log = (messages: string): void => {
//     console.log(messages)
// }

// log('Hello, webpack + typescript')

//最初の２行はライブラリをインポートする宣言です。
//React はソースコード内で使用していませんが JSX を使う場合、インポートが必要なので記述が必須です。
import * as React from 'react'
import { render }  from 'react-dom'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { Editor } from './pages/editor'

// Reactビュー(jsx)
//const Main = (<h1>Markdown Editor</h1>)
// const Header = styled.h1`
//     color:red;
// `
// const Main = (<Header>Markdown Editor</Header>)

const GlobalStyle = createGlobalStyle `
    body * {
        box-sizing: border-box;
    }
`
const Main = (
    <>
        <GlobalStyle />
        <Editor />
    </>
)

// ReactとHTMLを繋ぐ
render(Main, document.getElementById('app'))

