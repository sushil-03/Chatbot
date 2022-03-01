class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }
  handleOptions = () => {
    const message = this.createChatBotMessage(
      "How can I help you? Below are some possible options.",
      {
        widget: "overview",
        loading: true,
        terminateLoading: true,
      }
    );
    this.addMessageToState(message);
  };

  handleAll = () => {
    const message = this.createChatBotMessage("Here are your all details", {
      widget: "details",
      loading: true,
      terminateLoading: true,
    });
    this.addMessageToState(message);
  };

  handleId = () => {
    const message = this.createChatBotMessage("Here is your student id", {
      widget: "id",
      loading: true,
      terminateLoading: true,
    });
    this.addMessageToState(message);
  };
  handleRoll = () => {
    const message = this.createChatBotMessage(
      "Here is your student roll number",
      {
        widget: "roll",
        loading: true,
        terminateLoading: true,
      }
    );
    this.addMessageToState(message);
  };
  handleContact = () => {
    const message = this.createChatBotMessage("Here is your Contact Info", {
      widget: "contact",
      loading: true,
      terminateLoading: true,
    });
    this.addMessageToState(message);
  };
  handleJoke = () => {
    const message = this.createChatBotMessage("Testing Joke", {
      widget: "joke",
      loading: true,
      terminateLoading: true,
    });
    this.addMessageToState(message);
  };
  handleCollegeDetail = () => {
    const message = this.createChatBotMessage("Here is your College Details", {
      widget: "college",
      loading: true,
      terminateLoading: true,
    });
    this.addMessageToState(message);
  };
  addMessageToState = (message) => {
    this.setState((state) => ({
      ...state,
      messages: [...state.messages, message],
    }));
  };
}
export default ActionProvider;
