import { ObjectId } from 'mongodb';
import { getDbConnection } from '../db';
export const putCourseRoute = {
 path: '/api/course/:id',
 method: 'put',
 handler: async (req, res) => {
 const { id } = req.params;
 const query = { "_id": new ObjectId(id) };
 const db = getDbConnection('courses');
 const existingCourse = await db.collection('courses').findOne(query);
 if (existingCourse) {
 const courseData = req.body;
 //exclude the _id field from being updated
 delete courseData._id;
 const result = await db.collection('courses').findOneAndUpdate(
 { _id: new ObjectId(id) },
 { $set: courseData },
 { returnOriginal: false }
 );
 res.status(200).send(result.value);
 } else {
 res.status(404).send('course not found');
 }
 },
};