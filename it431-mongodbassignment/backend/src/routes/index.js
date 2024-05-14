import { getCoursesRoute } from './getCourses';
import { getCourseRoute } from './getCourseRoute';
import { postCourseRoute } from './postCourseRoute';
import { deleteCourseRoute } from './deleteCourseRoute';
import { putCourseRoute } from './putCourseRoute';

export const routes = [
    getCoursesRoute,
    getCourseRoute,
    postCourseRoute,
    deleteCourseRoute,
    putCourseRoute
];
