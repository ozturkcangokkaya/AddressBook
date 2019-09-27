import React, { Component } from "react";
import styled from "styled-components";
import Thumbnail from "./Thumbnail";
import StyledList from "./StyledList";

const StyledModal = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 20px;
    background: rgba(0,0,0,.8);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
`;

const ModalInner = styled.div`
    width: 100%;
    max-width: 600px;
    height: 100%;
    padding: 20px;
    border-radius: 5px;
    background: #fff;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    overflow: auto;
`;

const ModalClose = styled.button`
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 50%;
    background: #f9f9f9;
    position: absolute;
    right: 20px;
    top: 20px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    cursor: pointer;

    &::before,
    &::after {
        background: #000;
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
    } 

    &::before {
        width: 1px;
        height: 50%;
    }

    &::after {
        width: 50%;
        height: 1px;
    }
`;

class Modal extends Component {
    render() {
        const {
            toggleModal,
            user: {
                email,
                phone,
                cell,
                name: {
                    first,
                    last
                },
                location: {
                    street,
                    city,
                    state,
                    postcode,
                },
                login: { username },
                picture: { large: profilePictureLarge },
            }
        } = this.props;

        return (
            <StyledModal>
                <ModalInner>
                    <ModalClose aria-label="Close modal" onClick={() => toggleModal("")} />

                    <Thumbnail src={profilePictureLarge} alt={`${first} ${last} profile picture`} />
                    <h2>{first} {last}</h2>
                    <StyledList>
                        <li>
                            <span><b>username:</b></span>
                            {username}
                        </li>
                        <li>
                            <span><b>email:</b></span>
                            {email}
                        </li>
                        <li>
                            <span><b>phone:</b></span>
                            {phone}
                        </li>
                        <li>
                            <span><b>cell:</b></span>
                            {cell}
                        </li>
                        <li>
                            <span><b>state:</b></span>
                            {state}
                        </li>
                        <li>
                            <span><b>city:</b></span>
                            {city}
                        </li>
                        <li>
                            <span><b>street:</b></span>
                            {street}
                        </li>

                        <li>
                            <span><b>postcode:</b></span>
                            {postcode}
                        </li>
                    </StyledList>
                </ModalInner>
            </StyledModal>
        )
    }
}

export default Modal;