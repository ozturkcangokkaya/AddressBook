import React, { Component } from "react";
import styled from "styled-components";
import Cell from "./Cell";
import Thumbnail from "./Thumbnail";
import { StyledButton } from "./StyledButton";

const StyledRow = styled.div`
    padding: 20px;
    background: #f9f9f9;
    border-radius: 5px;
    display: flex;
    align-items: center;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);

    &:not(:last-child){
        margin-bottom: 10px;
    }
`;

class Row extends Component {
    render() {
        const {
            toggleModal,
            user,
            user: {
                email,
                name: {
                    first,
                    last
                },
                login: { username },
                picture: { thumbnail: profilePictureThumbnail }
            }
        } = this.props;

        return (
            <StyledRow>
                <Cell>
                    <Thumbnail src={profilePictureThumbnail} alt={`${first} ${last} profile picture`} />
                </Cell>
                <Cell>{first}</Cell>
                <Cell>{last}</Cell>
                <Cell>{username}</Cell>
                <Cell>{email}</Cell>
                <Cell>
                    <StyledButton onClick={() => toggleModal(user)}>Details</StyledButton>
                </Cell>
            </StyledRow>
        )
    }
}

export default Row;