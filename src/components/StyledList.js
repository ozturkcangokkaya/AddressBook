import styled from "styled-components";

const StyledList = styled.ul`
    width: 100%;
    margin-top: 0;
    padding-left: 0;
    list-style: none;

    > li {
        padding: 10px;
        display: flex;
        justify-content: space-between;
        text-align: left;

        &:not(:last-child){
            border-bottom: 1px solid #eee;
        }

        span {
            width: 30%;
            flex-shrink: 0;
        }
    }
`

export default StyledList;