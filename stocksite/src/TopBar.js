import './TopBar.css';
import React from "react";
import { Badge, Row } from 'reactstrap';

class TopBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
          }
    }

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