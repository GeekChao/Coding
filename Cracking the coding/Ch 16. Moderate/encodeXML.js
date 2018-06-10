function encodeXML(xml, map){
    let str = [];

    function encode(xml){
        if(!typeof xml === 'object') throw 'need an xml object';
        if(typeof xml === 'string') return str.push(xml);
        str.push(map[xml.tag]); //tag
        for(let attr of Object.keys(xml.attrs)){ //attrs
            str.push(map[attr]);
            str.push(xml.attrs[attr]);
        }
        str.push('0');
        for(let cxml of xml.children){ //children
            encode(cxml);
        }
        str.push('0');
    }

    encode(xml);
    return str.join(' ');
}

module.exports = encodeXML;