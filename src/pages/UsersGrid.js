import React, { Component } from "react";
import Header from "../components/Header";
import Input from "../components/Input";
import { StyledLink } from "../components/StyledButton";
import Row from "../components/Row";
import Spinner from "../components/LoadingSpinner";
import Message from "../components/Message";
import Modal from "../components/Modal";

class UsersGrid extends Component {
    render() {
        const {
            users,
            isLoading,
            hasMoreToLoad,
            handleSearch,
            searchValue,
            isModalOpen,
            toggleModal,
            selectedUser,
            nationalities
        } = this.props;

        const selectedNationalities = Object.keys(nationalities).filter((key) => nationalities[key]);

        return (
            <React.Fragment>
                <Header>
                    <Input placeholder="Search users by name and surname" onChange={handleSearch}></Input>
                    <StyledLink to="settings">Settings</StyledLink>
                </Header>

                {
                    users
                        .filter(user => {
                            return (
                                // Filter users that are from selected nationalities
                                selectedNationalities.indexOf(user.nat.toLowerCase()) >= 0
                                &&
                                // Filter users matching the search value
                                `${user.name.first} ${user.name.last}`.indexOf(searchValue) >= 0
                            )
                        })
                        // Generate user rows
                        .map(user => <Row key={user.login.uuid} user={user} toggleModal={toggleModal} />)
                }

                {isLoading ? <Spinner /> : ""}
                {!hasMoreToLoad ? <Message>END OF USERS CATALOG</Message> : ""}
                {isModalOpen ? <Modal user={selectedUser} toggleModal={toggleModal}></Modal> : ""}
            </React.Fragment>
        )
    }
}

export default UsersGrid;