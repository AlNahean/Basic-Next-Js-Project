import LWSHeader from "../../components/LWS/Header/Header";
import LWSFooter from "../../components/LWS/Footer/Footer";

const GitCommands = () => {
  return <div className=" container">Git Commands</div>;
};

GitCommands.getLayout = (page) => {
  return (
    <>
      <LWSHeader />
      {page}
      <LWSFooter />
    </>
  );
};

// const InitCommonLayout = (name, header, footer) => {
//   console.log(name, header, footer);
//   name.getLayout = (page) => {
//     return (
//       <>
//         <header />
//         {page}
//         <footer />
//       </>
//     );
//   };
// };

// InitCommonLayout(GitCommands, LWSHeader, LWSFooter);

export default GitCommands;
