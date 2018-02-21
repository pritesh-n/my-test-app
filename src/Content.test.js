import renderer from 'react-test-renderer';
import Content from './Content';
import Card from './Card';
import React from 'react';
import { mount } from 'enzyme';

describe("Card", () => {
  let props;
  let mountedCard;
  const card = () => {
    if (!mountedCard) {
      mountedCard = mount(
        <Card {...props} />
      );
    }
    return mountedCard;
  }
    let mountedContent;
    const content = () => {
      if (!mountedContent) {
        mountedContent = mount(
          <Content />
        );
      }
      return mountedContent;
    }

  beforeEach(() => {
    props = {
      title: "milky way",
      link: undefined
    };
    mountedCard = undefined;
    mountedContent = undefined;
  });
  
  // All tests will go here

  it("has title milky way", () => {
    const myCard = content().find(Card);
    expect(myCard.props().title).toBe(props.title);
  });

});