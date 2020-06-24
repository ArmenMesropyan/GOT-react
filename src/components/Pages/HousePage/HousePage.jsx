import React, {Component} from 'react';
import {ItemDetail, ItemList, Field, RowBlock} from '../../index';
import {GetService} from '../../../services';
import './HousePage.scss';

export default class HousePage extends Component {

    state = {
        currentHouse: null,
    }

    getService = new GetService();

    showHouse = (currentHouse) => {
        this.setState({currentHouse});
    }

    render() {
        const {currentHouse} = this.state;
        const houseList = (
            <ItemList showItem={this.showHouse} 
                      getData={this.getService.getAllHouses}
                      renderLabel={({name, region}) => `${name} (${region})`}/>
        );

        const houseItem = (
            <ItemDetail item={currentHouse}
                        className="house-list__item"
                        renderErrorMsg={
                            (
                                <span className="house-list__error error">Please select house</span>
                            )
                        }>
                          <Field label="name" title="Name" className="house-list__label house-list__label_name"/>
                          <Field label="region" title="Region" className="house-list__label house-list__label_region"/>
                          <Field label="coatOfArms" title="Coat Of Arms" className="house-list__label house-list__label_coatofarms"/>
            </ItemDetail>
        );

        return (
            <section className="house-list">
                <h2 className="visually-hidden">House List</h2>
                <RowBlock left={houseList} right={houseItem}/>
            </section>
        )
    }
}