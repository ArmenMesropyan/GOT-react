import React, {Component} from 'react';
import {Table, Card, CardBody, CardText, CardTitle} from 'reactstrap';

const Field = ({item, label, title, className}) => (
    <tr className={className}>
        <th scope="row">{title}</th>
        <td>{item[label] || 'no data.'}</td>
    </tr>
);

class ItemDetail extends Component {
    
    render() {
        const {item, renderErrorMsg, className} = this.props;
        if(!item) return renderErrorMsg;
        const {name} = item;

        return (
            <Card tag="ul" className={className}>
                <CardBody tag="li">
                    <CardTitle tag="h3">
                        {name || 'no data.'}
                    </CardTitle>
                    <CardText tag="div">
                        <Table>
                            <thead className="visually-hidden">
                                <tr>
                                    <th>{name || 'no data.'}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {React.Children.map(this.props.children, (child) => {
                                    return React.cloneElement(child, {item});
                                })}
                            </tbody>
                        </Table>
                    </CardText>
                </CardBody>
            </Card>
        )
    }
};

export {ItemDetail, Field};