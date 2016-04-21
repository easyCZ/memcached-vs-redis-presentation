import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

export default class Splash extends React.Component {

  render() {
    return (
      <Slide transition={["zoom"]} bgColor="primary">
        <Heading size={1} fit caps lineHeight={1} textColor="black">
          Spectacle
        </Heading>
        
      </Slide>
    )
    return (
      <Slide transition={["zoom"]} bgColor="primary">
        <Heading fit caps>Memcached vs Redis</Heading>
        <Heading>Benchmarking In Memory Caches</Heading>
      </Slide>
    )
  }

}
