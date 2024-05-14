import { ObjectId } from "mongodb";
import { getDbConnection } from "../db";
export const deleteCourseRoute = {
 path: '/api/course/:id',
 method: 'delete',
 handler: async (req, res) => {
 const id = req.params.id;
 console.log(id);
 const query = { "_id": new ObjectId(id) };
 const db = getDbConnection('courses');
 const existingCourse = await db.collection('courses').findOne(query);
 if (existingCourse) {
 const result = await db.collection('courses').deleteOne(query);
 res.status(200).send('course deleted');
 } else {
 res.status(404).send('course not found');
 }
 }
};