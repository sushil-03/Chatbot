class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }
  handleOptions = () => {
    console.log(" handleOptions");
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
    console.log("handleAll");
    const message = this.createChatBotMessage("Here are your all detail", {
      widget: "details",
      loading: true,
      terminateLoading: true,
    });
    this.addMessageToState(message);
  };

  handleId = () => {
    console.log("Handling id");
    const message = this.createChatBotMessage("Here is your student id", {
      widget: "id",
      loading: true,
      terminateLoading: true,
    });
    this.addMessageToState(message);
  };
  handleRoll = () => {
    console.log("Handling Roll");
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
    console.log("Handling Contact");
    const message = this.createChatBotMessage("Here is your Contact Info", {
      widget: "contact",
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
