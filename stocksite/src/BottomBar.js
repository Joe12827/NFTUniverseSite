import './BottomBar.css';
import React from "react";
import { Badge } from 'reactstrap';

class BottomBar extends React.Component {
    render() {
        return (
            <div className="BottomBar">
                Created By Joe Wesnofske
                <Badge href="https://github.com/Joe12827/stocksite">
                    @Github
                </Badge>
            </div>
        )
    }
}

export default BottomBar;