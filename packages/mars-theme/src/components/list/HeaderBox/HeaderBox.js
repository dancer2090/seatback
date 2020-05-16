import React from 'react';
import Link from '../../link';
import {
  GlobalContainer,
  Container,
  HeaderBoxContainer,
  DescriptionBox,
  BannerArticlesBox,
  Scroll,
  BannerArticlesContainer,
  BannerArticlesDescription,
  New,
  Article,
} from './styles';

const HeaderBox = ({
  title = "", 
  description = "", 
  scrollRef, 
  isArchive = true,
  image="https://i.picsum.photos/id/866/1200/1000.jpg"
}) => {

  const scrollToRef = () => scrollRef ? window.scrollTo({
    top: scrollRef.current.offsetTop - 150,
    left: 0,
    behavior: 'smooth'
  }) : null;

  const mode = isArchive ? 'light' : 'dark';

  return (
    <GlobalContainer mode={mode}>
      <Container>
        <HeaderBoxContainer>
          <DescriptionBox mode={mode}>
            {!isArchive && <Article>Article</Article>}
            {title != '' && (<h1>{title}</h1>)}
            {description != '' && mode === 'light' && (<p>{description}</p>)}
            {scrollRef && (
              <Scroll mode={mode}>
                <button onClick={() => scrollToRef()} />
              </Scroll>
            )}
          </DescriptionBox>
          <BannerArticlesBox>
            <BannerArticlesContainer imgSrc={image}>
              {isArchive && (
                <>
                  <New>New</New>
                  <BannerArticlesDescription>
                    <div>
                      <h3>Article header</h3>
                      <p>9 min read</p>                      
                      <Link to="/">
                        <button />
                      </Link>
                    </div>
                  </BannerArticlesDescription>
                </>
              )}
            </BannerArticlesContainer>
          </BannerArticlesBox>
        </HeaderBoxContainer>
      </Container>
    </GlobalContainer>
  );
}

export default HeaderBox;