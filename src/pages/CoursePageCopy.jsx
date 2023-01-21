import React from "react";
import Comments from "../components/PublicComponents/Comments";
import Aside from "../components/PublicComponents/Sections/Aside";
import CourseInfo from "../components/PublicComponents/Sections/CourseInfo";
const CoursePage = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="wrapper__inner">
            <div className="wrapper__title-box">
              <h3 className="subtitle wrapper__subtitle">Kurslar</h3>
              <h2 className="title wrapper__title">Boshlang’ich ingliz tili kursi</h2>
            </div>
            <div className="wrapper__video-box">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Pj5SlLWFFHY"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="tabs">
              <ul id="tabs-nav" className="tabs__list">
                <li onClick={() => setActiveTab(0)} data-tab="1" className="tabs__list-item">
                  Kurs malumot
                </li>
                <li onClick={() => setActiveTab(1)} data-tab="2" className="tabs__list-item">
                  Dars yozma matni
                </li>
                <li onClick={() => setActiveTab(2)} data-tab="3" className="tabs__list-item">
                  Kommentariya
                </li>
              </ul>
            </div>
            <div className="tab-content wrapper__desc-box">
              {activeTab === 0 && (
                <div data-tab-index="1" className="wrapper__desc" id="tab-1">
                  <h3>Ingliz tilini 0 dan mukammal o’rganing!</h3>
                  <p>
                    Volutpat aliquet eu ut nunc risus massa tortor mattis. Tellus tellus viverra mauris dictum
                    suspendisse mi id. Congue ac at dictum vulputate a pellentesque pretium at. Consectetur sodales orci
                    pharetra venenatis ut enim facilisi ornare. Tincidunt nam sed in proin ornare id a accumsan
                    maecenas. Odio lobortis duis molestie sagittis euismod eget. Facilisi arcu aliquet adipiscing neque.
                    Viverra elit morbi adipiscing aliquet dignissim. Congue enim sit nulla ornare neque. Massa lectus
                    dui rhoncus ac tempor quis sagittis purus. Arcu sit lorem at placerat vestibulum vehicula. Neque
                    eget massa euismod est quis nibh a. Ullamcorper massa aliquet dignissim commodo ullamcorper posuere
                    pharetra hac. Ipsum sit augue sit convallis mattis turpis potenti ante aliquam. Semper eu ut ac erat
                    nunc dignissim scelerisque cras. Eget massa purus adipiscing tincidunt. Sit suspendisse ac viverra
                    eget.
                  </p>
                  <img src="images/course.jpg" alt="Course" />
                  <h3>Ushbu kursning loyihasi nima?</h3>
                  <p>
                    Volutpat aliquet eu ut nunc risus massa tortor mattis. Tellus tellus viverra mauris dictum
                    suspendisse mi id. Congue ac at dictum vulputate a pellentesque pretium at. Consectetur sodales orci
                    pharetra venenatis ut enim facilisi ornare. Tincidunt nam sed in proin ornare id a accumsan
                    maecenas.
                  </p>
                  <h3>Bu onlayn kurs kimlar uchun?</h3>
                  <p>
                    Volutpat aliquet eu ut nunc risus massa tortor mattis. Tellus tellus viverra mauris dictum
                    suspendisse mi id. Congue ac at dictum vulputate a pellentesque pretium at. Consectetur sodales orci
                    pharetra venenatis ut enim facilisi ornare. Tincidunt nam sed in proin ornare id a accumsan
                    maecenas.
                  </p>
                  <h3>Talablar va materiallar</h3>
                  <p>
                    Volutpat aliquet eu ut nunc risus massa tortor mattis. Tellus tellus viverra mauris dictum
                    suspendisse mi id. Congue ac at dictum vulputate a pellentesque pretium at. Consectetur sodales orci
                    pharetra venenatis ut enim facilisi ornare. Tincidunt nam sed in proin ornare id a accumsan
                    maecenas.
                  </p>
                  <img src="images/course.jpg" alt="Course" />
                  <CourseInfo />
                </div>
              )}

              {activeTab === 1 && (
                <div data-tab-index="2" className="wrapper__desc" id="tab-2">
                  <h3>Maecenas id in aliquam volutpat.</h3>
                  <p>
                    Volutpat aliquet eu ut nunc risus massa tortor mattis. Tellus tellus viverra mauris dictum
                    suspendisse mi id. Congue ac at dictum vulputate a pellentesque pretium at. Consectetur sodales orci
                    pharetra venenatis ut enim facilisi ornare. Tincidunt nam sed in proin ornare id a accumsan
                    maecenas. Odio lobortis duis molestie sagittis euismod eget. Facilisi arcu aliquet adipiscing neque.
                    Viverra elit morbi adipiscing aliquet dignissim. Congue enim sit nulla ornare neque. Massa lectus
                    dui rhoncus ac tempor quis sagittis purus. Arcu sit lorem at placerat vestibulum vehicula. Neque
                    eget massa euismod est quis nibh a. Ullamcorper massa aliquet dignissim commodo ullamcorper posuere
                    pharetra hac. Ipsum sit augue sit convallis mattis turpis potenti ante aliquam. Semper eu ut ac erat
                    nunc dignissim scelerisque cras. Eget massa purus adipiscing tincidunt. Sit suspendisse ac viverra
                    eget.
                  </p>
                  <img src="images/course.jpg" alt="" />
                  <h3>Urna habitasse imperdiet</h3>
                  <p>
                    Volutpat aliquet eu ut nunc risus massa tortor mattis. Tellus tellus viverra mauris dictum
                    suspendisse mi id. Congue ac at dictum vulputate a pellentesque pretium at. Consectetur sodales orci
                    pharetra venenatis ut enim facilisi ornare. Tincidunt nam sed in proin ornare id a accumsan
                    maecenas.
                  </p>
                  <h3>Quam pharetra aliquam eget</h3>
                  <p>
                    Volutpat aliquet eu ut nunc risus massa tortor mattis. Tellus tellus viverra mauris dictum
                    suspendisse mi id. Congue ac at dictum vulputate a pellentesque pretium at. Consectetur sodales orci
                    pharetra venenatis ut enim facilisi ornare. Tincidunt nam sed in proin ornare id a accumsan
                    maecenas.
                  </p>
                  <h3>Lacus et viverra</h3>
                  <p>
                    Volutpat aliquet eu ut nunc risus massa tortor mattis. Tellus tellus viverra mauris dictum
                    suspendisse mi id. Congue ac at dictum vulputate a pellentesque pretium at. Consectetur sodales orci
                    pharetra venenatis ut enim facilisi ornare. Tincidunt nam sed in proin ornare id a accumsan
                    maecenas.
                  </p>
                </div>
              )}
              {activeTab === 2 && (
                <div data-tab-index="3" className="wrapper__desc" id="tab-3">
                  <Comments />
                </div>
              )}
            </div>
          </div>
          <Aside />
        </div>
      </div>
    </>
  );
};

export default CoursePage;
