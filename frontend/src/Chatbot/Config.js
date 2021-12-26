import { createChatBotMessage } from "react-chatbot-kit";
// import InforBot  from  "../Chatbat/InfoBot.js"

import Overview from "../widget/Overview";
let config = {
  botName: "InfoBot🤖",
  customStyles: {
    //color of the message written by bot
    botMessageBox: {
      backgroundColor: "red",
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
  // state: {},
  //botAvatar
  // customComponents:{botAvatar:()=><InfoBot/>},
  widgets: [
    {
      widgetName: "overview",
      widgetFunc: (props) => <Overview {...props} />,
      mapStateToProps: ["message"],
    },
  ],
};
export default config;
