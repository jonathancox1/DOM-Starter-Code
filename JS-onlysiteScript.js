const container = document.getElementById("container");

document.body.style.fontFamily = "sans-serif";

const header = document.createElement("header");
header.style.color = "white";
header.style.backgroundColor = "#65a6f3";
header.style.display = "flex";
header.style.padding = "0 20px";

const heading1 = document.createElement("h1");
heading1.textContent = "HighOnCoding";
heading1.style.paddingRight = "20px";
header.appendChild(heading1);

const topNav = document.createElement("nav");
topNav.style.display = "flex";
topNav.style.alignItems = "center";
header.appendChild(topNav);

const link1 = document.createElement("a");
link1.textContent = "Home";
link1.href = "#";
link1.style.paddingRight = "20px";
link1.style.color = "white";
link1.style.fontWeight = "bold";
link1.style.fontSize = "18px";
link1.style.textDecoration = "none";
topNav.appendChild(link1);

const link2 = document.createElement("a");
link2.textContent = "Categories";
link2.style.fontSize = "18px";
link2.style.textDecoration = "none";
link2.href = "#";
link2.style.color = "white";
topNav.appendChild(link2);

container.appendChild(header);

const grey = document.createElement("div");
container.appendChild(grey);
grey.style.marginLeft = "30px";
grey.style.marginRight = "30px";
grey.style.marginTop = "20px";
grey.style.display = "box";
grey.style.alignItems = "center";
grey.style.backgroundColor = "rgb(221,222,224)";
grey.style.padding = "10px";

const greyHeader = document.createElement("h1");
grey.appendChild(greyHeader);
greyHeader.style.color = "rgb(84 88	94)";
greyHeader.textContent = "Curse of the Current Reviews";
greyHeader.style.paddingLeft = "10px";
greyHeader.style.marginBottom = "30px";

const par1 = document.createElement("p");
grey.appendChild(par1);
par1.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed totam illo pariatur voluptatem. Inventore, asperiores, provident officia nobis mollitia quis adipisci dolor voluptas voluptate aut magni saepe, reprehenderit earum minus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed totam illo pariatur voluptatem. Inventore, asperiores, provident officia nobis mollitia quis adipisci dolor voluptas voluptate aut magni saepe, reprehenderit earum minus";
par1.style.margin = "10px";

const subHead1 = document.createElement("h2");
container.appendChild(subHead1);
subHead1.textContent = "Hello WatchKit";
subHead1.style.fontWeight = "normal";
subHead1.style.marginLeft = "30px";
subHead1.style.marginRight = "30px";
subHead1.style.paddingLeft = "5px";
subHead1.style.color = "rgb(36 103 186)";

const par2 = document.createElement("div");
container.appendChild(par2);
par2.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed totam illo pariatur voluptatem. Inventore, asperiores, provident officia nobis mollitia quis adipisci dolor voluptas voluptate aut magni saepe, reprehenderit earum minus Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed totam illo pariatur voluptatem. Inventore, asperiores, provident officia nobis mollitia quis adipisci dolor voluptas voluptate aut magni saepe, reprehenderit earum minus";
par2.style.marginLeft = "30px";
par2.style.marginRight = "30px";
par2.style.marginBottom = "0px";
par2.style.paddingBottom = "0px";
par2.style.paddingLeft = "5px";

const orange1 = document.createElement("div");
container.appendChild(orange1);
orange1.style.backgroundColor = "rgb(227 146 58)";
orange1.style.color = "white";
orange1.textContent = "12 comments";
orange1.style.fontStyle = "bold";
orange1.style.marginLeft = "30px";
orange1.style.marginRight = "30px";
orange1.style.height = "25px";
orange1.style.display = "flex";
orange1.style.alignItems = "center";
orange1.style.paddingLeft = "10px";

const likes1 = document.createElement("div");
orange1.appendChild(likes1);
likes1.style.marginLeft = "40px";
likes1.style.fontStyle = "bold";
likes1.style.color = "white";
likes1.textContent = "124 likes";

const subHead2 = document.createElement("h2");
container.appendChild(subHead2);
subHead2.textContent = "Introduction To Swift";
subHead2.style.fontWeight = "normal";
subHead2.style.marginLeft = "30px";
subHead2.style.marginRight = "30px";
subHead2.style.paddingLeft = "5px";
subHead2.style.color = "rgb(36 103 186)";

const par3 = document.createElement("div");
container.appendChild(par3);
par3.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed totam illo pariatur voluptatem. Inventore, asperiores, provident officia nobis mollitia quis adipisci dolor voluptas voluptate aut magni saepe, reprehenderit earum minus Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed totam illo pariatur voluptatem. Inventore, asperiores, provident officia nobis mollitia quis adipisci dolor voluptas voluptate aut magni saepe, reprehenderit earum minus";
par3.style.marginLeft = "30px";
par3.style.marginRight = "30px";
par3.style.paddingLeft = "5px";

const orange2 = document.createElement("div");
container.appendChild(orange2);
orange2.style.backgroundColor = "rgb(227 146 58)";
orange2.style.color = "white";
orange2.textContent = "15 comments";
orange2.style.marginLeft = "30px";
orange2.style.marginRight = "30px";
orange2.style.height = "25px";
orange2.style.display = "flex";
orange2.style.alignItems = "center";
orange2.style.paddingLeft = "10px";

const likes2 = document.createElement("div");
orange2.appendChild(likes2);
likes2.style.marginLeft = "40px";
likes2.style.fontStyle = "bold";
likes2.style.color = "white";
likes2.textContent = "45 likes";
