export const getSortedData = (eventList, sortBy) => {
  switch (sortBy) {
    case "NEAREST_TO_FURTHEST":
      return eventList.sort((a, b) => a.startDate - b.startDate);

    case "FURTHEST_TO_NEAREST":
      return eventList.sort((a, b) => b.startDate - a.startDate);

    case "none":
      return eventList;

    default:
      console.log("something is wrong with getSortedDate...");
      return eventList;
  }
};
