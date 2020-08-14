import requests
from bs4 import BeautifulSoup as bs
import re


def crawler():
    # for i in range(1,9):
    for i in range(1,2):
        page = requests.get('https://www.dofus.com/es/mmorpg/enciclopedia/armas?size=96&page=' + str(i))
        soup = bs(page.content, 'html.parser')
        week = soup.find(class_="ak-table ak-responsivetable")
        td = week.find_all("tr",class_=re.compile("ak-bg-"))
        nuevaArma = []
        for element in td:
            nombre = element.find_all(class_="ak-linker")[1].find("a").get_text()
            tipo = element.find(class_="item-type").get_text()
            nivel = re.sub("\D", "", element.find(class_="item-level").get_text())
            url = element.find_all(class_="ak-linker")[1].find("a").get("href")
            temp = url.split("/")
            id = temp[len(temp)-1]
            itemPage = requests.get("https://www.dofus.com" + str(url))
            soupItem = bs(itemPage.content, 'html.parser')
            contentItem = soupItem.find_all(class_="ak-container ak-content-list ak-displaymode-col")
            efectos = contentItem[0]
            caracteristicas = contentItem[1]
            restricciones = contentItem[2]
            print(nombre, tipo, nivel, url, id, efectos)
            break
        break
crawler()