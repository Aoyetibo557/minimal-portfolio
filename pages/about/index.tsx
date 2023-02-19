import { Layout } from "@/components/Layout";
import { AboutInfo } from "@/components/_about/info";
import { useEffect } from "react";

const About = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <div>
          <AboutInfo />
        </div>
      </div>
    </div>
  );
};

export default About;
