const onLoad = () => {
  var invitee = {
    name: "Kauling, Dylan",
    readingThis: true,
    response: "On my way!",
  };
  if (invitee.readingThis) {
    return invitee.response;
  } else {
    return "9001";
  }
}
