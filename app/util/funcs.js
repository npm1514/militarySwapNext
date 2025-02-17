export const linkToTitle = (link) => {
    if(!link) return "";
    const spaceNotDash = link.split("-").join(" ")
    const titleCase = spaceNotDash.replace(
        /\w\S*/g,
        text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
      );

    return titleCase.split("And").join("&");
}

export const titleToLink = (title) => {
    return title.split(" ").join("-").split("&").join("and").toLowerCase();
}