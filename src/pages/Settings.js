import React, { Component } from "react";
import Header from "../components/Header";
import { StyledLink } from "../components/StyledButton";
import Checkbox from "../components/Checkbox";

class Settings extends Component {
    render() {
        const {
            nationalities,
            toggleNationality
        } = this.props;

        return (
            <React.Fragment>
                <Header>
                    <StyledLink to="/">Home</StyledLink>
                </Header>

                <form>
                    <h2>Select nationalities to fetch users from</h2>

                    {Object.keys(nationalities).map((nation) => (
                        <Checkbox
                            key={nation}
                            nation={nation}
                            isChecked={nationalities[nation]}
                            toggleNationality={toggleNationality}
                        ></Checkbox>
                    ))}
                </form>
            </React.Fragment>
        );
    }
}

export default Settings;