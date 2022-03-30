'use strict'
var hostpathname = "";
const removeindexpage = (arr) => {
  // TO AVOID INDEX.HTML CONFLICTS
  var indexpath = arr.findIndex((t) => t.indexOf("index") > -1);
  if (indexpath > -1) {
    arr.splice(indexpath, 1);
  }
};
{
  var tmp = window.location.pathname.split("/");
  removeindexpage(tmp);

  hostpathname = tmp.slice(-1)[0];
  if (hostpathname == "") {
    tmp.pop();
    hostpathname = tmp.slice(-1)[0];
  }
}
class MVC {
  constructor() {
    this.routes = [];
    const alinks = document.getElementsByClassName("link");
    [...alinks].forEach((alink) => {
      alink.addEventListener("click", (e) => {
        e.preventDefault();
        const _route = this.routes.find(
          (r) => r.to === alink.getAttribute("to")
        );
        this.changeURL(_route.to);
      });
    });
    window.addEventListener("historychange", (e) => {
      const root = document.getElementById("root");
      const _route = this.getRouteByPathname(window.location.pathname);
      root.innerHTML = _route.path();
    });
    window.onload = () => {
      dispatchEvent(new Event("historychange"));
    };
  }
  addRoute(name, to, path) {
    this.routes.push({ name: name, to: to, path: path });
  }
  getRoutes() {
    return this.routes;
  }
  changeURL(pathname) {
    var path = pathname;
    if (path[0] !== ".") {
      path = path[0] === "/" ? "." + path : "./" + path;
    }

    window.history.pushState({}, "", path);
    dispatchEvent(new Event("historychange"));
  }
  getRouteByPathname(to) {
    if (to) {
      // TO AVOID INDEX.HTML CONFLICTS
      if (to.indexOf("index.") > -1) {
        to = "/";
      }
      var tto = to.replace("/", "").replace(hostpathname, "");
      const _r = this.routes.find((r) => r.to.includes(tto));
      return _r;
    }
    return;
  }
}
