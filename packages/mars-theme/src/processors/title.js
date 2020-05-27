import Parser from 'html-react-parser';


/**
 * This processor replaces [GREEN]...[/GREEN] tags to span HTML tag
 */
const title = {
  name: "title",
  priority: 8,
  test: ({ node }) => node.type === 'text' && node.content.indexOf('[GREEN]') !== -1,
  ignore: true,
  processor: ({ node }) => {
    const myContent = node.content.replace(/\[GREEN\]/g, '<span>').replace(/\[\/GREEN\]/g, '</span>');
    node.content = (Parser(myContent));
    return node;
  }
};

export default title;