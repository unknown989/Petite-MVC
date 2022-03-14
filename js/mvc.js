var hostpathname = "";
{
  var tmp = window.location.pathname.split("/");
  hostpathname = tmp.slice(-1);
  if (hostpathname == "") {
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
    window.addEventListener("historychange",(e) => {
      const root = document.getElementById("root");
      const _route = this.getRouteByPathname(window.location.pathname);
      console.log(_route)
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

    path = `${hostpathname}${path}`;
    console.log(path);
    window.history.pushState({}, "", path);
    dispatchEvent(new Event("historychange"));
  }
  getRouteByPathname(to) {
    if (to) {
      const _r = this.routes.find((r) => r.to === to);
      return _r;
    }
  }
}
