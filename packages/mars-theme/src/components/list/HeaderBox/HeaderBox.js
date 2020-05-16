import React from 'react';
import Link from '../../link';
import {
  GlobalContainer,
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
  title, 
  description = "", 
  mode = 'light',
  scroll = "", 
  isArchive = true,
  image="https://i.picsum.photos/id/866/1200/1000.jpg"
}) => {

  return (
    <GlobalContainer>
      <HeaderBoxContainer mode={mode}>
        <DescriptionBox>
          {!isArchive && (
            <Article>Article</Article>
          )}
          <h1>{title}</h1>
          {description != '' && (<p>{description}</p>)}
          {scroll != '' && (
            <Scroll>
              <button />
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
    </GlobalContainer>
  );
}

export default HeaderBox;