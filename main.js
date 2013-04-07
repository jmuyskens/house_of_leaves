// adapted from code by www.chirp.com.au
var house = function() 
{
    var targetNode = document;
    
    var houseRegex = new RegExp("\\b(house)\\b", "i");
    var minotaurRegex = new RegExp("\\b(minotaur)\\b","i")
    var wordColor = [];
    var colorIdx = 0;

    var walk = function(node) 
    {
        console.log(node);
        if (!node)
            return;
        blue(node);
	red(node);
        node = node.firstChild;
        while (node) {
            
            walk(node);
            node = node.nextSibling;
        }
    };
    
    
    var blue = function(node) 
    {

	if (node.parentNode && node.parentNode.nodeName == "EM") return;
	
        if (node.nodeType == 3) 
        {
            if ((nv = node.nodeValue) && (regs = houseRegex.exec(nv))) 
            {
                var match = document.createElement("EM");
                match.appendChild(document.createTextNode(regs[0]));
                match.style.fontStyle = "inherit";
                match.style.color = "#063f9b";
                
                var after = node.splitText(regs.index);
                after.nodeValue = after.nodeValue.substring(regs[0].length);
                node.parentNode.insertBefore(match, after);
            }
        }
    };
    var red = function(node) 
    {

	if (node.parentNode && node.parentNode.nodeName == "EM") return;
	
        if (node.nodeType == 3) 
        {
            if ((nv = node.nodeValue) && (regs = minotaurRegex.exec(nv))) 
            {
                var match = document.createElement("EM");
                match.appendChild(document.createTextNode(regs[0]));
                match.style.fontStyle = "inherit";
                match.style.color = "red";
                
                var after = node.splitText(regs.index);
                after.nodeValue = after.nodeValue.substring(regs[0].length);
                node.parentNode.insertBefore(match, after);
            }
        }
    };
    walk(targetNode);
};

house();



