import React from "react";

function About() {
  return <div>about us</div>;
}

export default About;
About.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
