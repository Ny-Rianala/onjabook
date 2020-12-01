import React from  "react";
import styled from 'styled-components';


const FormStyles = styled.form`
	display: grid;
	grid-template-columns: 300px;
	gap: 10px;
	input,
	select,
	textarea {
		height: 30px;
        background: grey;
		border: none;
		padding: 0 1rem;
		border-radius: 5px;
	}
	input::placeholder {
        color: white;
		opacity: 1;
    }
    button {
        padding-top: 5px;
        padding-left: 5px;
        padding-bottom: 5px;
        padding-right: 5px;
        background: blue;
        border: none;
        width: 30%;
        height: 135%;
    }
`;


function UserName() {
    return (
        <>
           <FormStyles>
                <span>Username</span>
                <input
                        placeholder="type your username"
                        required
                        onChange={e => setTitle(e.currentTarget.value)}
                    />
                    <span>Image url</span>
                    <input
                        placeholder="image url"
                        required
                        onChange={e => setTitle(e.currentTarget.value)}
                    />
                    <button>Save</button>
            </FormStyles>
        </>
    )
}





export default UserName;