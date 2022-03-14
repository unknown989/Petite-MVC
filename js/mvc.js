var hostpathname = "";
{
  var tmp = window.location.pathname.split("/");
  hostpathname = tmp.slice(-1);
  if (hostpathname == "") {
    tmp.pop();
    hostpathname = tmp.slice(-1);
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
      var tmp = to.split("/");
      var tto = tmp.slice(-1);
      if (tto == "") {
        tmp.pop();
        tto = tmp.slice(-1);
      }
      const _r = this.routes.find((r) => r.to === "/" + tto[0]);
      return _r;
    }
    return;
  }
}
