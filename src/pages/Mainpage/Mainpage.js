import * as React from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import "./Mainpage.css";
import { blue } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { maxWidth } from "@mui/system";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  boxShadow: "none",
}));

function Home() {
  const navigate = useNavigate();
  return (
    <Grid container spacing={2} backgroundColor="#f0f2f5">
      {/* Sol taraf yazılar parentwiser*/}
      <Grid xs={7} style={{ backgroundColor: "#f0f2f5" }}>
        <Item style={{ backgroundColor: "#f0f2f5" }}>
          <img
            className="logo"
            src="https://parentwiser.com.tr/static/media/logo-dark.930ffdd38bb768bdf93d.png"
            alt="logo"
          />
        </Item>
        <Item style={{ backgroundColor: "#f0f2f5" }}>
          <h1>“Kişiye Özgü Çocuk Yetiştirme Rehberi”</h1>
        </Item>
        <Item
          style={{
            fontSize: "23px",
            lineHeight: "1.3",
            backgroundColor: "#f0f2f5",
          }}
        >
          <p className="information">
            Parentwiser, 2 – 18 yaş arasındaki çocuğunuzu yetiştirirken her an
            yanınızda olan, çocuğunuzla yaşadığınız sorunlara dair güvenilir ve
            bilimsel bilgiyi hızlı bir şekilde sunan mobil bir uygulamadır.
          </p>
        </Item>
        <Item style={{ display: "flex", backgroundColor: "#f0f2f5" }}>
          <Item style={{ display: "flex", backgroundColor: "#f0f2f5" }}>
            <img
              onClick={() =>
                (window.location.href =
                  "https://apps.apple.com/tr/app/parentwiser/id1527425284?l=tr")
              }
              width="18%"
              src="https://assets.stickpng.com/images/5847e95fcef1014c0b5e4822.png"
            />
            <img
              onClick={() =>
                (window.location.href =
                  "https://play.google.com/store/apps/details?id=com.parentwiser.parentingapp.android&hl=tr&gl=US&pli=1")
              }
              width="18%"
              src="https://assets.stickpng.com/images/5a902dbf7f96951c82922875.png"
            />
          </Item>
        </Item>
        <Item style={{ backgroundColor: "#f0f2f5" }}>
          <img src="https://panel.parentwiser.com/static/media/icon-touch.b6826e69.svg" />{" "}
          <b>Sayfayı kaydırarak</b> daha fazla bilgi alabilirsin.
        </Item>
      </Grid>

      {/* Sağ taraf telefon*/}
      <Grid xs={5} style={{ backgroundColor: "#f0f2f5" }}>
        <Item
          style={{
            maxWidth: "300px",
            maxHeight: "500px",
            margin: "0 auto",
            backgroundColor: "#f0f2f5",
          }}
        >
          {" "}
          <img
            style={{ width: "100%", height: "100%" }}
            src="https://panel.parentwiser.com/static/media/pw_landing_single_phone.3040dcbc.png"
            alt="phone"
          />
        </Item>
      </Grid>

      {/* İkinci kısım*/}
      <Grid xs={2} style={{ backgroundColor: "#f0f2f5" }}></Grid>
      <Grid
        xs={8}
        style={{
          padding: "25px 0",
          maxWidth: "1024px",
          height: "auto",
        }}
      >
        <Item
          style={{
            backgroundColor: "#f0f2f5",
            display: "Flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "50px",
          }}
        >
          <h1>"Çocuk yetiştirmek, kendini yetiştirmektir."</h1>
        </Item>
        <Item
          style={{
            backgroundColor: "#f0f2f5",
            display: "Flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "50px",
          }}
        >
          <p>
            Özgüvenli, mutlu ve başarılı çocuk yetiştirmek için Parentwiser
            Ailesinin birer üyesi olabilirsiniz.
          </p>
        </Item>
        <Item
          style={{
            backgroundColor: "#f0f2f5",
            display: "Flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "50px",
          }}
        >
          <ul>
            <li>
              Parentwiser’a bir kod ile iki kişi (anne ve baba birlikte) giriş
              yapabilir.
            </li>
            <li>
              Kod bir yıl boyunca geçerlidir. Tüm içeriklere bu süre içerisinde
              ulaşabilirsiniz.
            </li>
          </ul>
        </Item>
        <Grid>
          <Item
            style={{
              flexBasis: "50%",
              display: "flex",
              position: "relative",
              backgroundColor: "#f0f2f5",
            }}
          >
            <img src="https://panel.parentwiser.com/static/media/pw_landingpage_double_phone.06be856b.png" />
            <Card
              sx={{ minWidth: 275 }}
              style={{
                flexDirection: "column",
                display: "flex",
                maxWidth: "220px",
                backgroundColor: "#fff",
                padding: "20px , 10px",
              }}
            >
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                  style={{
                    fontWeight:"700",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Sınırlı İçerik
                </Typography>
                <Typography
                  variant="h5"
                  component="div"
                  style={{
                    fontSize:"40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Ücretsiz
                </Typography>
                <Typography
                  sx={{ mb: 1.5 }}
                  color="text.secondary"
                  style={{
                    marginBottom: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  süresiz
                </Typography>
                <Typography
                  variant="body2"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection : "column",
                    height : "90px",
                    fontSize : "12px",
                    lineHeight:" 1.7",
                  }}
                >
                  Sizin için hazırladığımız ücretsiz içeriklerin keyfini
                  çıkarın..
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  onClick={() =>
                    (window.location.href = "http://localhost:3000/register")
                  }
                  size="small"
                >
                  KAYIT OL!
                </Button>
              </CardActions>
            </Card>
            <Card
              sx={{ minWidth: 275 }}
              style={{
                flexDirection: "column",
                display: "flex",
                maxWidth: "220px",
                backgroundColor: "#fff",
                padding: "20px , 10px",
              }}
            >
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                  style={{
                    fontWeight:"700",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Sınırsız İçerik
                </Typography>
                <Typography
                  variant="h5"
                  component="div"
                  style={{
                    fontSize:"40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  ₺239
                </Typography>
                <Typography
                  sx={{ mb: 1.5 }}
                  color="text.secondary"
                  style={{
                    marginBottom: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  yıllık
                </Typography>
                <Typography
                  variant="body2"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection : "column",
                    height : "90px",
                    fontSize : "12px",
                    lineHeight:" 1.7",
                  }}
                >
                  <ul>
                    <li>2 kişi kullanabilir</li>
                    <li>Eğitim Setlerine sınırsız erişim</li>
                    <li> Anne Baba Okulu</li>
                    <li>Anketlerle kendinizi tanıyın</li>
                  </ul>
                  <br />
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">SATIN AL!</Button>
              </CardActions>
            </Card>
          </Item>
        </Grid>
      </Grid>
      <Grid xs={2} style={{ backgroundColor: "#f0f2f5" }}></Grid>
    </Grid>

    //     <body>
    //       <div className="section1">
    //         <div className="section1-left">
    //         <img className="logo" src = "https://parentwiser.com.tr/static/media/logo-dark.930ffdd38bb768bdf93d.png" alt = "logo" />
    //       <h1 >“Kişiye Özgü Çocuk Yetiştirme Rehberi”</h1>
    //       <p className="text1">Parentwiser, 2 – 18 yaş arasındaki çocuğunuzu yetiştirirken her an yanınızda olan, çocuğunuzla yaşadığınız sorunlara dair güvenilir ve bilimsel bilgiyi hızlı bir şekilde sunan mobil bir uygulamadır.</p>
    //    <div style={{display:"flex"}}>
    //    <img onClick={()=>window.location.href="https://apps.apple.com/tr/app/parentwiser/id1527425284?l=tr"} width="18%"  src="https://assets.stickpng.com/images/5847e95fcef1014c0b5e4822.png"/>
    //       <img onClick={()=>window.location.href="https://play.google.com/store/apps/details?id=com.parentwiser.parentingapp.android&hl=tr&gl=US&pli=1"} width="18%" src="https://assets.stickpng.com/images/5a902dbf7f96951c82922875.png"/>
    //    </div>
    //         </div>

    //         <div className="section1-right">
    //           <img src="https://panel.parentwiser.com/static/media/pw_landing_single_phone.3040dcbc.png" alt="phone"/>
    //         </div>
    //      </div>

    //      <div className="section2">
    //      <h1>"Çocuk yetiştirmek, kendini yetiştirmektir."</h1>

    //      <p>Özgüvenli, mutlu ve başarılı çocuk yetiştirmek için Parentwiser Ailesinin birer üyesi olabilirsiniz.</p>

    //       <ul>
    //         <li>Parentwiser’a bir kod ile iki kişi (anne ve baba birlikte) giriş yapabilir.</li>
    //         <li>Kod bir yıl boyunca geçerlidir. Tüm içeriklere bu süre içerisinde ulaşabilirsiniz.</li>
    //       </ul>
    //      </div>

    //     <div className="section3">
    //       <img src="https://panel.parentwiser.com/static/media/pw_landingpage_double_phone.06be856b.png"/>
    //         <div className="card">
    //   <div className="container">
    //     <h4><b>Sınırlı İçerik</b></h4>
    //     <p>Ücretsiz</p>
    //     <p>yıllık</p>
    //     <p className="subInfo">Sizin için hazırladığımız ücretsiz içeriklerin keyfini çıkarın..</p>
    //     <button className="buton1" type="button" onclick="alert('Hello world!')">Kayıt Ol!</button>
    //   </div>
    // </div>
    // <div className="card2">
    //   <div className="container">
    //     <h4><b>Sınırsız İçerik</b></h4>
    //     <p>₺239</p>
    //     <p2>süresiz</p2>
    //     <button className="buton2" type="button" onclick="alert('Hello world!')">Satın Al!</button>
    //   </div>
    // </div>
    //     </div>
    //       </body>
  );
}

export default Home;
