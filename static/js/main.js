
document.addEventListener('DOMContentLoaded', (event) => {
        const toggleButton = document.getElementById('toggle-dark-mode');
        
        // Load the saved theme from local storage
        const savedTheme = localStorage.getItem('theme');

        // find the document stylesheet with href="*css/dark.css"
        // let darkCSS = null;
        const darkCSS = Array.from(document.styleSheets).find(s => s.href && s.href.includes('dark.css'));

        if (savedTheme) {
            if (savedTheme === 'dark.css') {
                darkCSS.disabled = false;
            } else {
                darkCSS.disabled = true;
            }
        }
      
        // Toggle the theme on button click
        toggleButton.addEventListener('click', function() {
            console.log('clicked toggle');
            if (darkCSS.disabled) {
                darkCSS.disabled = false;
                localStorage.setItem('theme', 'dark.css'); // Save the preference
            } else {
                darkCSS.disabled = true;
                localStorage.setItem('theme', 'main.css'); // Save the preference
            }
        });
      });


function setColorScheme() {
    const darkCSS = Array.from(document.styleSheets).find(s => s.href && s.href.includes('dark.css'));
    // use local storage to override OS theme settings
    if (localStorage.getItem("theme")) {
        darkCSS.media.mediaText = "";
        if (localStorage.getItem("theme") === "dark.css") {
            darkCSS.disabled = false;
        } else {
            darkCSS.disabled = true;
        }
    }
    // otherwise, use OS theme settings
}

// determines if the user has a set theme
// function detectColorScheme(){
//     var theme="light";    //default to light

//     //local storage is used to override OS theme settings
//     if(localStorage.getItem("theme")){
//         if(localStorage.getItem("theme") == "dark"){
//             var theme = "dark";
//         }
//     } else if(!window.matchMedia) {
//         //matchMedia method not supported
//         return false;
//     } else if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
//         //OS theme setting detected as dark
//         var theme = "dark";
//     }

//     //dark theme preferred, set document with a `data-theme` attribute
//     if (theme=="dark") {
//          document.documentElement.setAttribute("data-theme", "dark");
//     }
// }

// document.addEventListener('DOMContentLoaded', (event) => {
//         const toggleButton = document.getElementById('toggle-dark-mode');
//         const theme = localStorage.getItem('theme');
        
//         // Toggle the theme on button click
//         toggleButton.addEventListener('click', function() {
//             console.log('clicked toggle');
//             var newTheme = 'dark';
//             if (localStorage.getItem('theme') === 'dark') {
//                 localStorage.setItem('theme', 'light'); // Save the preference
//                 newTheme = 'light';
//             } else {
//                 localStorage.setItem('theme', 'dark'); // Save the preference
//             }
//             document.documentElement.setAttribute("data-theme", newTheme);
//         });
//       });


$(document).ready(function () {
    console.log('hello');
    $('h2').each((idx, val) => {
        var id = $(val).attr('id');
        if (id) {
            $(val).html(
                `<a href=#${id} aria-hidden="true" class="header-anchor">#</a>${$(val).text()}`
            );
            // $(val).contents().wrap(`<a href=#${id} aria-hidden="true" class="header-anchor"></a>`);
        }
    });
    // detectColorScheme();
    setColorScheme();

})

// module.exports = function (api) {
//     api.cache(true);
//     const presets = [
//       ["@babel/preset-react"]
//       ]
//     const plugins = [];
//     return {
//       presets,
//       plugins
//     };
//   }
