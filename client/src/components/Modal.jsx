import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
`

const InnerContainer = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 3px;
  background: #ffffff;
  padding: 16px;
`

const UpdateModal = ({ id = '', defaultInput = '', onUpdate = () => {}, onClose = () => {} }) => {
    const [value, setValue] = React.useState(defaultInput)
    const ref = React.useRef(null)

    const onClickOutside = e => {
        if (
            ref.current &&
            ref.current.contains &&
            !ref.current.contains(e.target)
        ) {
            onClose()
        }
    }

    // onclick listener for switching between compact/full size
    React.useEffect(() => {
       document.addEventListener('mousedown', onClickOutside)

        return () => document.removeEventListener('mousedown', onClickOutside)

    }, [onClickOutside])

    return (
        <Container>
            <InnerContainer ref={ref}>
                <input value={value} onChange={e => setValue(e.target.value)} />
                <button onClick={() => onUpdate(value)}>Update</button>
            </InnerContainer>
        </Container>
    )
}

export default UpdateModal
