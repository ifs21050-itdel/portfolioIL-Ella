import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class TentangSaya extends Component {
  render() {
    return (
      <div
        className="content-body"
        style={{
          overflow: "auto",
          height: "inherit",
        }}
      >
        <Grid className="content-grid2">
          <Cell col={3}>
            <div className="content-list">
              <h4>Ella Silaban</h4>
              <hr style={{ borderTop: "3px solid #833fb2" }} />
              <center>
                <p>Informasi tentang Ella Silaban</p>
                <p>Informatika</p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:ellasilaban11@gmail.com?Subject=Hello%20Node.js%20Programmer!"
                    target="_top"
                  >
                    ellasilaban11@gmail.com
                  </a>
                </p>
                <p>
                  Github:{" "}
                  <a
                    href="https://nodejs.org/en/about"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    https://github.com/ifs21050-itdel
                  </a>
                </p>
              </center>
            </div>
          </Cell>

          <Cell
            className="resume-right-col"
            col={9}
            style={{ marginBottom: "90px" }}
          >
            <h4>Riwayat</h4>
            <Grid>
              <Cell col={4}>
                <p>3 Juni 2024</p>
              </Cell>
              <Cell col={8}>
                <h5 style={{ marginTop: "0px" }}>
                  Saya menjadi software Tester
                </h5>
              </Cell>
            </Grid>
            <Grid>
              <Cell col={4}>
                <p>Sekarang</p>
              </Cell>
              <Cell col={8}>
                <h5 style={{ marginTop: "0px" }}>
                  Saya mengikuti Studi independen Infinite learning sebagai web
                  developer
                </h5>
              </Cell>
            </Grid>
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h4>Penggunaan Bahasa Pemrograman</h4>
            <Grid>
              <Cell col={4}>
                <p>Agustus 2021 - September 2025 </p>
              </Cell>
              <Cell col={8}>
                <h5 style={{ marginTop: "0px" }}>Java</h5>
              </Cell>
              <Cell col={4}>
                <p>Agustus 2021 - September 2025</p>
              </Cell>
              <Cell col={8}>
                <h5 style={{ marginTop: "0px" }}>PHP Native, Laravel</h5>
              </Cell>
              <Cell col={4}>
                <p>Agustus 2021 - September 2025</p>
              </Cell>
            </Grid>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default TentangSaya;
