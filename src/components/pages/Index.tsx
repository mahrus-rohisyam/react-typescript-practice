import Card from "../molecules/Card";
import DefaultTemplate from "../templates/DefaultTemplate";

const Home = () => {
  // const navList = [
  //   { name: "Home", link: "/" },
  //   { name: "Profile", link: "/profile" },
  //   { name: "Journal", link: "/journal" },
  //   { name: "Contact", link: "/contact" },
  // ];

  const datas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <DefaultTemplate>
      <div className="mockup-window border bg-base-300 p-5 lg:p-20">
        <h1>Grid Example</h1>
        <article className="grid sm:grid-cols-2 lg:grid-cols-3 my-10 gap-5">
          {datas.map((value) => {
            return <Card key={value} />;
          })}
        </article>
      </div>
    </DefaultTemplate>
  );
};

export default Home;
