import { createChatBotMessage } from "react-chatbot-kit";
import Contact from "../widget/Contact";
import Details from "../widget/Details";
import Id from "../widget/Id";
import Roll from "../widget/Roll";
import Joke from "../widget/Joke.js";
import Overview from "../widget/Overview";
import College from "../widget/College";

let config = {
  botName: "InfoBot🤖",
  customStyles: {
    botMessageBox: {
      backgroundColor: "darkgray",
      // fontColor:"white"
    },
    chatButton: {
      backgroundColor: "white",
    },
  },
  initialMessages: [
    createChatBotMessage("Hi I'm here to provide your student detail!"),
    createChatBotMessage("Here's a quick overview what may be you searching.", {
      withAvatar: false,
      delay: 400,
      widget: "overview",
    }),
  ],
  state: {},

  widgets: [
    {
      widgetName: "overview",
      widgetFunc: (props) => <Overview {...props} />,
      mapStateToProps: ["message"],
    },
    {
      widgetName: "details",
      widgetFunc: (props) => <Details {...props} />,
    },
    {
      widgetName: "id",
      widgetFunc: (props) => <Id {...props} />,
    },
    {
      widgetName: "roll",
      widgetFunc: (props) => <Roll {...props} />,
    },
    {
      widgetName: "contact",
      widgetFunc: (props) => <Contact {...props} />,
    },
    {
      widgetName: "joke",
      widgetFunc: (props) => <Joke {...props} />,
    },
    {
      widgetName: "college",
      widgetFunc: (props) => <College {...props} />,
    },
  ],
};
export default config;
