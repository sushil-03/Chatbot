class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }
  parse(message) {
    message = message.toLowerCase();

    // if (
    //   message.include("options") ||
    //   message.include("info") ||
    //   message.include("help")
    // ) {
    //   return this.actionProvider.handleOptions({ withAvatar: true });
    // }

    this.actionProvider.handleOptions({ withAvatar: true });
  }
}
export default MessageParser;
