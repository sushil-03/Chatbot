import Options from "./Option";

const GeneralOptions = (props) => {
  const options = [
    {
      name: "Show all details",
      handler: props.actionProvider.handleAll,
      id: 1,
    },
    {
      name: "Show student id",
      handler: props.actionProvider.handleId,
      id: 2,
    },
    {
      name: "Show contact info",
      handler: props.actionProvider.handleContact,
      id: 3,
    },
    {
      name: "Show college detail",
      handler: props.actionProvider.handleCollegeDetail,
      id: 4,
    },
  ];
  return <Options options={options} title="Options" {...props} />;
};

export default GeneralOptions;
