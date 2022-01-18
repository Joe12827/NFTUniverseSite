from flask_restful import Resource

from flask_restful import request
from flask_restful import reqparse
import json
from .swen_344_db_utils import *

class ExampleApi(Resource):
    def get(self):
    # NOTE: No need to replicate code; use the util function!
       result = exec_get_one("SELECT COUNT(*) FROM courses")
       return result

class Classes(Resource):
    def get(self):
        result = exec_get_all("SELECT courses.ID, department.name, courses.c_number, courses.c_title, courses.c_details, college.name FROM courses " + 
                              "JOIN department ON courses.dept_id=department.id JOIN college ON department.college_id=college.id ORDER By courses.ID")
        return result

class ChangeClass(Resource):
    def put(self, id):
        body = json.loads(request.data)
        course = body["data"][0] #Ex: 344
        title = body["data"][1] #Ex: Hardware Programming
        details = body["data"][2] #Ex: what debugger?
        return exec_commit("UPDATE courses SET c_number = '" + str(course) + "', "\
                    "c_title = '" + str(title) + "', c_details = '" + str(details) + "' WHERE id = '" + id + "';")

class DeleteCourse(Resource):
    def delete(self):
        id = request.args.get('id')
        exec_commit("DELETE FROM courses WHERE id = '" + id + "';")
        return "Deleted " + id