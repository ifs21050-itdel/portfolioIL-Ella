import React, { Component } from "react";
import { Grid, Cell, Card } from "react-mdl";
import pintarinImage from "../image/pintarin.jpg"; // Import gambar
import samplePDF from "../image/Ella Silaban-CV.pdf"; // Import PDF

class Karya extends Component {
  render() {
    return (
      <div
        style={{
          overflow: "auto",
          height: "inherit",
          fontFamily: "Arial, sans-serif",
          color: "#4a4a4a",
          textAlign: "center",
        }}
      >
        <Grid style={{ display: "flex", justifyContent: "center" }}>
          <Cell col={12} style={{ marginBottom: "128px" }}>
            <h2 style={{ fontSize: "2em", marginBottom: "0.5em" }}>
              Pengalaman
            </h2>
            <hr
              style={{
                width: "60px",
                height: "3px",
                backgroundColor: "#4a90e2",
                border: "none",
                marginBottom: "1em",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Card
                shadow={5}
                style={{
                  width: "500px",
                  height: "380px",
                  margin: "auto",
                  background: `url(${pintarinImage}) center / cover no-repeat`,
                  display: "flex",
                  alignItems: "flex-end",
                  borderRadius: "10px",
                  overflow: "hidden",
                  transition: "transform 0.3s ease, boxShadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0px 10px 20px rgba(0, 0, 0, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    padding: "10px 20px",
                    width: "100%",
                    textAlign: "center",
                    borderTop: "2px solid #4a90e2",
                  }}
                >
                  <h4 style={{ fontSize: "1.2em", margin: "0", color: "#333" }}>
                    Software Tester di Pintarin
                  </h4>
                  <p
                    style={{
                      fontSize: "0.9em",
                      color: "#666",
                      marginTop: "0.3em",
                    }}
                  >
                    melakukan pengujian terhadap website pintarin ai
                  </p>
                </div>
              </Card>
              <br />
              <a
                href={samplePDF}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginTop: "20px",
                  fontSize: "1em",
                  color: "#4a90e2",
                  textDecoration: "none",
                  borderBottom: "2px solid transparent",
                  transition: "borderColor 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderBottomColor = "#4a90e2")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderBottomColor = "transparent")
                }
              >
                Lihat CV Lengkap
              </a>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Karya;
