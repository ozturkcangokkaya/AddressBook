import React, { Component } from 'react';
import { Router } from "@reach/router";
import debounce from "lodash.debounce";
import getUsers from "./helpers/getUsers";
import Main from "./components/Main";
import UsersGrid from "./pages/UsersGrid";
import Settings from "./pages/Settings";

class App extends Component {
    constructor() {
        super();
        this.batchSize = 50;
        this.maxUsers = 1000;
    }

    state = {
        users: [],
        selectedUser: "",
        searchValue: "",
        hasMoreToLoad: true,
        isLoading: false,
        isModalOpen: false,
        nationalities: {
            "ch": true,
            "es": true,
            "fr": true,
            "gb": true
        }
    }

    componentDidMount() {
        this.getNextBatch();

        window.addEventListener("scroll", this.handleScroll);
    }

    toggleNationality = (nation) => {
        const { nationalities } = this.state;
        nationalities[nation] = !nationalities[nation];

        this.setState({
            nationalities
        })
    }

    getNextBatch = () => {
        this.setState({ isLoading: true })

        const {
            maxUsers,
            batchSize,
            state: {
                users,
                nationalities
            }
        } = this;

        const selectedNationalities = Object.keys(nationalities).filter((key) => nationalities[key]);

        getUsers(selectedNationalities, batchSize)
            .then(newBatch => {
                this.setState({
                    users: [...users, ...newBatch],
                    isLoading: false,
                    hasMoreToLoad: (users.length < (maxUsers - batchSize))
                })
            })
            .catch((err) => {
                console.error(err.message);

                this.setState({
                    isLoading: false,
                });
            });
    }

    toggleModal = (user) => {
        document.body.classList.toggle("modal-open");

        this.setState({
            selectedUser: user,
            isModalOpen: !this.state.isModalOpen
        })
    };

    handleSearch = (e) => this.setState({ searchValue: e.target.value });

    handleScroll = debounce(() => {
        const endOfScroll = window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight

        const {
            getNextBatch,
            state: {
                isLoading,
                hasMoreToLoad
            }
        } = this;

        if (isLoading || !hasMoreToLoad) return;

        if (endOfScroll) getNextBatch();
    }, 100);

    render() {
        const {
            handleSearch,
            toggleModal,
            toggleNationality,
            state: {
                users,
                isLoading,
                hasMoreToLoad,
                isModalOpen,
                searchValue,
                selectedUser,
                nationalities
            }
        } = this;

        return (
            <React.Fragment>
                <Main>
                    <Router>
                        <UsersGrid
                            path="/"
                            users={users}
                            nationalities={nationalities}
                            isLoading={isLoading}
                            hasMoreToLoad={hasMoreToLoad}
                            isModalOpen={isModalOpen}
                            toggleModal={toggleModal}
                            selectedUser={selectedUser}
                            searchValue={searchValue}
                            handleSearch={handleSearch}
                        />

                        <Settings
                            path="settings"
                            nationalities={nationalities}
                            toggleNationality={toggleNationality}
                        />
                    </Router>
                </Main >
            </React.Fragment>
        );
    }
}

export default App;
