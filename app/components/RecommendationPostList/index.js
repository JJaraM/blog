/**
 * Copyright (c) 2021 Jonathan Jara
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Container from '../Container';
import BigLeftContent from '../BigLeftContent';
import ImageCardDivider from '../../ui/CardItem/ImageCardDivider';
import CardImage from '../../ui/CardItem/CardImage';
import CardImageTag from '../../ui/CardItem/CardImageTag';
import ImageCardInfoContainer from '../../ui/CardItem/ImageCardInfoContainer';
import ImageCardInfoTitle from '../../ui/CardItem/ImageCardInfoTitle';
import ImageCardInfoMetadata from '../../ui/CardItem/ImageCardInfoMetadata';
import ImageCardInfoDescription from '../../ui/CardItem/ImageCardInfoDescription';
import ImageCardItem from '../../ui/CardItem';
import ImageCardList from '../../ui/CardItem/ImageCardList';
import SmallRightContent from '../SmallRightContent';
import { api, canRender } from '../../configuration/config';
import ImageCardInfoRefresh from '../../ui/CardItem/ImageCardInfoRefresh';
import RenderComponent from '../RenderComponent';

/**
 * Component that is going to return a div with two columns where in the left side you will be able to see the first 2
 * posts, and in the right section you are going to see a max of 4 items per page.
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function RecommendationPostList(props) {
  const { items, status } =  props;
  const ITEM_KEY = 'recommendation-post-list-image-card-item-';

  return (
    <Container>
      <BigLeftContent>
        <ImageCardList size={2} start={0} items={ items } status={ status } itemKey={ITEM_KEY} onEach={(item, key, loading) => (
          <ImageCardItem key={key} refresh={item.refresh}>
            <ImageCardDivider>
              <CardImage href={`${api.paths.postPage}${item.id}`} image={item.image} loading={loading}>
                <CardImageTag tag={item.views} loading={loading} />
              </CardImage>
            </ImageCardDivider>
            <ImageCardDivider>
              <ImageCardInfoContainer>
                <ImageCardInfoTitle title={item.title} href={`${api.paths.postPage}${item.id}`} loading={loading} />
                <ImageCardInfoMetadata date={item.updateDate} loading={loading} />
                <ImageCardInfoDescription description={item.description} />
                <ImageCardInfoRefresh refresh={item.refresh} />
              </ImageCardInfoContainer>
            </ImageCardDivider>
          </ImageCardItem>
        )}/>
      </BigLeftContent>

      <SmallRightContent>
        <RenderComponent render={canRender(status)}>
          { props.pagination }
        </RenderComponent>
        <ImageCardList size={4} start={2} items={ items } status={ status } itemKey={ITEM_KEY} onEach={(item, key, loading) => (
          <ImageCardItem key={key} refresh={item.refresh}>
            <ImageCardDivider>
              <CardImage href={`${api.paths.postPage}${item.id}`} image={item.image} loading={loading}>
                <CardImageTag tag={item.views} loading={loading} />
              </CardImage>
            </ImageCardDivider>
            <ImageCardDivider>
              <ImageCardInfoContainer>
                <ImageCardInfoTitle title={item.title} href={`${api.paths.postPage}${item.id}`} loading={loading} />
                <ImageCardInfoMetadata date={item.updateDate} loading={loading} />
                <ImageCardInfoRefresh refresh={item.refresh} />
              </ImageCardInfoContainer>
            </ImageCardDivider>
          </ImageCardItem>
        )}/>

      </SmallRightContent>
    </Container>
  );
}

RecommendationPostList.propTypes = {
  status: PropTypes.number,
  error: PropTypes.any,
  pagination: PropTypes.node,
  items: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

export default memo(RecommendationPostList);
