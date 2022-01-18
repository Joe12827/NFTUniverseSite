from unittest import result
from flask_restful import Resource

from flask_restful import request
from flask_restful import reqparse
import json
from .swen_344_db_utils import *

import requests

class TicketAPI(Resource):
    def get(self, ticker):
        response = requests.get("https://finnhub.io/api/v1/quote?symbol=" + ticker + "&token=c7ia8riad3if83qgh27g")
        return response.json()