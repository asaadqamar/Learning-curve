function customRender(imgElement) {
  const domElement = document.createElement(imgElement.type);
  for (const prop in imgElement.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, imgElement.props[prop]);
  }
  domElement.innerHTML = imgElement.Children;
  container.appendChild(domElement);
}

const imgElement = {
  type: "img",
  props: {
    src: "./image.jpg",
    alt: "User Image",
  },
  Children: "See image",
};

const container = document.getElementById("root");

customRender(imgElement, container);
