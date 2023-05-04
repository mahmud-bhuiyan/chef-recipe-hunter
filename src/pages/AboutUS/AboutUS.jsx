import { Container } from "react-bootstrap";

function AboutUs() {
  return (
    <>
      <section className="about-us-section">
        <Container fluid className="p-0">
          <div
            className="about-us-banner"
            style={{
              backgroundImage: `url("https://i.ibb.co/Jj7XMHW/about-us.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "500px",
              borderRadius: "5px",
            }}
          >
            <div className="banner-overlay"></div>
            <div className="banner-content text-center">
              <h1 className="pt-3">About Us</h1>
            </div>
          </div>
          <div className="about-us-content mt-4">
            <Container>
              <h2>Welcome to Food Cravings</h2>

              <p>
                Our team of experienced chefs and food experts are passionate
                about sharing their knowledge and expertise with others, and are
                dedicated to bringing you the best content and resources to help
                you explore the world of food and cuisine.
              </p>

              <p>
                We are a website dedicated to sharing the best chef recipes from
                around the world. Our mission is to help home cooks and foodies
                alike discover new and exciting dishes to try, and to celebrate
                the art of cooking and cuisine.
              </p>
              <p>
                Discover the best chef recipes from around the world and take
                your culinary skills to the next level with Food Cravings. Our
                platform is designed to inspire and connect food enthusiasts and
                home cooks, with the latest trends, traditional recipes, and
                helpful tips and tricks for cooking and entertaining.
              </p>
              <p>
                We believe that food is more than just fuel for the body. Food
                is culture, history, tradition, and creativity all rolled into
                one. That's why we feature recipes from all corners of the
                globe, from classic Italian pasta dishes to spicy Indian curries
                to sweet French pastries.
              </p>
              <p>
                Whether you're an experienced chef or a kitchen novice, we have
                something for everyone. Our recipes range from simple and
                approachable to complex and impressive, so you can choose the
                level of challenge that's right for you.
              </p>
              <p>
                Join us on this delicious journey and discover new and exciting
                dishes, connect with other food lovers, and celebrate the art of
                cooking and cuisine.
              </p>
            </Container>
          </div>
        </Container>
      </section>
    </>
  );
}

export default AboutUs;
