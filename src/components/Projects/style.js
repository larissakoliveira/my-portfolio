import styled from "styled-components"

export const MainSection = styled.section`
    width: 100%;
    height: auto;
    background-color: #000000;
    display: flex;
    flex-direction: column;

    .subtitle {
        text-align: center;
        color: purple;
    }

    .projects {
        font-size: 2rem;
        text-align: center;
    }
`

export const DivProjects = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 20px;

    div {
        display: flex;
        flex-direction: column;
        padding: 0 15px;
        max-width: 500px;
    }

    h2 {
        text-align: center;
    }
`