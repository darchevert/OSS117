var React = require('react');

class Fav extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {fav : this.props.isFav};
  }

  handleClick(){
    var isFav = !this.state.fav;
    this.setState(
        {fav : isFav}
    );
    if(isFav == true) {
      fetch('./myfav', {
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
      fetch('./myfav/'+this.props.idMovieDB, {
        method: 'DELETE'
      });
    }
    console.log(isFav);
  }
  render() {
    var colorStar = {
      cursor: "Pointer"
    };

    if(this.state.fav == true) {
      colorStar = {
        color: "##FF9800",
        cursor: "Pointer"
      }
    }

    var isDisplay;
    if(this.props.viewOnlyFav == true && this.state.fav == false){
      isDisplay = {
        display : "none"
      }
    }
    return (<div>


    </div>
  );
  }
}

module.exports = Fav;
