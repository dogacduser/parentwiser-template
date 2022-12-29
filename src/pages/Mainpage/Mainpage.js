import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import "./Mainpage.css";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import logo from "./plogo.png";
import appstore from "./appstore.png";
import googleplay from "./googleplay.png";
import doublephone from "./doublephone.png";
import singlephone from "./singlephone.png";
import bottomlogo from "./bottomlogo.png";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import { Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#f0f2f5",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  boxShadow: "none",
}));

function Home() {
  return (
    <Grid
      container
      spacing={2}
      style={{ backgroundColor: "#f0f2f5" }}
      columns={{ xs: 4, md: 12 }}
    >
      <Grid xs={12} md={7}>
        <Item style={{}}>
          <img className="logo" src={logo} alt="logo" />
        </Item>
        <Item style={{}}>
          <Typography
            variant="h4"
            style={{
              fontSize: "44px",
              fontWeight: "700",
              lineHeight: "1.21",
              letterSpacing: ".2px",
              color: "#183b56",
              marginBottom: "15px",
            }}
          >
            “Kişiye Özgü Çocuk Yetiştirme Rehberi”
          </Typography>
        </Item>
        <Item
          style={{
            fontSize: "23px",
    lineHeight: "1.3",
    fontWeight: "200",
    color: "#183b56",
    marginBottom: "10px",
    
          }}
        >
          
            Parentwiser, 2 – 18 yaş arasındaki çocuğunuzu yetiştirirken her an
            yanınızda olan, çocuğunuzla yaşadığınız sorunlara dair güvenilir ve
            bilimsel bilgiyi hızlı bir şekilde sunan mobil bir uygulamadır.
          
        </Item>
        <Item style={{ display: "flex" }}>
          <Item style={{ display: "flex" }}>
            <img
              onClick={() =>
                (window.location.href =
                  "https://apps.apple.com/tr/app/parentwiser/id1527425284?l=tr")
              }
              src={appstore}
            />
            <img
              style={{ marginLeft: "15px" }}
              onClick={() =>
                (window.location.href =
                  "https://play.google.com/store/apps/details?id=com.parentwiser.parentingapp.android&hl=tr&gl=US&pli=1")
              }
              src={googleplay}
            />
          </Item>
        </Item>
        <Item>
          <TouchAppIcon color="secondary" />
          <b>Sayfayı kaydırarak</b> daha fazla bilgi alabilirsin.
        </Item>
      </Grid>

      <Grid xs={12} md={5}>
        <Item
          style={{
            maxWidth: "300px",
            maxHeight: "500px",
            margin: "0 auto",
          }}
        >
          <img
            style={{ width: "100%", height: "100%" }}
            src={singlephone}
            alt="phone"
          />
        </Item>
      </Grid>

      <Grid
        xs={12}
        md={12}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Item
          style={{
            display: "Flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "50px",
          }}
        >
          <Item
            style={{
              fontWeight: "700",
              maxwidth: "440px",
              fontSize: "36px",
              lineHeight: "1.33",
              letterSpacing: ".2px",
              textAlign: "center",
              color: "#183b56",
              marginBottom: "10px",
            }}
          >
            "Çocuk yetiştirmek, kendini yetiştirmektir."
          </Item>
        </Item>
        <Item
          style={{
            display: "Flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "50px",
          }}
        >
          
            Özgüvenli, mutlu ve başarılı çocuk yetiştirmek için Parentwiser
            Ailesinin birer üyesi olabilirsiniz.
          
        </Item>
        <Item
          style={{
            display: "Flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "",
          }}
        >
          <List>
            <ListItem>
            ▪Parentwiser’a bir kod ile iki kişi (anne ve baba birlikte) giriş
              yapabilir.
            </ListItem>
            <ListItem>
            ▪Kod bir yıl boyunca geçerlidir. Tüm içeriklere bu süre içerisinde
              ulaşabilirsiniz.
            </ListItem>
          </List>
        </Item>
      </Grid>
      <Grid
        xs={12}
        md={6}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Item
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            marginRight:"-200px",
          }}
        >
          <img src={doublephone} />
        </Item>
      </Grid>
      <Grid
        xs={12}
        md={3}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          marginTop: "15px",
          marginLeft:"-150px",
        }}
      >
        <Card
          sx={{ minWidth: 275 }}
          style={{
            maxWidth: "220px",
            backgroundColor: "#fff",
            padding: "20px , 10px",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
              style={{
                fontWeight: "700",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                lineHeight: "1.33",
                letterSpacing: ".2px",
                color: "#183b56",
            
              }}
            >
              Sınırlı İçerik
            </Typography>
            <Typography
              variant="h5"
              component="div"
              style={{
                fontSize: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "rgb(255, 151, 0)",
                fontWeight:"700",
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
                marginTop:"-10px",
                boxSizing:"border-box",
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
                flexDirection: "column",
                height: "90px",
                fontSize: "12px",
                lineHeight: " 1.7",
                position:"relative",
                zoom:"1",
                boxSizing:"border-box",
                marginLeft:"0",
                marginRight:"0",
                marginBottom:"20px",
              }}
            >
              Sizin için hazırladığımız ücretsiz içeriklerin keyfini çıkarın..
            </Typography>
          </CardContent>
          <CardActions>
            <Button
            style={{
              position:"relative",
              height:"auto",
              marginLeft:"0",
                marginRight:"0",
                zoom:"1",
                boxSizing:"border-box",
            }}
              onClick={() =>
                (window.location.href = "http://localhost:3000/register")
              }
              size="small"
            >
              KAYIT OL!
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid
        xs={12}
        md={3}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          marginTop: "15px",
          marginLeft:"-150px"
        }}
      >
        <Card
          sx={{ minWidth: 275 }}
          style={{
            maxWidth: "220px",
            backgroundColor: "#fff",
            padding: "20px , 10px",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
              style={{
                fontWeight: "700",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                lineHeight: "1.33",
                letterSpacing: ".2px",
                color: "#183b56",
              }}
            >
              Sınırsız İçerik
            </Typography>
            <Typography
              variant="h5"
              component="div"
              style={{
                fontSize: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "rgb(65, 36, 251)",
                fontWeight: "700",
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
                marginTop:"-10px",
                boxSizing:"border-box",
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
                flexDirection: "column",
                height: "90px",
                fontSize: "12px",
                lineHeight: " 1.7",
                marginBottom: "20px",
                zoom: "1",
                marginTop:"20px",
              }}
            >
              <List style={{ padding: "" }}>
                <ListItem>2 kişi kullanabilir</ListItem>
                <ListItem>Eğitim Setlerine sınırsız erişim</ListItem>
                <ListItem> Anne Baba Okulu</ListItem>
                <ListItem>Anketlerle kendinizi tanıyın</ListItem>
              </List>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">SATIN AL!</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid xs={12}
        md={12}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          marginTop:"20px",
        }}>
<img className="bottomlogo" src={bottomlogo} alt="bottomlogo" />
      </Grid>
      <Grid xs={12}
        md={12}>
        <Typography  style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          marginTop:"20px",
          width:"100%",
          minHeight:"1px",
          boxSizing:"border-box",
          }}>
        Parentwiser © 2021
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Home;
