# coding=utf-8
import json
import requests
from pprint import pprint
import io
from textstat.textstat import textstat
import sys
reload(sys)
sys.setdefaultencoding('utf8')
import glob

api_key = "s42q9631q8qu"
key_secret = "tl85983onqhe4v3"

endpoint = "https://text.s4.ontotext.com/v1/news"
global_final = []
count = 0

def main(argv):
        text = "my first string"
        print text
        for arg in argv:
            text = arg
            print text
        data = {
            "document": text,
            "documentType": "text/plain"
        }
        print text
        jsonData = json.dumps(data)
        pprint (jsonData)
        headers = {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Accept-Encoding": "gzip",
        }

        req = requests.post(endpoint, headers=headers,data=jsonData, auth=(api_key, key_secret))
        pprint (req)
        response = json.loads(req.content.decode("utf-8"))
        pprint (response)

    # Response Headers
        head = dict(req.headers)
        print ("Headers: ")
        for each in head:
            print (each.capitalize(), ": ", head[each])
    
        final = []    
        seen = set()
        #text = response["text"]
        entities = response["entities"]
        event = entities["Event"]
        for temp in event:
            condition1 = str(temp.get("string"))
            condition2 = str(temp.get("preferredLabel"))[3:-2]
            if condition1 not in seen:
                final.append(condition1)
                seen.add(condition1)
            if condition2 not in seen:
                final.append(condition2)
                seen.add(condition2)
    
        global_final = final
        return global_final
    #count+=1
    #with open (str(count) , 'w') as outfile:
    #   out_string = json.dumps({'text':text, 'tags':final, 'flesch_index':flesch, 'grade':fleschgrade, 'site':site, 'lang':lang, 'title':title})
    #  outfile.write(out_string)
        
if __name__ == "__main__":
    main(sys.argv[1:])
    
