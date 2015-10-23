// adapted from code by www.chirp.com.au

var house = function() 
{
    var targetNode = document;
    var nv, regs;
    
    var houseRegex = new RegExp("\\b(house)\\b", "i");
    var minotaurRegex = new RegExp("\\b(minotaur)\\b","i")
    var wordColor = [];
    var colorIdx = 0;

    var walk = function(node) 
    {
        if (!node || blue(node) || red(node) || strike(node))
            return;
        node = node.firstChild;
        while (node) {
            walk(node);
            node = node.nextSibling;
        }
    };
    
    
    var blue = function(node) 
    {

	if (node.parentNode && node.parentNode.nodeName == "EM") return;
	
        if (node.nodeType == Node.TEXT_NODE) 
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
                return true;
            }
        }
    };
    var red = function(node) 
    {

	if (node.parentNode && node.parentNode.nodeName == "EM") return;
	
        if (node.nodeType == Node.TEXT_NODE) 
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
                return true;
            }
        }
    };
    var strike = function(node)
    {
        if (node.nodeName === "STRIKE" || node.nodeName === "DEL" || node.style && node.style.textDecoration === "line-through" ) {
            var old_color = window.getComputedStyle(node).color;
            var strike_container = document.createElement('del');
            node.parentNode.insertBefore(strike_container, node);
            strike_container.style.color = "LimeGreen";
            strike_container.appendChild(node);

            node.style.color = old_color;
            node.style.color = 'black';
            node.style.textDecoration = 'initial';
            return true;
        }
    };
    walk(targetNode);
};

house();



