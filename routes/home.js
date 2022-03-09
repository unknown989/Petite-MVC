export default function Home() {
return `
        <style>
        .title{
            width:100%;
            background-color:#ccc;
            display:flex;
            justify-content:center;
            align-items:center;
            color:aliceblue;
        }
        h1{
            font-family:Roboto;
            font-weight:300;
        }
        p{
            font-family:Roboto;
        }
        
        .body{
            display:grid;
            grid-template-columns: repeat(1, 40%);
            justify-content:center;
            align-items:center;            
            margin-top:1em;

        }
        .card{
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            text-align:center;
            border-radius:100px;
            margin:10px;
            padding:10px;
            background:#eee;
            box-shadow:0px 3px 7px #00000033;
        }
        </style>
        <div style="width:100%">
            <div class="title">
                <h1>This is the home page</h1>
            </div>
            <div class="body">
                <div class="card">
                    <h1>MVC Framework</h1>
                    <p>Petite MVC Framework inspired by React</p>
                    <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ficons.iconarchive.com%2Ficons%2Fgoogle%2Fnoto-emoji-people-bodyparts%2F1024%2F12008-thumbs-up-icon.png&f=1&nofb=1" width=128></img>
                </div>
                <div class="card">
                    <h1>Fun Facts</h1>
                    <p>it was built in 3 hours, just right as I came back from school</p>
                    <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F1061%2F1924%2Fproducts%2F7_grande.png%3Fv%3D1571606116&f=1&nofb=1" width=128>
                </div>
                <div class="card">
                    <h1>Creator</h1>
                    <p><a href="https://github.com/unknown989/">unknown989</a></p>
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F1061%2F1924%2Fproducts%2F48_grande.png%3Fv%3D1571606117&f=1&nofb=1" width=128>
                </div>
            </div>
        </div>`;
}
