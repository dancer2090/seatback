import React from 'react';
import { connect } from 'frontity';
import Link from '../../link';
import {
  ItemBox,
  ItemContentBox,
  ItemDescriptionBox,
  Date,
  Author,
  AuthorName,
  AuthorImage,
  ClickBox
} from './styles';

const ListItem = ({ 
  link = '/',
  actions,
  imageSrc="https://i.picsum.photos/id/866/1200/1000.jpg",
  title="Article Headline",
  minRead="9 min read",
  date="10.04.2020",
  authorName="Laura Croft",
  authorImage="https://i.picsum.photos/id/866/1200/1000.jpg"
 }) => {

  const followArticle = (link) => {
      actions.router.set(link);
      window.scrollTo(0, 0);
  }
  return (
    <ItemBox>
      <ItemContentBox background={imageSrc}>
        <ClickBox onClick={() => followArticle(link)} />
        <ItemDescriptionBox>
          <div>
            <Date>{date}</Date>
            <h2><Link link={link}>{title}</Link></h2>
            <p>{minRead}</p>
            <Author>
              <AuthorImage background={authorImage} />
              <AuthorName>
                {authorName}
              </AuthorName>
            </Author>
          </div>
        </ItemDescriptionBox>
      </ItemContentBox>
    </ItemBox>
  );
}

export default connect(ListItem);