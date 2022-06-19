import Link from "next/link";
import Data from "../../Data/lwsNavigationData.json";
import LWSHeader from "../../components/LWS/Header/Header";
import LWSFooter from "../../components/LWS/Footer/Footer";

const LWSBase = ({ data }) => {
  return (
    <div>
      <div className=" container">
        <div style={{ height: "20vh" }} className=" center ">
          Blah....
        </div>
        <h1 className=" mb-5">LWS</h1>
        <div className=" row justify-content-center">
          {data.map((item) => {
            return (
              <div className=" col-12 col-md-6 col-lg-4 col-xl-3  mb-3">
                <Link href={`/lws/${item.link}`} className="">
                  <a className=" text-decoration-none card">
                    <img
                      src="/lws/cover.png"
                      alt="cover"
                      className=" img-fluid rounded-top"
                    />
                    {/* <div className=" card-header"></div> */}
                    <div className=" card-body">
                      <div className=" d-flex">
                        <div className=" badge bg-danger me-2">Github</div>
                        <div className=" badge bg-danger me-2">Github</div>
                        <div className=" badge bg-danger me-2">Github</div>
                        <div className=" badge bg-danger">Github</div>
                      </div>
                      <h3 className=" mt-2">{item.title}</h3>
                      <p
                        className=" mb-0 "
                        style={{
                          display: "-webkit-box",
                          lineClamp: 2,
                          textOverflow: "ellipsis",
                          boxOrient: "vertical,",
                        }}
                      >
                        {item.descreption}
                      </p>
                    </div>
                    {/* <div className=" card-footer">Footer</div> */}
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async (ctx) => {
  // // const data = fetch("../../Data/lwsNavigationData..json");
  // console.log(Data);

  return {
    props: {
      data: Data,
    },
  };
};

LWSBase.getLayout = (page) => {
  return (
    <>
      <LWSHeader />
      {page}
      <LWSFooter />
    </>
  );
};
export default LWSBase;
