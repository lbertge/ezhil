// document.querySelectorAll("pre > code[class^='language']").forEach(function (codeBlock) { 
//     var button = document.createElement('button'); //     button.className = 'copy-code-button'; //     button.type = 'button';
//     button.className = 'copy-code-button'; 
//     button.innerText = 'copy';

//     codeBlock.insertBefore(button, codeBlock.firstChild);
//     var pre = codeBlock.parentNode;
// });

// if query selector returns no results 

$(document).ready(function () {
    // if we're using line numbers, use this selector
    // TODO this isn't complete
    if(document.querySelectorAll("div.highlight > div.chroma").length > 0 ) {
        document.querySelectorAll("div.highlight > div.chroma").forEach(function (codeBlock) { 
            var button = document.createElement('button'); 
            button.className = 'copy-code-button'; 
            button.type = 'button';
            button.innerText = 'copy';

            codeBlock.insertBefore(button, codeBlock.firstChild);
        });
    } else { // if we're not using line numbers
        document.querySelectorAll("pre > code").forEach(function (codeBlock) { 
            var button = document.createElement('button'); 
            button.className = 'copy-code-button'; 
            button.type = 'button';
            button.innerText = 'copy';

            codeBlock.parentNode.insertBefore(button, codeBlock);

            function copyingDone() {
                button.blur();
                button.innerText = 'copied!';
                setTimeout(function () {
                    button.innerText = 'copy';
                }, 2000);
            }

            button.addEventListener('click', function () {
                var range = document.createRange();
                range.selectNode(codeBlock);
                window.getSelection().addRange(range);

                try {
                    var successful = document.execCommand('copy');
                    if (!successful) {
                        throw successful;
                    }
                    copyingDone();
                } catch (err) {
                    console.log('unable to copy');
                }

                window.getSelection().removeAllRanges();
            });

        }
        )
    }
})