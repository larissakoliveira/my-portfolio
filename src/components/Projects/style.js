import styled from "styled-components"

export const MainSection = styled.section`
    width: 100%;
    height: auto;
    background-color: #000000;
    display: flex;
    flex-direction: column;

    span {
        color: #1d4e89;
    }
    .subtitle {
        text-align: center;
        color: white;
        font-size: 1.4rem;
        padding: 25px;
    }

    .projects {
        font-size: 2rem;
        text-align: center;
    }
`

export const DivProfessionalWork = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 24px;
    margin-bottom: 32px;
    padding: 0 20px;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        max-width: 500px;
        flex: 1;
        min-width: 280px;
        background-color: #0d1117;
    }

    .card-title {
        color: #fff;
        font-size: 1.3rem;
        text-align: center;
        margin-bottom: 8px;
        width: 100%;
    }

    .role {
        color: #8b949e;
        font-size: 0.95rem;
        text-align: center;
        margin-bottom: 12px;
    }

    p {
        text-align: center;
        font-size: 0.95rem;
        line-height: 1.5;
        color: #c9d1d9;
        width: 100%;
    }

    & > div > div:last-child {
        margin-top: auto;
        padding-top: 16px;
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

        a, h2 {
            color: #fff;
            font-size: 1.3rem;
            text-align: center;
        }

    p {
        text-align: center;
        font-size: 1rem;
    }

    video, img {
        min-width: 300px;
        width: 100%;
    }

`