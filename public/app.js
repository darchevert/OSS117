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
var beurrerbiscotte = new Audio('sounds/beurrerbiscotte.mp3');
var bienvenueaucaire = new Audio('sounds/bienvenueaucaire.mp3');
var Bramard = new Audio('sounds/Bramard.mp3');
var bruitblanc = new Audio('sounds/bruitblanc.mp3');
var Camesertarien = new Audio('sounds/Camesertarien.mp3');
var cestdrole = new Audio('sounds/cestdrole.mp3');
var cesttoiarretez = new Audio('sounds/cesttoiarretez.mp3');
var cestuneastuce = new Audio('sounds/cestuneastuce.mp3');
var combienenfants2 = new Audio('sounds/combienenfants2.mp3');
var commentestquoi = new Audio('sounds/commentestquoi.mp3');
var confiancefemme = new Audio('sounds/confiancefemme.mp3');
var coupdepoliche = new Audio('sounds/coupdepoliche.mp3');
var fermersagueule = new Audio('sounds/fermersagueule.mp3');
var gratin = new Audio('sounds/gratin.mp3');
var imam = new Audio('sounds/imam.mp3');
var inchallah = new Audio('sounds/inchallah.mp3');
var jack = new Audio('sounds/jack.mp3');
var jaimehuile = new Audio('sounds/jaimehuile.mp3');
var jaimemebattre = new Audio('sounds/jaimemebattre.mp3');
var jueraumalin = new Audio('sounds/jueraumalin.mp3');


const punchlines = [
  {
    id: 1,
    punchline: "OSS117! Pour vous servir!",
    name: "Lucien Bramard / OSS117",
    photo: "fonts/jean_dujardin.jpg",
    sound: "oss117pourvousservir"
  },
  {
    id: 2,
    punchline: "Fais moi l'amour... Pas envie!",
    name: "Princesse Al Tarouk",
    photo: "fonts/aure_atika.jpg",
    sound: "faismoilamourpasenvie"
  },
  {
    id: 3,
    punchline: "Viens crotale! Quelques heures!",
    name: "Princesse Al Tarouk",
    photo: "fonts/aure_atika.jpg",
    sound: "vienscrotalequelquesheures"
  },
  {
    id: 4,
    punchline: "Comment est votre blanquette?",
    name: "Lucien Bramard / OSS117",
    photo: "fonts/jean_dujardin.jpg",
    sound: "commentblanquettebonne"
  },
  {
    id: 5,
    punchline: "Hareng pomme à l'huile",
    name: "Lucien Bramard / OSS117",
    photo: "fonts/jean_dujardin.jpg",
    sound: "harengramequin"
  },
  {
    id: 6,
    punchline: "C'est cocasse!",
    name: "Lucien Bramard / OSS117",
    photo: "fonts/jean_dujardin.jpg",
    sound: "cocasse"
  },
  {
    id: 7,
    punchline: "J'aime les panoramas",
    name: "Lucien Bramard / OSS117",
    photo: "fonts/jean_dujardin.jpg",
    sound: "jaimelespanoramas"
  },
  {
    id: 8,
    punchline: "Des millions?!",
    name: "Lucien Bramard / OSS117",
    photo: "fonts/jean_dujardin.jpg",
    sound: "desmillions"
  },
  {
    id: 9,
    punchline: "Qui êtes-vous?!",
    name: "Lucien Bramard / OSS117",
    photo: "fonts/jean_dujardin.jpg",
    sound: "quietesvous"
  },
  {
    id: 10,
    punchline: "C'est Monsieur René Coty",
    name: "Lucien Bramard / OSS117",
    photo: "fonts/jean_dujardin.jpg",
    sound: "renecoty"
  },
  {
    id: 11,
    punchline: "J'aime me beurrer la biscotte",
    name: "Lucien Bramard / OSS117",
    photo: "fonts/jean_dujardin.jpg",
    sound: "beurrerbiscotte"
  },
  {
    id: 12,
    punchline: "Bienvenue au Caire...",
    name: "Gerhard Moeller",
    photo: "fonts/richard_sammel.jpg",
    sound: "bienvenueaucaire"
  },
  {
    id: 13,
    punchline: "J'ai réservé au nom de Bramard!",
    name: "Lucien Bramard / OSS117",
    photo: "fonts/jean_dujardin.jpg",
    sound: "Bramard"
  },
  {
    id: 14,
    punchline: "J'aime le bruit blanc de l'eau",
    name: "Lucien Bramard / OSS117",
    photo: "fonts/jean_dujardin.jpg",
    sound: "bruitblanc"
  },
  {
    id: 15,
    punchline: "Ca me sert à rien...",
    name: "Lucien Bramard / OSS117",
    photo: "fonts/jean_dujardin.jpg",
    sound: "Camesertarien"
  },
  {
    id: 16,
    punchline: "C'est drôle...",
    name: "Lucien Bramard / OSS117",
    photo: "fonts/jean_dujardin.jpg",
    sound: "cestdrole"
  },
  {
    id: 17,
    punchline: "C'est toi arrêtez!!",
    name: "Lucien Bramard / OSS117",
    photo: "fonts/jean_dujardin.jpg",
    sound: "cesttoiarretez"
  },
  {
    id: 18,
    punchline: "C'est une astuce!",
    name: "Lucien Bramard / OSS117",
    photo: "fonts/jean_dujardin.jpg",
    sound: "cestuneastuce"
  },
  {
    id: 19,
    punchline: "Combien as-tu d'enfants Slimane?",
    name: "Lucien Bramard / OSS117",
    photo: "fonts/jean_dujardin.jpg",
    sound: "combienenfants2"
  },
  {
    id: 20,
    punchline: "Comment est quoi?!",
    name: "Lucien Bramard / OSS117",
    photo: "fonts/jean_dujardin.jpg",
    sound: "commentestquoi"
  },
  {
    id: 21,
    punchline: "On ne devrait jamais faire confiance à une femme",
    name: "Lucien Bramard / OSS117",
    photo: "fonts/jean_dujardin.jpg",
    sound: "confiancefemme"
  },
  {
    id: 22,
    punchline: "Je vous mettrai un petit coup de poliche",
    name: "Lucien Bramard / OSS117",
    photo: "fonts/jean_dujardin.jpg",
    sound: "coupdepoliche"
  },
  {
    id: 23,
    punchline: "Mais il va la fermer sa gueule?!",
    name: "Lucien Bramard / OSS117",
    photo: "fonts/jean_dujardin.jpg",
    sound: "fermersagueule"
  },
  {
    id: 24,
    punchline: "Et non pas le gratin de pommes de terres...",
    name: "Lucien Bramard / OSS117",
    photo: "fonts/jean_dujardin.jpg",
    sound: "gratin"
  },
  {
    id: 25,
    punchline: "L'imam...",
    name: "Larmina El Akmar Betouche",
    photo: "fonts/berenice_bejo.jpg",
    sound: "imam"
  },
  {
    id: 26,
    punchline: "Inch'Allah!",
    name: "Lucien Bramard / OSS117",
    photo: "fonts/jean_dujardin.jpg",
    sound: "inchallah"
  },
  {
    id: 27,
    punchline: "Jack! Jack...",
    name: "Lucien Bramard / OSS117",
    photo: "fonts/jean_dujardin.jpg",
    sound: "jack"
  },
  {
    id: 28,
    punchline: "J'aime quand on m'enduit d'huile",
    name: "Lucien Bramard / OSS117",
    photo: "fonts/jean_dujardin.jpg",
    sound: "jaimehuile"
  },
  {
    id: 29,
    punchline: "J'aime me battre",
    name: "Lucien Bramard / OSS117",
    photo: "fonts/jean_dujardin.jpg",
    sound: "jaimemebattre"
  },
  {
    id: 30,
    punchline: "Jouer au malin",
    name: "Raymond Pelletier",
    photo: "fonts/francois_damiens.jpg",
    sound: "jueraumalin"
  }
]

function searchingFor(term){
  return function(x){
    return x.punchline.toLowerCase().includes(term.toLowerCase()) || !term;
  }
}

class App extends React.Component {

  constructor(props) {
    super(props);
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
    this.beurrerbiscotte = this.beurrerbiscotte.bind(this);
    this.bienvenueaucaire = this.bienvenueaucaire.bind(this);
    this.Bramard = this.Bramard.bind(this);
    this.bruitblanc = this.bruitblanc.bind(this);
    this.Camesertarien = this.Camesertarien.bind(this);
    this.cesttoiarretez = this.cesttoiarretez.bind(this);
    this.cestdrole = this.cestdrole.bind(this);
    this.cestuneastuce = this.cestuneastuce.bind(this);
    this.combienenfants2 = this.combienenfants2.bind(this);
    this.commentestquoi = this.commentestquoi.bind(this);
    this.confiancefemme = this.confiancefemme.bind(this);
    this.coupdepoliche = this.coupdepoliche.bind(this);
    this.fermersagueule = this.fermersagueule.bind(this);
    this.gratin = this.gratin.bind(this);
    this.imam = this.imam.bind(this);
    this.inchallah = this.inchallah.bind(this);
    this.jack = this.jack.bind(this);
    this.jaimehuile = this.jaimehuile.bind(this);
    this.jaimemebattre = this.jaimemebattre.bind(this);
    this.jueraumalin = this.jueraumalin.bind(this);

    this.state= {
      punchlines: punchlines,
      term: '',
    }

    this.searchHandler = this.searchHandler.bind(this);
  }

  searchHandler(event){
    this.setState({ term: event.target.value })
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
  beurrerbiscotte() {
      beurrerbiscotte.play();
      }
  bienvenueaucaire() {
      bienvenueaucaire.play();
      }
  Bramard() {
      Bramard.play();
      }
  bruitblanc() {
      bruitblanc.play();
      }
  Camesertarien() {
      Camesertarien.play();
      }
  cesttoiarretez() {
      cesttoiarretez.play();
      }
  cestdrole() {
          cestdrole.play();
          }
  cestuneastuce() {
      cestuneastuce.play();
      }
  combienenfants2() {
      combienenfants2.play();
      }
  commentestquoi() {
      commentestquoi.play();
      }
  confiancefemme() {
      confiancefemme.play();
      }
  coupdepoliche() {
      coupdepoliche.play();
      }
  fermersagueule() {
      fermersagueule.play();
      }
  gratin() {
      gratin.play();
      }
  imam() {
      imam.play();
      }
  inchallah() {
      inchallah.play();
      }
  jack() {
      jack.play();
      }
  jaimehuile() {
      jaimehuile.play();
      }
  jaimemebattre() {
      jaimemebattre.play();
      }
  jueraumalin() {
      jueraumalin.play();
      }



  render() {
    const {term, punchlines} = this.state;
    return (
      <div>
        <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
            <form>
              <div className="input-field">
                <input id="search" type="search" required onChange={this.searchHandler} value={term}/>
                <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                <i className="material-icons">close</i>
              </div>
            </form>
          </div>
        </nav>
        </div>
        {
          punchlines.filter(searchingFor(term)).map( punch =>

          <div className="row" key={punch.id} className="inlineBlock">
            <ul className="collection ">
             <li className="collection-item avatar blue lighten-5 " >
              <img alt="" src= {punch.photo} className="circle large"/>
               <a className="btn-floating waves-effect waves-light red right" onClick={this[punch.sound]}><i className="material-icons">play_arrow</i></a>
               <span className="title"> {punch.punchline} </span>
               <p> {punch.name} </p>
             </li>
            </ul>
          </div>
        )}
    </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('container')
);
