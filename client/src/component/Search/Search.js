import React, { Fragment } from 'react'
import useInputHook from '../Hooks/useInputHook'

import {InputGroup, FormControl, Button} from 'react-bootstrap';


export const Search = () => {

    //const [value, handleChange, reset] = useInputHook()
    return (
        <Fragment>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <InputGroup.PrePend>
                    <Button variant="outline-secondary">Search</Button>
                </InputGroup.PrePend>
            </InputGroup>
        </Fragment>
    )
}
