var React     = require('react');
var ReactDOM  = require('react-dom');


var oss117pourvousservir = new Audio('./sounds/oss117pourvousservir.mp3');
var commentblanquettebonne = new Audio('./sounds/commentblanquettebonne.mp3');
var faismoilamourpasenvie = new Audio('./sounds/faismoilamourpasenvie.mp3');
var vienscrotalequelquesheures = new Audio('./sounds/vienscrotalequelquesheures.mp3');
var harengramequin = new Audio('./sounds/harengramequin.mp3');
var cocasse = new Audio('./sounds/cocasse.mp3');
var elleestbonne = new Audio('./sounds/elleestbonne.mp3');
var desmillions = new Audio('./sounds/desmillions.mp3');
var jaimelespanoramas = new Audio('./sounds/jaimelespanoramas.mp3');
var quietesvous = new Audio('./sounds/quietesvous.mp3');
var renecoty = new Audio('./sounds/renecoty.mp3');
var beurrerbiscotte = new Audio('./sounds/beurrerbiscotte.mp3');
var bienvenueaucaire = new Audio('./sounds/bienvenueaucaire.mp3');
var Bramard = new Audio('./sounds/Bramard.mp3');
var bruitblanc = new Audio('./sounds/bruitblanc.mp3');
var Camesertarien = new Audio('./sounds/Camesertarien.mp3');
var cestdrole = new Audio('./sounds/cestdrole.mp3');
var cesttoiarretez = new Audio('./sounds/cesttoiarretez.mp3');
var cestuneastuce = new Audio('./sounds/cestuneastuce.mp3');
var combienenfants2 = new Audio('./sounds/combienenfants2.mp3');
var commentestquoi = new Audio('./sounds/commentestquoi.mp3');
var confiancefemme = new Audio('./sounds/confiancefemme.mp3');
var coupdepoliche = new Audio('./sounds/coupdepoliche.mp3');
var fermersagueule = new Audio('./sounds/fermersagueule.mp3');
var gratin = new Audio('./sounds/gratin.mp3');
var imam = new Audio('./sounds/imam.mp3');
var inchallah = new Audio('./sounds/inchallah.mp3');
var jack = new Audio('./sounds/jack.mp3');
var jaimehuile = new Audio('./sounds/jaimehuile.mp3');
var jaimemebattre = new Audio('./sounds/jaimemebattre.mp3');
var joueraumalin = new Audio('./sounds/joueraumalin.mp3');

var lachetraitre = new Audio('./sounds/lachetraitre.mp3');
var laisserfairelamour = new Audio('./sounds/laisserfairelamour.mp3');
var nainemyope = new Audio('./sounds/nainemyope.mp3');
var onvaboireunverre = new Audio('./sounds/onvaboireunverre.mp3');
var onvadirequecestmoi = new Audio('./sounds/onvadirequecestmoi.mp3');
var piquettejack = new Audio('./sounds/piquettejack.mp3');
var poissonniere = new Audio('./sounds/poissonniere.mp3');
var pouletbordel = new Audio('./sounds/pouletbordel.mp3');
var prendspouruncretin = new Audio('./sounds/prendspouruncretin.mp3');
var pudeurhonore = new Audio('./sounds/pudeurhonore.mp3');
var sagiraitdegrandir = new Audio('./sounds/sagiraitdegrandir.mp3');
var smockingenalpaga = new Audio('./sounds/smockingenalpaga.mp3');
var sovieteponge = new Audio('./sounds/sovieteponge.mp3');
var tesmauvais = new Audio('./sounds/tesmauvais.mp3');
var tintouin = new Audio('./sounds/tintouin.mp3');
var tresfrancaismerci = new Audio('./sounds/tresfrancaismerci.mp3');
var tristesir = new Audio('./sounds/tristesir.mp3');
var unesuze = new Audio('./sounds/unesuze.mp3');
var voulezmourirbramar = new Audio('./sounds/voulezmourirbramar.mp3');



const punchlines = [
  {
    id: 1,
    punchline: "OSS117! Pour vous servir!",
    name: "Lucien Bramard / OSS117",
    sound: "oss117pourvousservir",
    photo: "./images/jean_dujardin.jpg"
  },
  {
    id: 2,
    punchline: "Fais moi l'amour... Pas envie!",
    name: "Princesse Al Tarouk",
    photo: "./images/aure_atika.jpg",
    sound: "faismoilamourpasenvie"
  },
  {
    id: 3,
    punchline: "Viens crotale! Quelques heures!",
    name: "Princesse Al Tarouk",
    photo: "./images/aure_atika.jpg",
    sound: "vienscrotalequelquesheures"
  },
  {
    id: 4,
    punchline: "Comment est votre blanquette?",
    name: "Lucien Bramard / OSS117",
    photo: "./images/jean_dujardin.jpg",
    sound: "commentblanquettebonne"
  },
  {
    id: 5,
    punchline: "Hareng pomme à l'huile",
    name: "Lucien Bramard / OSS117",
    photo: "./images/jean_dujardin.jpg",
    sound: "harengramequin"
  },
  {
    id: 6,
    punchline: "C'est cocasse!",
    name: "Lucien Bramard / OSS117",
    photo: "./images/jean_dujardin.jpg",
    sound: "cocasse"
  },
  {
    id: 7,
    punchline: "J'aime les panoramas",
    name: "Lucien Bramard / OSS117",
    photo: "./images/jean_dujardin.jpg",
    sound: "jaimelespanoramas"
  },
  {
    id: 8,
    punchline: "Des millions?!",
    name: "Lucien Bramard / OSS117",
    photo: "./images/jean_dujardin.jpg",
    sound: "desmillions"
  },
  {
    id: 9,
    punchline: "Qui êtes-vous?!",
    name: "Lucien Bramard / OSS117",
    photo: "./images/jean_dujardin.jpg",
    sound: "quietesvous"
  },
  {
    id: 10,
    punchline: "C'est Monsieur René Coty",
    name: "Lucien Bramard / OSS117",
    photo: "./images/jean_dujardin.jpg",
    sound: "renecoty"
  },
  {
    id: 11,
    punchline: "J'aime me beurrer la biscotte",
    name: "Lucien Bramard / OSS117",
    photo: "./images/jean_dujardin.jpg",
    sound: "beurrerbiscotte"
  },
  {
    id: 12,
    punchline: "Bienvenue au Caire...",
    name: "Gerhard Moeller",
    photo: "./images/richard_sammel.jpg",
    sound: "bienvenueaucaire"
  },
  {
    id: 13,
    punchline: "J'ai réservé au nom de Bramard!",
    name: "Lucien Bramard / OSS117",
    photo: "./images/jean_dujardin.jpg",
    sound: "Bramard"
  },
  {
    id: 14,
    punchline: "J'aime le bruit blanc de l'eau",
    name: "Lucien Bramard / OSS117",
    photo: "./images/jean_dujardin.jpg",
    sound: "bruitblanc"
  },
  {
    id: 15,
    punchline: "Ca me sert à rien...",
    name: "Lucien Bramard / OSS117",
    photo: "./images/jean_dujardin.jpg",
    sound: "Camesertarien"
  },
  {
    id: 16,
    punchline: "C'est drôle...",
    name: "Lucien Bramard / OSS117",
    photo: "./images/jean_dujardin.jpg",
    sound: "cestdrole"
  },
  {
    id: 17,
    punchline: "C'est toi arrêtez!!",
    name: "Lucien Bramard / OSS117",
    photo: "./images/jean_dujardin.jpg",
    sound: "cesttoiarretez"
  },
  {
    id: 18,
    punchline: "C'est une astuce!",
    name: "Lucien Bramard / OSS117",
    photo: "./images/jean_dujardin.jpg",
    sound: "cestuneastuce"
  },
  {
    id: 19,
    punchline: "Combien as-tu d'enfants Slimane?",
    name: "Lucien Bramard / OSS117",
    photo: "./images/jean_dujardin.jpg",
    sound: "combienenfants2"
  },
  {
    id: 20,
    punchline: "Comment est quoi?!",
    name: "Lucien Bramard / OSS117",
    photo: "./images/jean_dujardin.jpg",
    sound: "commentestquoi"
  },
  {
    id: 21,
    punchline: "On ne devrait jamais faire confiance à une femme",
    name: "Lucien Bramard / OSS117",
    photo: "./images/jean_dujardin.jpg",
    sound: "confiancefemme"
  },
  {
    id: 22,
    punchline: "Je vous mettrai un petit coup de poliche",
    name: "Lucien Bramard / OSS117",
    photo: "./images/jean_dujardin.jpg",
    sound: "coupdepoliche"
  },
  {
    id: 23,
    punchline: "Mais il va la fermer sa gueule?!",
    name: "Lucien Bramard / OSS117",
    photo: "./images/jean_dujardin.jpg",
    sound: "fermersagueule"
  },
  {
    id: 24,
    punchline: "Et non pas le gratin de pommes de terres...",
    name: "Lucien Bramard / OSS117",
    photo: "./images/jean_dujardin.jpg",
    sound: "gratin"
  },
  {
    id: 25,
    punchline: "L'imam...",
    name: "Larmina El Akmar Betouche",
    photo: "./images/berenice_bejo.jpg",
    sound: "imam"
  },
  {
    id: 26,
    punchline: "Inch'Allah!",
    name: "Lucien Bramard / OSS117",
    photo: "./images/jean_dujardin.jpg",
    sound: "inchallah"
  },
  {
    id: 27,
    punchline: "Jack! Jack...",
    name: "Lucien Bramard / OSS117",
    photo: "./images/jean_dujardin.jpg",
    sound: "jack"
  },
  {
    id: 28,
    punchline: "J'aime quand on m'enduit d'huile",
    name: "Lucien Bramard / OSS117",
    photo: "./images/jean_dujardin.jpg",
    sound: "jaimehuile"
  },
  {
    id: 29,
    punchline: "J'aime me battre",
    name: "Lucien Bramard / OSS117",
    photo: "./images/jean_dujardin.jpg",
    sound: "jaimemebattre"
  },
  {
    id: 30,
    punchline: "Jouer au malin",
    name: "Raymond Pelletier",
    photo: "./images/francois_damiens.jpg",
    sound: "joueraumalin"
  },
  {
    id: 31,
    punchline: "Tu n'es pas seulement un lâche...",
    name: "Lucien Bramard / OSS117",
    photo: "./images/jean_dujardin.jpg",
    sound: "lachetraitre"
  },
  {
    id: 32,
    punchline: "Moi qui pensais vous laisser faire l'amour avec moi",
    name: "Lucien Bramard / OSS117",
    photo: "./images/jean_dujardin.jpg",
    sound: "laisserfairelamour"
  },
  {
    id: 33,
    punchline: "Et si j'étais naine, et myope?",
    name: "Larmina El Akmar Betouch",
    photo: "./images/berenice_bejo.jpg",
    sound: "nainemyope"
  },
  {
    id: 34,
    punchline: "On va boir un verre ou...",
    name: "Raymond Pelletier",
    photo: "./images/francois_damiens.jpg",
    sound: "onvaboireunverre"
  },
  {
    id: 35,
    punchline: "On va dire que c'est moi!",
    name: "Lucien Bramard / OSS117",
    photo: "./images/jean_dujardin.jpg",
    sound: "onvadirequecestmoi"
  },
  {
    id: 36,
    punchline: "C'est la piquette Jack!",
    name: "Lucien Bramard / OSS117",
    photo: "./images/jean_dujardin.jpg",
    sound: "piquettejack"
  },
  {
    id: 37,
    punchline: "On dirait une poissonnière de Ménilmontant!",
    name: "Lucien Bramard / OSS117",
    photo: "./images/jean_dujardin.jpg",
    sound: "poissonniere"
  },
  {
    id: 38,
    punchline: "Moi je suis dans le poulet!",
    name: "Lucien Bramard / OSS117",
    photo: "./images/jean_dujardin.jpg",
    sound: "pouletbordel"
  },
  {
    id: 39,
    punchline: "Tu me prends pour un crétin?!",
    name: "Raymond Pelletier",
    photo: "./images/francois_damiens.jpg",
    sound: "prendspouruncretin"
  },
  {
    id: 40,
    punchline: "Ta pudeur t'honore Slimane",
    name: "Lucien Bramard / OSS117",
    photo: "./images/jean_dujardin.jpg",
    sound: "pudeurhonore"
  },
  {
    id: 41,
    punchline: "S'agirait de grandir...",
    name: "Lucien Bramard / OSS117",
    photo: "./images/jean_dujardin.jpg",
    sound: "sagiraitdegrandir"
  },
  {
    id: 42,
    punchline: "Mettre mon smocking en alpaga!",
    name: "Lucien Bramard / OSS117",
    photo: "./images/jean_dujardin.jpg",
    sound: "smockingenalpaga"
  },
  {
    id: 43,
    punchline: "Le Soviet éponge!",
    name: "Lucien Bramard / OSS117",
    photo: "./images/jean_dujardin.jpg",
    sound: "sovieteponge"
  },
  {
    id: 44,
    punchline: "T'es mauvais!",
    name: "Lucien Bramard / OSS117",
    photo: "./images/jean_dujardin.jpg",
    sound: "tesmauvais"
  },
  {
    id: 45,
    punchline: "C'était donc ça tout ce tintouin!",
    name: "Lucien Bramard / OSS117",
    photo: "./images/jean_dujardin.jpg",
    sound: "tintouin"
  },
  {
    id: 46,
    punchline: "Très français",
    name: "Larmina El Akmar Betouch",
    photo: "./images/berenice_bejo.jpg",
    sound: "tresfrancaismerci"
  },
  {
    id: 47,
    punchline: "Triste Sir!",
    name: "Raymond Pelletier",
    photo: "./images/francois_damiens.jpg",
    sound: "tristesir"
  },
  {
    id: 48,
    punchline: "Une Suze!",
    name: "Lucien Bramard / OSS117",
    photo: "./images/jean_dujardin.jpg",
    sound: "unesuze"
  },
  {
    id: 49,
    punchline: "Vous voulez mourir Bramard?!",
    name: "Raymond Pelletier",
    photo: "./images/francois_damiens.jpg",
    sound: "voulezmourirbramar"
  },
  {
    id: 50,
    punchline: "Elle est bonne...",
    name: "Lucien Bramard / OSS117",
    photo: "./images/jean_dujardin.jpg",
    sound: "elleestbonne"
  },
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
    this.joueraumalin = this.joueraumalin.bind(this);

    this.lachetraitre = this.lachetraitre.bind(this);
    this.laisserfairelamour = this.laisserfairelamour.bind(this);
    this.nainemyope = this.nainemyope.bind(this);
    this.onvaboireunverre = this.onvaboireunverre.bind(this);
    this.onvadirequecestmoi = this.onvadirequecestmoi.bind(this);
    this.piquettejack = this.piquettejack.bind(this);
    this.poissonniere = this.poissonniere.bind(this);
    this.pouletbordel = this.pouletbordel.bind(this);
    this.prendspouruncretin = this.prendspouruncretin.bind(this);
    this.pudeurhonore = this.pudeurhonore.bind(this);
    this.sagiraitdegrandir = this.sagiraitdegrandir.bind(this);
    this.smockingenalpaga = this.smockingenalpaga.bind(this);
    this.sovieteponge = this.sovieteponge.bind(this);
    this.tesmauvais = this.tesmauvais.bind(this);
    this.tintouin = this.tintouin.bind(this);
    this.tresfrancaismerci = this.tresfrancaismerci.bind(this);
    this.tristesir = this.tristesir.bind(this);
    this.unesuze = this.unesuze.bind(this);
    this.voulezmourirbramar = this.voulezmourirbramar.bind(this);

    this.handleClickFavOn = this.handleClickFavOn.bind(this);
    this.handleClickFavOff = this.handleClickFavOff.bind(this);
    this.state = { viewOnlyFav : false, fav:[], myfav:[] }

    this.state= {
      punchlines: punchlines,
      term: '',
      viewOnlyFav : false,
      fav:[],
      myfav:[]
    }

    this.searchHandler = this.searchHandler.bind(this);
  }

  componentDidMount() {
    var ctx = this;
    fetch('./fav')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
      console.log(data);
        ctx.setState(
          {fav : data}
        );
    }).catch(function(error) {
        console.log('Request failed', error)
    });

    fetch('./myfav')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
      console.log(data);
        ctx.setState(
          {myfav : data}
        );
    }).catch(function(error) {
        console.log('Request failed', error)
    });
  }

  handleClickFavOn() {
    this.setState({
      viewOnlyFav : true
    })
  }

  handleClickFavOff() {
    this.setState({
      viewOnlyFav : false
    })
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
  joueraumalin() {
      joueraumalin.play();
      }
  lachetraitre() {
      lachetraitre.play();
      }
  laisserfairelamour() {
      laisserfairelamour.play();
      }
  nainemyope() {
      nainemyope.play();
      }
  onvaboireunverre() {
      onvaboireunverre.play();
      }
  onvadirequecestmoi() {
      onvadirequecestmoi.play();
      }
  piquettejack() {
      piquettejack.play();
      }
  poissonniere() {
      poissonniere.play();
      }
  pouletbordel() {
      pouletbordel.play();
      }
  prendspouruncretin() {
      prendspouruncretin.play();
      }
  pudeurhonore() {
      pudeurhonore.play();
      }
  sagiraitdegrandir() {
      sagiraitdegrandir.play();
      }
  smockingenalpaga() {
      smockingenalpaga.play();
      }
  sovieteponge() {
      sovieteponge.play();
      }
  tesmauvais() {
      tesmauvais.play();
      }
  tintouin() {
      tintouin.play();
      }
  tresfrancaismerci() {
      tresfrancaismerci.play();
      }
  tristesir() {
      tristesir.play();
      }
  unesuze() {
      unesuze.play();
      }
  voulezmourirbramar() {
      voulezmourirbramar.play();
      }





  render() {
    const {term, punchlines} = this.state;
    return (
      <div>
        <div className="navbar-fixed">
          <nav className="orange">
            <div className="nav-wrapper">
              <form>
                <div className="input-field">
                  <input id="search" type="search" required="required" onChange={this.searchHandler} value={term} placeholder="Cherchez une réplique..."/>
                  <label className="label-icon" htmlFor="search">
                    <i className="material-icons">search</i>
                  </label>
                  <i className="material-icons">close</i>
                </div>
              </form>
            </div>
          </nav>
        </div>
        {
          punchlines.filter(searchingFor(term)).map(punch => <div className="inlineBlock" key={punch.id}>
            <ul className="collection NoMarge">
              <li className="collection-item avatar grey lighten-5 " onClick={this[punch.sound]}>
                <img alt="" src={punch.photo} className="circle large"/>
                <a className=" col s1 offset-s1 right" >
                  <i className="small material-icons">star</i>
                </a>
                <span className="title col s10">
                  {punch.punchline}
                </span>
                <p className="col s10">
                  {punch.name}
                </p>
              </li>
            </ul>
          </div>)
        }
        <div className="navbar-fixed-bottom">
          <nav className="navbar orange">
            <div className="nav-content">
              <ul className="tabs tabs-transparent ">
                <li className="tab col s6">
                  <a className="active title" href="#">Les répliques</a>
                </li>
                <li className="tab col s6">
                  <a href="#">Mes préférées</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

    );
  }
}

module.exports = App;
