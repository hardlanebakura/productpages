from selenium import webdriver
from selenium.webdriver.common.by import By
import selenium.common.exceptions as e
from selenium.webdriver.chrome.options import Options
from log_config import logging
import time
from PIL import Image, ImageOps
from collections import OrderedDict
from operator import itemgetter
import time
from selenium_config import *
import json

start_time = time.time()

#chrome_options.add_extension("C://Users/dESKTOP I5/AppData/Local/Google/Chrome/User Data/Default/Extensions/gighmmpiobklfepjocnamgkkbiglidom/4.37.0_0.crx")

URL_DVD_discs = "https://www.flipkart.com/laptop-accessories/blank-media/pr?sid=6bo%2Cai3%2Cx3f"
URL_BOOKS = "https://time.com/collection/100-must-read-books-2021/"
URL_CHAIRS = "https://www.flipkart.com/search?q=chairs&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off"

def append_json(new_data, type, filename='data.json'):
    with open(filename,'r+') as file:
          # First we load existing data into a dict.
        file_data = json.load(file)
        # Join new_data with file_data inside emp_details
        file_data[type] = new_data
        # Sets file's current position at offset.
        file.seek(0)
        # convert back to json.
        json.dump(file_data, file, indent = 4)

def get_dvds():

    driver.get(URL_DVD_discs)
    driver.implicitly_wait(0.7)
    list1 = []
    for row in range(2,12):
        for i in range(1,4):
            title = get_text_if_exists("/html/body/div/div/div[3]/div[1]/div[2]/div[{}]/div/div[{}]/div/a[2]".format(row, i))
            price = get_text_if_exists("/html/body/div/div/div[3]/div[1]/div[2]/div[{}]/div/div[{}]/div/a[3]/div[1]/div[1]".format(row, i))
            price = "$" + str(round(int(price[1:].replace(",",""))*0.012668, 2))
            img = get_element_if_exists("/html/body/div/div/div[3]/div[1]/div[2]/div[{}]/div/div[{}]/div/a[1]/div[1]/div/div/img".format(row, i)).get_attribute("src")
            list1.append({ "title": title, "price": price, "img": img })
    d = json.dumps({ "DVD_discs": list1 }, indent = 4)
    print(list1)
    with open("data.json", "w") as outfile:
        outfile.write(d)

def get_books():

    driver.get(URL_BOOKS)
    list1 = []
    for i in range(1, 13):
        title = get_element_text("/html/body/div[1]/main/section[1]/div[1]/div/ul/li[{}]/article/a/div[2]/h3".format(i))
        author = get_element_text("/html/body/div[1]/main/section[1]/div[1]/div/ul/li[{}]/article/a/div[2]/h4".format(i)).split("by ")[1]
        img = get_element("/html/body/div[1]/main/section[1]/div[1]/div/ul/li[{}]/article/a/div[1]/div/div/div/img".format(i)).get_attribute("src")
        list1.append({ "title": title, "author": author, "img": img })
    append_json(list1, "books")

def get_chairs():

    driver.get(URL_CHAIRS)
    list1 = []
    for row in range(2,12):
        for i in range(1,4):
            title = get_text_if_exists("/html/body/div/div/div[3]/div[1]/div[2]/div[{}]/div/div[{}]/div/a[2]".format(row, i))
            price = get_text_if_exists("/html/body/div/div/div[3]/div[1]/div[2]/div[{}]/div/div[{}]/div/a[3]/div[1]/div[1]".format(row, i))
            price = "$" + str(round(int(price[1:].replace(",",""))*0.012668, 2))
            img = get_element_if_exists("/html/body/div/div/div[3]/div[1]/div[2]/div[{}]/div/div[{}]/div/a[1]/div[1]/div/div/img".format(row, i)).get_attribute("src")
            list1.append({ "title": title, "price": price, "img": img })
    append_json(list1, "chairs")

#get_dvds()
#get_books()
#get_chairs()

driver.quit()

logging.info("{}".format(round(time.time() - start_time, 3)) + " seconds")

