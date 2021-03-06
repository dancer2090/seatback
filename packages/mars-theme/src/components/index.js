import React, {useEffect} from 'react';
import {
  Global,
  connect,
  Head,
} from 'frontity';
import Switch from '@frontity/components/switch';
import Header from './Header';
import List from './list';
import Home from './home';
import Post from './post';
import Loader from './Loader';
import Title from './title';
import PageError from './page-error';
import Footer from './Footer';
import { globalStyles, SiteContainer } from './globalStyles';

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  const data = state.source.get(state.router.link);
  const post1 = ((state.source[data.type] && state.source[data.type][data.id]) ? state.source[data.type][data.id] : {});
  const { acf={} } = post1;
  const {
    footer_background_color : footerBg = "#ffffff",
    footer_circle_color : footerCircleBg = "#F5F6FA",
  } = acf;
  const res_footerBg = (footerBg=="") ? "#ffffff" : footerBg;
  const res_footerCircleBg = (footerCircleBg=="") ? "#F5F6FA" : footerCircleBg;

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>

      {/* Add some global styles for the whole site, like body or a's.
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />

      {/* Add the header of the site. */}
      <SiteContainer>
        <Header data={data} />
        {/* Add the main section. It renders a different component depending
        on the type of URL we are in. */}
        <Switch>
          <Loader when={data.isFetching} />
          <Home when={data.isHome} />
          <Post when={data.isPostType} />
          <List when={data.isArchive} />
          <PageError when={data.isError} />
        </Switch>
        {data.isReady && <Footer bgColor={res_footerBg} circleColor={res_footerCircleBg} />}
      </SiteContainer>
    </>
  );
};

export default connect(Theme);
