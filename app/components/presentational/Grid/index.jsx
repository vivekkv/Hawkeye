import React from 'react';
import uuid from 'node-uuid';
import Styles from './Styles.css';

let onChange = null;

export default class Grid extends React.Component {

    constructor() {
        super();
        this.state = { id: uuid.v1() };
        this.bindGrid = this.bindGrid.bind(this);
    }


    componentDidMount() {

        this.bindGrid();
    }

    componentDidUpdate() {

        var grid = $("#" + this.state.id).data("kendoGrid");
        grid.dataSource.data(this.props.gridOptions.dataSource.data);
        grid.refresh();
    }

    bindGrid() {


        $("#" + this.state.id).kendoGrid({
            'toolbar': this.props.gridOptions.toolbar,
            'excel': this.props.gridOptions.excel,
            'columns': this.props.gridOptions.columns,
            'dataSource': this.props.gridOptions.dataSource,
            'groupable': this.props.gridOptions.groupable,
            'sortable': this.props.gridOptions.sortable,
            'pageable': this.props.gridOptions.pageable,
            'filterable': this.props.gridOptions.filterable,
            'selectable': this.props.gridOptions.selectable,
            'change': this.change
        });
    
    }

    change(e) {

        e.preventDefault()
        let dataItem = this.dataItem(this.select());

        if (dataItem) {

            onChange(dataItem);
        }
    }

    render() {

        onChange = this.props.gridOptions.onChange;

        return (<div className={Styles.wrapper}>
            <div id={this.state.id} />
        </div>
        );
    }
}