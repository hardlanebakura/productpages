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

#simulate the browsing session

URL = "https://spontaneous-froyo-55251e.netlify.app/"

def browsing_session_simulation():
    driver.get(URL)
    driver.implicitly_wait(0.4)
    title = get_element_text("/html/body/div/div[1]/div[1]")
    logging.info(title)

    driver.quit()

#browsing_session_simulation()