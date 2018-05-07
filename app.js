var React = require('react');
var ReactDOM = require('react-dom');
var ComposantB = require('./composantB');
var ComposantC = require('./composantC');

class ComposantA extends React.Component {

  constructor(){
    super()
  }


  render() {

    var bonjour = {
      color:"red",
      fontSize: "40px"
    }

     return (
       <div>
         <h1 style={bonjour}>Bonjour</h1>
         <ComposantB/>
         <ComposantC/>
       </div>
     )
   };
}

module.exports = ComposantA;
