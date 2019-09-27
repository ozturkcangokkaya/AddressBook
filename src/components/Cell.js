import styled from "styled-components";

const Cell = styled.div`
    flex: 1 0 0;
    display: flex;
    word-break: break-all;

    &:not(:last-child){
        margin-right: 10px;
    }
`;

export default Cell;