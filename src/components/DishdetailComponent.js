import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';

//Presentational Component

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
                    <p>{comments.comment}</p>
                    <p>--{comments.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comments.date)))}</p>
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
                <div class="container">
                    <div className="row">
                        {this.renderDish(DISH)}
                        {this.renderComments(DISH.comments)}
                    </div>
                </div>
            );
        else
            return (
                <div></div>
            );
    }
}

export default Dishdetail