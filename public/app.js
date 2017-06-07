var oss117pourvousservir = new Audio('sounds/oss117pourvousservir.mp3');
var commentblanquettebonne = new Audio('sounds/commentblanquettebonne.mp3');
var faismoilamourpasenvie = new Audio('sounds/faismoilamourpasenvie.mp3');
var vienscrotalequelquesheures = new Audio('sounds/vienscrotalequelquesheures.mp3');
var harengramequin = new Audio('sounds/harengramequin.mp3');
var cocasse = new Audio('sounds/cocasse.mp3');
var elleestbonne = new Audio('sounds/elleestbonne.mp3');
var desmillions = new Audio('sounds/desmillions.mp3');
var jaimelespanoramas = new Audio('sounds/jaimelespanoramas.mp3');
var quietesvous = new Audio('sounds/quietesvous.mp3');
var renecoty = new Audio('sounds/renecoty.mp3');



    
class App extends React.Component {

  constructor() {
    super();
    this.oss117pourvousservir = this.oss117pourvousservir.bind(this);
    this.commentblanquettebonne = this.commentblanquettebonne.bind(this);
    this.faismoilamourpasenvie = this.faismoilamourpasenvie.bind(this);
    this.vienscrotalequelquesheures = this.vienscrotalequelquesheures.bind(this);
    this.harengramequin = this.harengramequin.bind(this);
    this.cocasse = this.cocasse.bind(this);
    this.elleestbonne = this.elleestbonne.bind(this);
    this.desmillions = this.desmillions.bind(this);
    this.jaimelespanoramas = this.jaimelespanoramas.bind(this);
    this.quietesvous = this.quietesvous.bind(this);
    this.renecoty = this.renecoty.bind(this);
  }

  oss117pourvousservir() {
    oss117pourvousservir.play();
    }
  commentblanquettebonne() {
    commentblanquettebonne.play();
    }
  faismoilamourpasenvie() {
      faismoilamourpasenvie.play();
      }
  vienscrotalequelquesheures() {
      vienscrotalequelquesheures.play();
      }
  harengramequin() {
      harengramequin.play();
      }
  cocasse() {
      cocasse.play();
      }
  elleestbonne() {
      elleestbonne.play();
      }
  desmillions() {
      desmillions.play();
      }
  jaimelespanoramas() {
      jaimelespanoramas.play();
      }
  quietesvous() {
      quietesvous.play();
      }
  renecoty() {
      renecoty.play();
      }



  render() {
    return (
      <div>
       <nav>
        <div className="nav-wrapper">
          <form>
            <div className="input-field">
              <input id="search" type="search" required/>
              <label className="label-icon" htmlFor="search"><i className="material-icons" placeholder="mot clé">search</i></label>
              <i className="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
        <ul className="collection">
         <li className="collection-item avatar blue lighten-5">
          <img src="fonts/jean_dujardin.jpg" alt="" className="circle large"/>
           <a className="btn-floating btn-large waves-effect waves-light red right" onClick={this.oss117pourvousservir}><i className="material-icons">play_arrow</i></a>
           <span className="title">OSS117! Pour vous servir!</span>
           <p>Lucien Bramard<br/>
              Le Caire Nid despions
           </p>
         </li>
         <li className="collection-item avatar pink lighten-4">
          <img src="fonts/aure_atika.jpg" alt="" className="circle large"/>
           <a className="btn-floating btn-large waves-effect waves-light red right" onClick={this.faismoilamourpasenvie}><i className="material-icons">play_arrow</i></a>
           <span className="title">Fais moi lamour... Pas envie!</span>
           <p>Princesse Al Tarouk<br/>
              Le Caire Nid despions
           </p>
         </li>
         <li className="collection-item avatar pink lighten-4">
          <img src="fonts/aure_atika.jpg" alt="" className="circle large"/>
           <a className="btn-floating btn-large waves-effect waves-light red right" onClick={this.vienscrotalequelquesheures}><i className="material-icons">play_arrow</i></a>
           <span className="title">Viens crotale! Quelques heures!</span>
           <p>Princesse Al Tarouk<br/>
              Le Caire Nid despions
           </p>
         </li>
          <li className="collection-item avatar blue lighten-5">
           <img src="fonts/jean_dujardin.jpg" alt="" className="circle large"/>
            <a className="btn-floating btn-large waves-effect waves-light red right" onClick={this.commentblanquettebonne}><i className="material-icons">play_arrow</i></a>
            <span className="title">Comment est votre blanquette?</span>
            <p>Lucien Bramard<br/>
               Le Caire Nid despions
            </p>
          </li>
           <li className="collection-item avatar blue lighten-5">
            <img src="fonts/jean_dujardin.jpg" alt="" className="circle large"/>
             <a className="btn-floating btn-large waves-effect waves-light red right" onClick={this.harengramequin}><i className="material-icons">play_arrow</i></a>
             <span className="title">Hareng pomme à lhuile</span>
             <p>Lucien Bramard<br/>
                Le Caire Nid despions
             </p>
           </li>
           <li className="collection-item avatar blue lighten-5">
            <img src="fonts/jean_dujardin.jpg" alt="" className="circle large"/>
             <a className="btn-floating btn-large waves-effect waves-light red right" onClick={this.cocasse}><i className="material-icons">play_arrow</i></a>
             <span className="title">Cest cocasse!</span>
             <p>Lucien Bramard<br/>
                Le Caire Nid despions
             </p>
           </li>
           <li className="collection-item avatar blue lighten-5">
            <img src="fonts/jean_dujardin.jpg" alt="" className="circle large"/>
             <a className="btn-floating btn-large waves-effect waves-light red right" onClick={this.elleestbonne}><i className="material-icons">play_arrow</i></a>
             <span className="title">Elle est bonne...</span>
             <p>Lucien Bramard<br/>
                Le Caire Nid despions
             </p>
           </li>
           <li className="collection-item avatar blue lighten-5">
            <img src="fonts/jean_dujardin.jpg" alt="" className="circle large"/>
             <a className="btn-floating btn-large waves-effect waves-light red right" onClick={this.desmillions}><i className="material-icons">play_arrow</i></a>
             <span className="title">Des millions?!</span>
             <p>Lucien Bramard<br/>
                Le Caire Nid despions
             </p>
           </li>
           <li className="collection-item avatar blue lighten-5">
            <img src="fonts/jean_dujardin.jpg" alt="" className="circle large"/>
             <a className="btn-floating btn-large waves-effect waves-light red right" onClick={this.elleesdesmillionstbonne}><i className="material-icons">play_arrow</i></a>
             <span className="title">Des millions?!</span>
             <p>Lucien Bramard<br/>
                Le Caire Nid despions
             </p>
           </li>
           <li className="collection-item avatar blue lighten-5">
            <img src="fonts/jean_dujardin.jpg" alt="" className="circle large"/>
             <a className="btn-floating btn-large waves-effect waves-light red right" onClick={this.jaimelespanoramas}><i className="material-icons">play_arrow</i></a>
             <span className="title">Jaime les panoramas</span>
             <p>Lucien Bramard<br/>
                Le Caire Nid despions
             </p>
           </li>
           <li className="collection-item avatar blue lighten-5">
            <img src="fonts/jean_dujardin.jpg" alt="" className="circle large"/>
             <a className="btn-floating btn-large waves-effect waves-light red right" onClick={this.quietesvous}><i className="material-icons">play_arrow</i></a>
             <span className="title">Jaime les panoramas</span>
             <p>Lucien Bramard<br/>
                Le Caire Nid despions
             </p>
           </li>
           <li className="collection-item avatar blue lighten-5">
            <img src="fonts/jean_dujardin.jpg" alt="" className="circle large"/>
             <a className="btn-floating btn-large waves-effect waves-light red right" onClick={this.renecoty}><i className="material-icons">play_arrow</i></a>
             <span className="title">René Coty</span>
             <p>Lucien Bramard<br/>
                Le Caire Nid despions
             </p>
           </li>

         <li className="collection-item avatar pink lighten-5">
           <img src="fonts/berenice_bejo.jpg" alt="" className="circle"/>
           <a className="btn-floating btn-large waves-effect waves-light red right" onClick={this.handleClick}><i className="material-icons">play_arrow</i></a>
           <span className="title">Et si jétais myope?</span>
           <p>Larmina El Akmar Betouche<br/>
              Le Caire Nid despions
           </p>
         </li>
         <li className="collection-item avatar lime lighten-5">
           <img src="fonts/slimane.jpg" alt="" className="circle"/>
           <a className="btn-floating btn-large waves-effect waves-light red right" onClick={this.handleClick2}><i className="material-icons">play_arrow</i></a>
           <span className="title">Cest la SCEP Sidi</span>
           <p>Slimane<br/>
              Le Caire Nid despions
           </p>
         </li>
         <li className="collection-item avatar orange lighten-5">
           <img src="fonts/francois_damiens.jpg" alt="" className="circle"/>
           <a className="btn-floating btn-large waves-effect waves-light red right" onClick={this.handleClick2}><i className="material-icons">play_arrow</i></a>
           <span className="title">Triste Sire</span>
           <p>Raymond Pelletier<br/>
              Le Caire Nid despions
           </p>
         </li>
        </ul>
    </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('container')
);
