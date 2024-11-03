import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Beranda extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="beranda-grid">
          <Cell col={12}>
            <div className="banner-text">
              <h1>Ella Silaban</h1>
              <hr />
              <p>
                Saya adalah mahasiswi yang bergerak di bidang informatika.
                <br></br>saya berpengalaman sebagai seorang QA dan Front End
              </p>
              <div className="social-links">
                <a
                  href="https://www.instagram.com/ella_tasya.s/profilecard"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i
                    className="fa fa-instagram fa-3x social"
                    aria-hidden="true"
                  />
                </a>
                <a
                  href="https://github.com/ifs21050-itdel"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github fa-3x social" aria-hidden="true" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ella-silaban-0b79a4275"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i
                    className="fa fa-linkedin fa-3x social"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Beranda;
