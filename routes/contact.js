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
                    <h1>Ways to contact me</h1>
                </div>
                <div class="body">
                    <div class="card">
                        <h1>GitHub</h1>
                        <p><a href="https://github.com/unknown989/">unknown989</a></p>
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffindicons.com%2Ffiles%2Ficons%2F2779%2Fsimple_icons%2F2048%2Fgithub_2048_black.png&f=1&nofb=1" width=128></img>
                    </div>
                    <div class="card">
                        <h1>Instagram</h1>
                        <p><a href="https://instagram.com/the.alchemist.man/">@the.alchemist.man</a></p>
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fa%2Fa5%2FInstagram_icon.png&f=1&nofb=1" width=128>
                    </div>
                    <div class="card">
                        <h1>LinkedIn</h1>
                        <p><a href="https://www.linkedin.com/in/omar-mouttaki-bb0978144/?lipi=urn%3Ali%3Apage%3Aprofile_common_profile_index%3B97cecad5-132b-48cd-9a21-d8a517c5f00b">...</a></p>
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.keesingtechnologies.com%2Fwp-content%2Fuploads%2F2018%2F07%2FLinkedin-Icon.png&f=1&nofb=1" width=128>
                    </div>
                </div>
            </div>`;
    }
    