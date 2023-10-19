type DeadlineProps = {
  deadline: Date;
};

const Deadline = (props: DeadlineProps) => {
  const today = new Date();
  const diffTime = props.deadline.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  let bubbleText = `Due: ${diffDays} days`;
  let bubbleColor = "gray";

  if (diffDays === 1) {
    bubbleText = "Tomorrow";
    bubbleColor = "red";
  } else if (diffDays < 0) {
    bubbleText = `Deadline expired ${Math.abs(diffDays)} days ago`;
    bubbleColor = "gray";
  }

  return (
    <div
      style={{
        backgroundColor: bubbleColor,
        color: "white",
        padding: "5px",
        borderRadius: "15%",
        width: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {bubbleText}
    </div>
  );
};

export default Deadline;
