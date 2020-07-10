import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';

class Dishdetail extends Component {
    constructor(props) {
        super(props);

    }

    renderDish(dish) {
        if (dish != null)
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card key={dish.id}>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        else
            return (
                <div></div>
            );
    }

    renderComments(comments) {

        const comment = comments.map((comments) => {
            return (
                <ul key={comments.id} className="list-unstyled">
                    <li>{comments.comment}</li>
                    <li>--{comments.author}, {new Date(comments.date).toDateString()}</li>
                </ul>
            );
        });

        if (comments != null) {
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {comment}
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    render() {
        const DISH = this.props.dish;

        if (DISH != null)
            return (
                <div className="row">
                    {this.renderDish(DISH)}
                    {this.renderComments(DISH.comments)}
                </div>
            );
        else
            return (
                <div></div>
            );
    }
}

export default Dishdetail