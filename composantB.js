
var React = require('react');

class ComposantB extends React.Component {

  constructor(){
    super()
  }

  render() {

    var corps ={
      color:"purple",
      fontSize: "25px"
    }

     return (
       <div>
         <h1 style={corps}>Tout le monde !</h1>
         </div>
       );
   };
}

module.exports = ComposantB;
