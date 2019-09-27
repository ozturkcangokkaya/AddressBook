import styled, { css } from "styled-components";
import { Link } from "@reach/router";

const styles = css`
    margin-left: auto;
    padding: 15px 20px;
    background: #007bff;
    border-radius: 5px;
    border: 0;
    font-size: 1rem;
    text-decoration: none;
    color: #fff;
    cursor: pointer;
`

export const StyledLink = styled(Link)`
    ${styles}
`;

export const StyledButton = styled.button`
    ${styles}
`;