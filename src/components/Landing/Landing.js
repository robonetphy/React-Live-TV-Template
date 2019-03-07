import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

/////////////////
/// COMPONENTS //
/////////////////

// Container
class LHome extends React.Component {
  apiKey = "87dfa1c669eea853da609d4968d294be";
  render() {
    return (
      <div class="not-hidden">
        <Hero />
        <TitleList
          title="Top TV picks for Jack"
          url="discover/tv?sort_by=popularity.desc&page=1"
        />
        <TitleList
          title="Trending now"
          url="discover/movie?sort_by=popularity.desc&page=1"
        />
        <TitleList
          title="Most watched in Horror"
          url="genre/27/movies?sort_by=popularity.desc&page=1"
        />
        <TitleList
          title="Sci-Fi greats"
          url="genre/878/movies?sort_by=popularity.desc&page=1"
        />
        <TitleList
          title="Comedy magic"
          url="genre/35/movies?sort_by=popularity.desc&page=1"
        />
      </div>
    );
  }
}

//////////
// Hero //
//////////

class Hero extends React.Component {
  render() {
    return (
      <div
        id="hero"
        className="Hero"
        style={{
          backgroundImage: "url(https://images.alphacoders.com/633/633643.jpg)"
        }}
      >
        <div className="content">
          <img
            className="logo"
            src="http://www.returndates.com/backgrounds/narcos.logo.png"
            alt="narcos background"
          />
          <h2>Season 2 now available</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
            id quam sapiente unde voluptatum alias vero debitis, magnam quis
            quod.
          </p>
          <div className="button-wrapper">
            <HeroButton primary={true} text="Watch now" />
            <HeroButton primary={false} text="+ My list" />
          </div>
        </div>
        <div className="overlay" />
      </div>
    );
  }
}

// Hero Button
class HeroButton extends React.Component {
  render() {
    return (
      <Link
        to={ROUTES.HOME}
        className="Button"
        data-primary={this.props.primary}
      >
        {this.props.text}
      </Link>
    );
  }
}

////////////////
// Title List //
////////////////

// Title List Container
class TitleList extends React.Component {
  apiKey = "87dfa1c669eea853da609d4968d294be";
  constructor(props) {
    super(props);
    this.state = { data: [], mounted: false };
  }
  loadContent = () => {
    var requestUrl =
      "https://api.themoviedb.org/3/" +
      this.props.url +
      "&api_key=" +
      this.apiKey;
    fetch(requestUrl)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ data: data });
      })
      .catch(err => {
        console.log("There has been an error");
      });
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.url !== this.props.url && nextProps.url !== "") {
      this.setState({ mounted: true, url: nextProps.url }, () => {
        this.loadContent();
      });
    }
  }
  componentDidMount() {
    if (this.props.url !== "") {
      this.loadContent();
      this.setState({ mounted: true });
    }
  }
  render() {
    var titles = "";
    if (this.state.data.results) {
      titles = this.state.data.results.map(function(title, i) {
        if (i < 5) {
          var name = "";
          var backDrop =
            "http://image.tmdb.org/t/p/original" + title.backdrop_path;
          if (!title.name) {
            name = title.original_title;
          } else {
            name = title.name;
          }

          return (
            <Item
              key={title.id}
              title={name}
              score={title.vote_average}
              overview={title.overview}
              backdrop={backDrop}
            />
          );
        } else {
          return <div key={title.id} />;
        }
      });
    }

    return (
      <div
        ref="titlecategory"
        className="TitleList"
        data-loaded={this.state.mounted}
      >
        <div className="Title">
          <h1>{this.props.title}</h1>
          <div className="titles-wrapper">{titles}</div>
        </div>
      </div>
    );
  }
}

// Title List Item
class Item extends React.Component {
  render() {
    return (
      <div
        className="Item"
        style={{ backgroundImage: "url(" + this.props.backdrop + ")" }}
      >
        <div className="overlay">
          <div className="title">{this.props.title}</div>
          <div className="rating">{this.props.score} / 10</div>
          <div className="plot">{this.props.overview}</div>
          <ListToggle />
        </div>
      </div>
    );
  }
}

class ListToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toggled: false };
  }
  handleClick = () => {
    if (this.state.toggled === true) {
      this.setState({ toggled: false });
    } else {
      this.setState({ toggled: true });
    }
  };
  render() {
    return (
      <div
        onClick={this.handleClick}
        data-toggled={this.state.toggled}
        className="ListToggle"
      >
        <div>
          <i className="fa fa-fw fa-plus" />
          <i className="fa fa-fw fa-check" />
        </div>
      </div>
    );
  }
}
export default LHome;
