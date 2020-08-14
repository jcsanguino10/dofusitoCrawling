import requests
import json
import shutil

with open('setsFinalSinMugre.json', encoding="utf-8") as json_data:
    d = json.load(json_data)
    for i,obj in enumerate(d['setsDofus']):
        if i < 1500:
            continue
        name = json.dumps(obj['id'])
        url = json.dumps(obj['imagen']).replace("/dofus/ng/img/../../..","").replace("\"", "").replace(" ", "")
        resp = requests.get(url, stream=True)
        local_file = open(name.replace("\"","")+".png", 'wb')
        resp.raw.decode_content = True
        shutil.copyfileobj(resp.raw, local_file)

    
