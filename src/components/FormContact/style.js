import styled from "styled-components"

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width:55%;
    background-color: #e5e5e5;
    margin: auto;
    border-radius: 10%;
    padding-bottom: 5px;

    header {    
        margin: 20px 100px;
        text-align: center;
        color: black;
        font-size: 1.3em;
    }

    textarea {
        min-height: 150px;
        width: 70%;
        margin: auto;
        padding: 5px;
    }

    label {
        padding: 10px;
        color: #5A48AC;
        font-size: 1.3em;
        font-family: Fira Code monospace;
        display: inline-block;
        text-align: center;
    }

    input {
        height: 25px;
        width: 70%;
        margin: auto;
        padding: 2px;
    }

    textarea, input::placeholder {
        font-family: Fira Code monospace;
        font-size: 1rem;
    }
    `