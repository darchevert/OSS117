var React = require("react");
var {Button, Col, Card, CardImg, CardTitle, CardText, CardBody } = require('reactstrap');
var FontAwesomeIcon = require('@fortawesome/react-fontawesome');
var faHeart   = require('@fortawesome/fontawesome-free-solid/faHeart');

class Movie extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {like : this.props.isLike};
  }

  handleClick(){
    var isLike = !this.state.like;
    this.setState(
        {like : isLike}
    );
    if(isLike == true) {
      fetch('./mymovies', {
        method: 'POST',
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body: 'poster_path='+this.props.poster_path+'&title='+this.props.title+'&overview='+this.props.overview+'&idMovieDB='+this.props.idMovieDB
      }).then(function(response) {
          return response.json();
      })
      .then(function(data) {
          console.log(data);
      }).catch(function(error) {
          console.log('Request failed', error)
      });
    } else {
      fetch('./mymovies/'+this.props.idMovieDB, {
        method: 'DELETE'
      });
    }
    console.log(isLike);
  }

  render() {
    var colorHeart = {
      cursor: "Pointer"
    };

    if(this.state.like == true) {
      colorHeart = {
        color: "#FF5B53",
        cursor: "Pointer"
      }
    }

    var isDisplay;
    if(this.props.viewOnlyLike == true && this.state.like == false){
      isDisplay = {
        display : "none"
      }
    }
    return(
      <Col style={isDisplay} xs="12" sm="6" md="4" lg="3">
        <Card>
          <CardImg top width="100%" src={"https://image.tmdb.org/t/p/w500/"+this.props.poster_path} alt="Card image cap" />
          <CardBody>
            <FontAwesomeIcon onClick={this.handleClick} style={colorHeart} icon={faHeart} />
            <CardTitle>{this.props.title}</CardTitle>
            <CardText>{this.props.overview}</CardText>

          </CardBody>
        </Card>
      </Col>
    );

  }
}

module.exports = Movie;
