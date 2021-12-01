import * as React from 'react'
import styled from 'styled-components'

// useState
// const { useState } = React

// useStateカスタムフック
import { useStateWithStorage } from '../hooks/use_state_with_storage'

// react-markdown
import * as ReactMarkdown from 'react-markdown'

// memos
import { putMemo } from '../indexeddb/memos'

// Buttons
import { Button } from '../components/button'


// styled
const Header = styled.header`
  align-content: center;
  display: flex;
  font-size: 1.5rem;
  height: 2rem;
  justify-content: space-between;
  left: 0;
  line-height: 2rem;
  padding: 0.5rem 1rem;
  position: fixed;
  right: 0;
  top: 0;
`

const HeaderControl = styled.div`
    height: 2rem;
    display: flex;
    align-content: center;
`

const Wrapper = styled.div`
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 3rem;
`

const TextArea = styled.textarea`
  border-right: 1px solid silver;
  border-top: 1px solid silver;
  bottom: 0;
  font-size: 1rem;
  left: 0;
  padding: 0.5rem;
  position: absolute;
  top: 0;
  width: 50vw;
`

const Preview = styled.div`
  border-top: 1px solid silver;
  bottom: 0;
  overflow-y: scroll;
  padding: 1rem;
  position: absolute;
  right: 0;
  top: 0;
  width: 50vw;
`

// storagekey
const StorageKey = 'pages/editor:text'

//
export const Editor : React.FC = () => {
    // if分の中では使わない
    //const [text, setText] = useState<string>('')
    //const [text, setText] = useState<string>(localStorage.getItem(StorageKey) || '')
    const [text, setText] = useStateWithStorage('', StorageKey) // 初期値, localStrageのkey

    const saveMemo = (): void => {
        console.log("aa")
        putMemo('TITLE', text)
    }

    // returnは1つのフラグメントしか出来ない。
    return (
        // <React.Fragment>の略
        <>
            <Header>
                Markdown Editor Todo
                <HeaderControl>
                    <Button onClick={saveMemo}>
                        保存する
                    </Button>
                </HeaderControl>
            </Header>
            <Wrapper>
                <TextArea
                    /*
                        onChange={(e) => {
                            const changeText = e.target.value
                            localStorage.setItem(StorageKey, changeText)
                            setText(changeText)
                        }}
                    */
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                />
                <Preview>
                    <ReactMarkdown>{text}</ReactMarkdown>
                </Preview>
            </Wrapper>
        </>
    )
}