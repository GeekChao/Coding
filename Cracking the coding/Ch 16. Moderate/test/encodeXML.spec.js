const encodeXML = require('../encodeXML');

describe('encode a xml element', () => {
    let xml, mapping;
    beforeEach(() => {
        mapping = {
            'family': 1,
            'person': 2,
            'firstName': 3,
            'lastName': 4, 
            'state': 5
        };
        xml = {
            tag: 'family',
            attrs: {
                'lastName': 'McDowell',
                'state': 'CA'
            },
            children: [
                {
                    tag: 'person',
                    attrs: {
                        firstName: 'Gayle',
                    },
                    children: ['Some message']
                }
            ]
        }
    });

    it('to string with a mapping', () => {
        expect(encodeXML(xml, mapping)).toEqual('1 4 McDowell 5 CA 0 2 3 Gayle 0 Some message 0 0');
    });

    it('unexpected input', () => {
        expect(function(){
            encodeXML('asdf', mapping).toThrow();
        });
    }); 
});