import React, { useEffect } from 'react';
import { connect } from "frontity";
import Background from './Background';
import Background2 from './Background2';
import Background3 from './Background3';
import Button from '../../Button';
import Link from "../../link";
import Wow from './../../Wow';

import { 
  Container,
  Title,
  SubTitle,
  DescriptionParagraph,
  Action,
  Image,
  GlobalContainer,
} from './styles';


function parseURL(url) {
  var parser = document.createElement('a'),
      searchObject = {},
      queries, split, i;
  // Let the browser do the work
  parser.href = url;
  // Convert query string to object
  queries = parser.search.replace(/^\?/, '').split('&');
  for( i = 0; i < queries.length; i++ ) {
      split = queries[i].split('=');
      searchObject[split[0]] = split[1];
  }
  return {
      protocol: parser.protocol,
      host: parser.host,
      hostname: parser.hostname,
      port: parser.port,
      pathname: parser.pathname,
      search: parser.search,
      searchObject: searchObject,
      hash: parser.hash
  };
}
const Description = ({state, actions, libraries}) => {
  // ?animation=second
  console.log(state);
  if (state.frontity.rendering === 'csr') {

    console.log(parseURL(state.router.link));
  }
  const urlObject = state.frontity.rendering === 'csr' ? parseURL(state.router.link) : {};
  const aminationType = urlObject.searchObject && urlObject.searchObject.animation ? urlObject.searchObject.animation : 'first';

  const data_p = state.source.get(state.router.link);
  const post = state.source[data_p.type][data_p.id];

  const acf_blocks = post.acf.blocks;

  const Html2React = libraries.html2react.Component;

  return (
    <GlobalContainer>
      {acf_blocks.map(d => {
        return (
          <Container key={d.header} alignImage={d.alignImage}>
            <Wow offset={-300} animation='slideUp'>
              {d.header.length>0 &&
                <Title alignImage={d.alignImage}>
                  {d.header}
                </Title>
              }
            </Wow>
            {/* <Wow offset={-300} animation='fadeIn'> */}
              {d.image.url.length>0 &&
                <Image alignImage={d.alignImage}>
                    {d.animated &&
                      <>
                      {aminationType === 'first' && <Background alignImage={d.alignImage} reverse={d.alignImage === 'right'} />}
                      {aminationType === 'second' && <Background2 alignImage={d.alignImage} reverse={d.alignImage === 'right'} />}
                      {aminationType === 'third' && <Background3 alignImage={d.alignImage} reverse={d.alignImage === 'right'} />}
                        <img src={d.image.url} width={660} className="card2" alt="image" />
                        {/* <img src={d.bg.url} width={660} alt="image" className="card1" /> */}
                      </>
                    }
                    {!d.animated &&
                      <>
                        <img src={d.image.url} width={660} alt="image" />
                      </>
                    }
                </Image>
              }
            {/* </Wow> */}
            <Wow offset={-150} animation='slideUp'>
              <div>
                {d.thumbnail.length>0 &&
                  <SubTitle alignImage={d.alignImage}>
                    {d.thumbnail}
                  </SubTitle>
                }
                {d.text.length>0 &&
                  <DescriptionParagraph alignImage={d.alignImage}>
                    <Html2React html={d.text} />
                  </DescriptionParagraph>
                }
                <Action>
                  {d.link.url && d.link.url !== '' && (
                    <Link link={d.link.url}>
                      <Button>{d.link.title}</Button>
                    </Link>
                  )}
                </Action>
              </div>
            </Wow>
          </Container>
        );
      })}
    </GlobalContainer>
  );
}

export default connect(Description);