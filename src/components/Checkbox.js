import React, { Component } from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
    padding: 20px;
    background: #f9f9f9;
    display: flex;
    align-items: center;

    &:not(:last-child){
        margin-bottom: 5px;
    }

    input {
        margin-right: 20px;
    }
`;

class Checkbox extends Component {
    render() {
        const {
            nation,
            toggleNationality,
            isChecked
        } = this.props;

        return (
            <StyledLabel>
                <input
                    type="checkbox"
                    value={nation}
                    defaultChecked={isChecked}
                    onChange={() => toggleNationality(nation)}
                />
                {nation.toUpperCase()}
            </StyledLabel>
        )
    }
}

export default Checkbox;