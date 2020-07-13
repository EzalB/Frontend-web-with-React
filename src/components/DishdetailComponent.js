import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';

//Presentational Component


function RenderDish({ dish }) {
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

}

function RenderComments({ comments }) {
    const comment = comments.map((comments) => {
        return (
            <ul key={comments.id} className="list-unstyled">
                <div>
                    <p>{comments.comment}</p>
                    <p>--{comments.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comments.date)))}</p>
                </div>
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

const DishDetail = (props) => {

    const DISH = props.dish;
    if (DISH != null)
        return (
            <div class="container">
                <div className="row">
                    <RenderDish dish={DISH} />
                    <RenderComments comments={DISH.comments} />
                </div>
            </div>
        );
    else
        return (
            <div></div>
        );
}

export default DishDetail