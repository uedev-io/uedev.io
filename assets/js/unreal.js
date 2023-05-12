function copyToClipboard(text)
{
	navigator.clipboard.writeText(text);
}

function copyFigureCode(element)
{
	const codeBlocks = element.parentNode.parentNode.getElementsByTagName('code')
	if (codeBlocks.length > 0)
	{
		navigator.clipboard.writeText(codeBlocks[0].innerText);
		element.innerText = "Copied!";
	}
}

//window.onscroll = function() {scrollFunction()};
//function scrollFunction() {
  //if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    //document.getElementById("page__hero").style.height = "0px"
  //} else {
    //document.getElementById("page__hero").style.height = "auto";
  //}
//}
