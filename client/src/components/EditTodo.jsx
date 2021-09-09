import React, { Fragment } from 'react'
import styled from 'styled-components'

const ModalContainer = styled.div`
    /* display: none; */
    background-color: red;
    position: absolute;
    left: -100%;
    z-index: 2;
    width: 250px;
    height: 100px;
    padding: 2px;
`

const EditTodo = ({todo}) => {
    return (
        <Fragment>

            <button>edit</button>
            <ModalContainer>
                <input type="text" />
                <button>save edit</button>
            </ModalContainer>
        </Fragment>
    )
}

export default EditTodo
