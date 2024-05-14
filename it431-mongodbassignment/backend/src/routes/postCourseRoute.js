import { getDbConnection } from "../db";
export const postCourseRoute = {
 path: '/api/course',
 method: 'post',
 handler: async (req, res) => {
 const db = getDbConnection('courses');
 const result = await db.collection('courses').insertOne(req.body);
 const insertedCourse = await db.collection('courses').findOne({ _id: result.insertedId
});
 console.log(result)
 res.status(201).json({
 message: 'Course created successfully',
 course: insertedCourse,
 });
 },
};