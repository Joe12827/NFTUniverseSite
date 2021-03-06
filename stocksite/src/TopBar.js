import './TopBar.css';
import React from "react";
import { Badge } from 'reactstrap';

class TopBar extends React.Component {

    render() {
        return (
            <div className="TopBar">
                Created By Joe Wesnofske
                <Badge href="https://github.com/Joe12827/stocksite">
                    @Github
                </Badge>
            </div>
        )
    }
}

export default TopBar;