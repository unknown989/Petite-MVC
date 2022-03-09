class MVC{

    constructor(){
        this.routes = [];
        const alinks = document.getElementsByClassName("link");
        [...alinks].forEach((alink)=>{
            alink.addEventListener("click",(e)=>{
                e.preventDefault();
                const _route = this.routes.find((r)=>r.to === alink.getAttribute("to"));
                this.changeURL(_route.to);
            })
        })
        window.onpopstate = (e)=>{
            const root = document.getElementById("root");
            const _route = this.getRouteByPathname(window.location.pathname);
            root.innerHTML = _route.path();
        };
        window.onload = ()=>{dispatchEvent(new Event("popstate"))}
        
    };
    addRoute(name,to,path){
        this.routes.push({name:name,to:to,path:path});
    };
    changeURL(pathname){
        window.history.pushState({},'',pathname);
        dispatchEvent(new Event("popstate"))
    };
    getRouteByPathname(to){
        if(to){
            const _r = this.routes.find((r)=>r.to === to);
            return _r;
        }
    };

}