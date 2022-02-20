class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }
  parse(message) {
    message = message.toLowerCase();

    if (message.includes("options") || message.includes("info")) {
      return this.actionProvider.handleOptions({ withAvatar: true });
    } else if (message.includes("all") || message.includes("details")) {
      return this.actionProvider.handleAll({ withAvatar: true });
    } else if (message.includes("id") || message.includes("student id")) {
      return this.actionProvider.handleId({ withAvatar: true });
    } else if (message.includes("roll") || message.includes("student roll")) {
      return this.actionProvider.handleRoll({ withAvatar: true });
    } else if (message.includes("contact")) {
      return this.actionProvider.handleContact({ withAvatar: true });
    } else if (message.includes("college")) {
      return this.actionProvider.handleCollegeDetail({ withAvatar: true });
    } else if (
      message.includes("joke") ||
      message.includes("jokes") ||
      message.includes("funny")
    ) {
      return this.actionProvider.handleJoke();
    } else if (message.includes("thanks") || message.includes("thank you")) {
      return this.actionProvider.handleThanks();
    }

    this.actionProvider.handleOptions({ withAvatar: true });
  }
}
export default MessageParser;
