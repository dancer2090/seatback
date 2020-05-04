import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./Header";
import List from "./list";
import Home from "./home";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.

  const data = state.source.get(state.router.link);

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />

      {/* Add the header of the site. */}
      <SiteContainer>
        <Header />

        {/* Add the main section. It renders a different component depending
        on the type of URL we are in. */}
        <Switch>
          <Loading when={data.isFetching} />          
          <Home when={data.isHome} />
          <Post when={data.isPostType} />
          <List when={data.isArchive} />
          <PageError when={data.isError} />
        </Switch>
      </SiteContainer>
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  box-sizing: border-box;
  padding: 0;
  *, *:after, *:before {
    box-sizing: border-box;
  }
  body {
    margin: 0 auto;
    font-weight: 400;
    font-family: Montserrat, sans-serif;
  }
  button, input {
    font-weight: 400;
    font-family: Montserrat, sans-serif;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;

const SiteContainer = styled.div`
  width: 100%;
  /* overflow-x: hidden; */
`;