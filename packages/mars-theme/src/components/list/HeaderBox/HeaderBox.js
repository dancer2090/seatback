import React from 'react';
import { connect } from "frontity";
import Link from '../../link';
import Button from '../../Button';
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
  HeaderFooter,  
} from './styles';

const HeaderBox = ({
  title = "", 
  description = "", 
  scrollRef, 
  isArchive = true,
  image="https://i.picsum.photos/id/866/1200/1000.jpg",
  postObj={title:"",read:"",link:""},
  template="standart",
  button={},
  type_header="",
  libraries,
  bg_size="cover",
  offset = 100,
  mode=null,
  bgColor=null,
}) => {

  const scrollToRef = () => {
    scrollRef ? window.scrollTo({
      top: scrollRef.current.offsetTop - offset,
      left: 0,
      behavior: 'smooth'
    }) : null;
  }

  const selectedMode = mode ? mode : isArchive ? 'light' : 'dark';

  const Html2React = libraries.html2react.Component;

  return (
    <GlobalContainer bgColor={bgColor} mode={selectedMode} type_header={type_header}>
      <Container>
        <HeaderBoxContainer type_header={type_header}>
          <DescriptionBox type_header={type_header} mode={selectedMode}>
            {(template==="standart" || !isArchive) && <Article>Article</Article>}
            {title != '' && (<h1><Html2React html={title} /></h1>)}
            {description !== '' && (
              <p>
                {description}
              </p>
            )}
              <HeaderFooter>
              {scrollRef && (
                <Scroll mode={selectedMode}>
                  <button onClick={() => scrollToRef()} />
                </Scroll>
              )}
              
              {Object.keys(button).length>0 && (
                <>
                  {template !== "page-plan.php" ? (
                    <Link link={button.url}>
                      <Button mode={bgColor==="#F5F6FA" ? 'dark' : 'light'} block >
                        {button.title}
                      </Button>
                    </Link>
                  ) : (
                    <Button block mode={bgColor==="#F5F6FA" ? 'dark' : 'light'} onClick={() => scrollToRef()}>
                      {button.title}
                    </Button>
                  )}
                </>
              )}
              </HeaderFooter>
          </DescriptionBox>
          <BannerArticlesBox>
            <BannerArticlesContainer imgSrc={image} bg_size={bg_size}>
              {(template === "standart" && isArchive) && (
                <>
                  <New>New</New>
                  <BannerArticlesDescription>
                    <div>
                      <h3>
                        <Link link={postObj.link}>
                          {postObj.title}
                        </Link>
                       </h3>
                      <p>{postObj.read} min read</p>                      
                      <Link link={postObj.link}>
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

export default connect(HeaderBox);