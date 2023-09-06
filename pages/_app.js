import { Fragment } from "react";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  const paragraphStyle = {
    backgroundColor: "#ff6666", // Change to a red color code
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    fontSize: "18px",
    lineHeight: "1.5",
    color: "#333",
  };

  const centerTextStyle = {
    textAlign: "center", // Center-align text
  };

  return (
    <Fragment>
      <DefaultSeo
        title="Youtube Thumbnail Downloader"
        description="Download high-quality thumbnails from YouTube videos."
        canonical="https://your-website-url.com"
        openGraph={{
          url: "https://your-website-url.com",
          title: "Youtube Thumbnail Downloader",
          description: "Download high-quality thumbnails from YouTube videos.",
          site_name: "Youtube Thumbnail Downloader",
        }}
      />
      {/* Apply inline styles to the paragraph */}
      <div style={paragraphStyle}>
        <div style={centerTextStyle}> {/* Center-align text */}
          <p>
          Unlock the power of visuals with our YouTube Thumbnail Downloader.
          Captivate your audience with eye-catching thumbnails that make your
          videos stand out. Our user-friendly website makes it effortless to
          access and download YouTube video thumbnails in high resolution.
          Whether you're a content creator looking to enhance your video marketing
          strategy or simply seeking stunning thumbnails for your own videos,
          our tool empowers you to effortlessly grab the perfect image. Elevate
          your YouTube game and create thumbnails that draw viewers in – it's just
          a click away!
          </p>
          <p>
            Download high-quality thumbnails from YouTube videos.
          </p>
        </div>
      </div>
      {/* End of the styled paragraph */}
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
