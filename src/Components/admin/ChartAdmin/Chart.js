import React, { Component } from 'react';
import ChartAdmin from "./ChartAdmin";
import ChartAdmin2 from "./ChartAdmin2";

export default class Chart extends Component {
    render() {
        return (
            <div className="chart">
                <ChartAdmin/>
                <ChartAdmin2/>
            </div>
        )
    }
}
