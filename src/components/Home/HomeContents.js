/*
Home page -> welcome Heading
*/

import { profileUrls } from "../../constant";

const SubHeading = () => {
  return (
    <div className="flex justify-center mt-4">
      <div className="card w-3/4 bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="card-title text-red-400">
            Welcome to FinHub, your premier destination for comprehensive
            financial tracking and insightful articles. At FinHub, we understand
            the importance of staying informed and empowered in today's dynamic
            financial landscape. Our platform is designed to provide you with
            everything you need to navigate the complexities of finance
            effortlessly. Whether you're a seasoned investor or just starting
            your journey towards financial literacy, FinHub offers a wealth of
            resources tailored to meet your needs.
          </div>
        </div>
      </div>
    </div>
  );
};

const HomeHeading = () => {
  return (
    <div className="flex justify-center mt-2">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            Welcome to FinHub: Your Financial Insight Hub
          </h2>
        </div>
      </div>
    </div>
  );
};

const OurTeams = () => {
  return (
    <div className="my-4">
      <div className="font-semibold text-fuchsia-600 text-4xl sm:text-3xl sm:text-2xl text-center p-2">Our Teams</div>
      <div className="flex justify-center gap-x-4">
        {profileUrls.map((value, idx) => (
          <div className="card shadow-xl" key={idx}>
            <div className="card-body">
              <div>
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src={value} alt="team member" />
                  </div>
                </div>
                <div className="text-stone-600 font-semibold text-center">
                  Mr John
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { SubHeading, HomeHeading, OurTeams };
